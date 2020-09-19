const express = require('express');
const router = express.Router();

// @route   GET  api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Récupérer tous les contacts')
});

// @route   POST  api/contacts
// @desc    Add new contacts
// @access  Private
router.post('/', (req, res) => {
    res.send('Ajout d\'un contacts')
});

// @route   PUT  api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update d\'un contacts')
});

// @route   DELETE  api/contacts/:id
// @desc    Supprimer contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Supression d\'un contacts')
});

module.exports = router;