const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    res.send('ok');
});


module.exports = router;