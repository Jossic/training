const { check } = require('express-validator');
const usersRepo = require('../../repositories/users');

module.exports = {
    requireTitle: check('title')
        .trim()
        .isLength({ min: 5, max: 50 })
        .withMessage('Ce champ doit comporter entre 5 et 50 caractères'),
    requirePrice: check('price')
        .trim()
        .toFloat()
        .isFloat({ min: 1 })
        .withMessage('Ce champ doit être un nombre supérieur à 1'),
    requireEmail: check('email')
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
    requirePassword: check('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Ce champ doit comprendre entre 4 et 24 caractères'),
    requirePasswordConfirmation: check('passwordConfirmation')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Ce champ doit comprendre entre 4 et 24 caractères')
        .custom(async (passwordConfirmation, { req }) => {
            if (passwordConfirmation !== req.body.password) {
                throw new Error('Les mots de passe doivent correspondre');
            }
        }),
    requireEmailExists: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Email non valide')
        .custom(async (email) => {
            const user = await usersRepo.getOneBy({ email });
            if (!user) {
                throw new Error('Email non trouvé');
            }
        }),
    requireValidPasswordForUser: check('password')
        .trim()
        .custom(async (password, { req }) => {
            const user = await usersRepo.getOneBy({ email: req.body.email });
            if (!user) {
                throw new Error('Mot de passe éronné');
            }
            const validPassword = await usersRepo.comparePasswords(
                user.password,
                password
            );
            if (!validPassword) {
                throw new Error('Mot de passe éronné');
            }

        })
};