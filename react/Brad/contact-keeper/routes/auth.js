const express = require('express');
const router = express.Router();

// @route   GET  api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
    res.send('Connexion d\'un utilisateur');
});

// @route   POST  api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
    res.send('Envoi d\'un utilisateur');
});


module.exports = router;