const { check } = require('express-validator');
const usersRepo = require('../../repositories/users');

module.exports = {
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
        .custom((passwordConfirmation, { req }) => {
            if (password !== passwordConfirmation) {
                throw new Error('Les mots de passe doivent correspondre');
            }
        })
};