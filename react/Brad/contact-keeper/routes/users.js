const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');

const User = require('../models/User');

// @route   POST  api/users
// @desc    Register a user
// @access  Public
router.post('/', [
    body('name', 'Merci de renseigner votre nom').not().isEmpty(),
    body('email', 'Merci de renseigner un email correct').isEmail(),
    body('password', 'Merci de renseigner un mot de passe correspondant').isLength({
        min: 6
    }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: "Cet utilisateur existe déjà" });
        }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 36000
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur Serveur');
    }
});


module.exports = router;