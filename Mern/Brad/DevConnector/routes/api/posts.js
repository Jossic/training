const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Posts');
const User = require('../../models/User');

// @route     POST api/posts
// @desc      Create a post
// @access    Private
router.get('/', [auth, [
    body('texte', "Le texte est recquis").not().isEmpty()
]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newPost = new Post({
                texte: req.body.texte,
                nom: user.nom,
                avatar: user.avatar,
                user: req.user.id
            });

            const post = await newPost.save();

            res.json(post);
        } catch (e) {
            console.log(e);
            res.status(500).send('Erreur serveur');
        }

    });

module.exports = router;