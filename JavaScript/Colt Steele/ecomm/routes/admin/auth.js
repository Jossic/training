const express = require('express');
const { check, validationResult } = require('express-validator');

const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }));
});

router.post('/signup', [
    check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Ce champ doit être une adresse email valide')
        .custom(async (email) => {
            const existingUser = await usersRepo.getOneBy({ email });
            if (existingUser) {
                throw new Error("Email déjà utilisé");
            }
        }),
    check('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Ce champ doit comprendre entre 4 et 24 caractères'),
    check('passwordConfirmation')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Ce champ doit comprendre entre 4 et 24 caractères')
        .custom((passwordConfirmation, { req }) => {
            if (password !== passwordConfirmation) {
                throw new Error('Les mots de passe doivent correspondre');
            }
        })
], async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);

    const { email, password, passwordConfirmation } = req.body;
    const user = await usersRepo.create({ email, password });
    req.session.userId = user.id;

    res.send('Compte crée');
});

router.get('/signout', (req, res) => {
    req.session = null;
    res.send('Deconnection effective');
});

router.get('/signin', (req, res) => {
    res.send(signinTemplate());
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await usersRepo.getOneBy({ email });

    if (!user) {
        return res.send('Email non reconnu');
    }

    const validPassword = await usersRepo.comparePasswords(
        user.password,
        password
    );
    if (!validPassword) {
        return res.send('Mot de passe éronné');
    }

    req.session.userId = user.id;

    res.send('Vous êtes connecté');
});

module.exports = router;