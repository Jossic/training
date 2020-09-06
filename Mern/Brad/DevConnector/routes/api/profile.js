const express = require('express');
const { route } = require('./users');
const router = express.Router();
const request = require('request');
const config = require('config');
const auth = require('../../middleware/auth');
const { body, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { populate } = require('../../models/User');


// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'Pas de profil pour cet utilisateur' });
        }

        res.json(profile);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur serveur');
    }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/', [
    auth, [
        body('statut', 'Le statut est recquis').not().isEmpty(),
        body('competences', 'Les competences sont recquises').not().isEmpty()
    ]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            entreprise,
            website,
            adresse,
            bio,
            statut,
            github,
            competences,
            youtube,
            facebook,
            twitter,
            instagram,
            linkedin,
        } = req.body;

        // Construction d'un objet profile
        const profileFields = {};
        profileFields.user = req.user.id;
        if (entreprise) profileFields.entreprise = entreprise;
        if (website) profileFields.website = website;
        if (adresse) profileFields.adresse = adresse;
        if (bio) profileFields.bio = bio;
        if (statut) profileFields.statut = statut;
        if (github) profileFields.github = github;
        if (competences) {
            profileFields.competences = competences.split(',').map(competences => competences.trim());
        }

        // Construction d'un objet social
        profileFields.social = {}
        if (youtube) profileFields.social.youtube = youtube;
        if (twitter) profileFields.social.twitter = twitter;
        if (facebook) profileFields.social.facebook = facebook;
        if (linkedin) profileFields.social.linkedin = linkedin;
        if (instagram) profileFields.social.instagram = instagram;

        try {
            let profile = await Profile.findOne({ user: req.user.id });

            if (profile) {
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                );

                return res.json(profile);
            }

            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);

        } catch (e) {
            console.log(e);
            res.status(500).send('Erreur Serveur');
        }
    })



// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['nom', 'avatar']);
        res.json(profiles);
    } catch (e) {
        console.log(e);
        res.status(500).send('Erreur Serveur');
    }

});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['nom', 'avatar']);

        if (!profile) return res.status(400).json({ msg: 'Profil non trouvé' });

        res.json(profile);
    } catch (e) {
        console.log(e.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profil non trouvé' });
        }
        res.status(500).send('Erreur Serveur');
    }

});


// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
    try {

        await Profile.findOneAndRemove({ user: req.user.id });
        await User.findOneAndRemove({ _id: req.user.id });
        res.json({ msg: 'Utilisateur supprimé' });
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur Serveur');
    }

});


// @route    PUT api/profile/experience
// @desc     Add profile exp
// @access   Private
router.put('/experience', [auth, [
    body('nom', 'Le titre est recquis').not().isEmpty(),
    body('entreprise', 'Le nom de l\'entreprise est recquis').not().isEmpty(),
    body('de', 'La date de début est requise').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {
        nom,
        entreprise,
        adresse,
        de,
        a,
        actuel,
        description
    } = req.body;

    const newExp = {
        nom,
        entreprise,
        adresse,
        de,
        a,
        actuel,
        description
    }

    try {
        const profile = await Profile.findOne({ user: req.user.id });
        profile.experience.unshift(newExp);

        await profile.save();

        res.json(profile);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur Serveur');
    }
})

// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete profile exp
// @access   Private
router.delete('/experience/:exp_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);

        profile.experience.splice(removeIndex, 1);

        await profile.save();

        res.json(profile);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur Serveur');
    }
});

// @route    PUT api/profile/formation
// @desc     Add profile formation
// @access   Private
router.put('/formation', [auth, [
    body('etablissement', 'L\'établissement est recquis').not().isEmpty(),
    body('niveau', 'Le niveau est recquis').not().isEmpty(),
    body('domaine', 'Le domaine est recquis').not().isEmpty(),
    body('de', 'La date de début est requise').not().isEmpty(),

]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {
        etablissement,
        niveau,
        domaine,
        de,
        a,
        actuel,
        description
    } = req.body;

    const newFormation = {
        etablissement,
        niveau,
        domaine,
        de,
        a,
        actuel,
        description
    }

    try {
        const profile = await Profile.findOne({ user: req.user.id });
        profile.formation.unshift(newFormation);

        await profile.save();

        res.json(profile);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur Serveur');
    }
})

// @route    DELETE api/profile/formation/:formation_id
// @desc     Delete profile formation
// @access   Private
router.delete('/formation/:formation_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        const removeIndex = profile.formation.map(item => item.id).indexOf(req.params.formation_id);

        profile.formation.splice(removeIndex, 1);

        await profile.save();

        res.json(profile);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur Serveur');
    }
});

// @route    GET api/profile/github/:username
// @desc     Get user reps from github
// @access   Public
router.get('/github/:username', (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: { 'user-agent': "node.js" }
        };

        request(options, (error, response, body) => {
            if (error) {
                console.log(error)
            }
            if (response.statusCode !== 200) {
                return res.status(404).json({ msg: "Aucun profil  Github trouvé" });
            }
            res.json(JSON.parse(body));
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Erreur Serveur');
    }
})


module.exports = router;