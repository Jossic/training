const express = require('express');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }));
});



router.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;

    const existingUser = await usersRepo.getOneBy({ email });
    if (existingUser) {
        return res.send("Email déjà utilisé");
    }

    if (password !== passwordConfirmation) {
        return res.send("Les mots de passe doivent correspondre");
    }

    const user = await usersRepo.create({ email, password });

    req.session.userId = user.id;

    res.send('Account created');
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