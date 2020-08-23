const express = require('express');
const { route } = require('./users');
const router = express.Router();
const auth = require('../../middleware/auth');
const { body, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populatecd('user', ['name', 'avatar']);

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
        const profileFields = {}
        profileFields.user = req.body.id;
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

module.exports = router;