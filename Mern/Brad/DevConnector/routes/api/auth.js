const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const auth = require('../../middleware/auth');

const User = require('../../models/User');


router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(500).send('Erreur serveur');
    }
});

router.post('/', [
    body('email', 'Merci de renseigner un mail valide').isEmail(),
    body('password', 'Merci de renseigner votre mot de passe').exists(),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            //Est-ce que l'utilisateur existe
            let user = await User.findOne({ email });
            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Identifiant et/ou mot de passe incorrect' }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Identifiant et/ou mot de passe incorrect' }] });
            }

            //Return jsonwebtoken
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                },
            );


        } catch (err) {
            console.log(err);
            res.status(500).send('Erreur serveur lol');
        }
    });

module.exports = router;