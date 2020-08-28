const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Posts');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route     POST api/posts
// @desc      Create a post
// @access    Private
router.post('/',
    [auth,
        [
            body('texte', "Le texte est recquis").not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newPost = new Post({
                texte: req.body.texte,
                nom: user.name,
                avatar: user.avatar,
                user: req.user.id
            });

            const post = await newPost.save();

            res.json(post);
        } catch (e) {
            console.log(e.message);
            res.status(500).send('Erreur serveur');
        }

    });

// @route     GET api/posts
// @desc      Get all posts
// @access    Private
router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur serveur');
    }
});

// @route     GET api/posts/:id
// @desc      Get post by ID
// @access    Private
router.get('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Aucun post trouvé' });
        }
        res.json(post);
    } catch (e) {
        console.log(e.message);
        if (e.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Aucun post trouvé' });
        }
        res.status(500).send('Erreur serveur');
    }
});

// @route     DELETE api/posts/:id
// @desc      Delete a post
// @access    Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Aucun post trouvé' });
        }

        // On vérifie que l'utilisateur qui supprime le post est bien celui qui l'a crée
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Vous n\'avez pas l\'autorisation de supprimer ce post' })
        }
        await post.remove();

        res.json({ msg: ('Post supprimé') });
    } catch (e) {
        console.log(e.message);
        if (e.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Aucun post trouvé' });
        }
        res.status(500).send('Erreur serveur');
    }
});

// @route     PUT api/posts/like/:id
// @desc      Like a post
// @access    Private
router.put('/like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Ce post est déjà like' });
        }

        post.likes.unshift({ user: req.user.id });

        await post.save();
        res.json(post.likes);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur serveur');
    }
});

// @route     PUT api/posts/unlike/:id
// @desc      Unlike a post
// @access    Private
router.put('/unlike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Ce post n\'est pas déjà like' });
        }

        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);

        await post.save();

        res.json(post.likes);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur serveur');
    }
});

// @route     POST api/posts/comment/:id
// @desc      Comment a post
// @access    Private
router.post(
    '/comment/:id',
    [
        auth,
        [
            body('texte', "Le texte est recquis").not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');
            const post = await Post.findById(req.params.id);

            const newComment = {
                texte: req.body.texte,
                nom: user.name,
                avatar: user.avatar,
                user: req.user.id
            };

            post.commentaires.unshift(newComment);

            await post.save();

            res.json(post.commentaires);
        } catch (e) {
            console.log(e.message);
            res.status(500).send('Erreur serveur');
        }

    });

// @route     DELETE api/posts/comment/:id/:comment_id
// @desc      Delete a comment
// @access    Private
router.delete(
    '/comment/:id/:comment_id',
    auth,
    async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);

            const comment = post.commentaires.find(comment => comment.id === req.params.comment_id);

            if (!comment) {
                return res.status(404).json({ msg: 'Aucun commentaire trouvé' });
            }

            if (comment.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'Utilisateur non autorisé' });
            }

            const removeIndex = post.commentaires.map(commentaire => commentaire.user.toString()).indexOf(req.user.id);

            post.commentaires.splice(removeIndex, 1);

            await post.save();

            res.json(post.commentaires);
        } catch (e) {
            console.log(e.message);
            res.status(500).send('Erreur serveur');
        }
    });







module.exports = router;