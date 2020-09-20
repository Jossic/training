const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET  api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contacts);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Erreur serveur')
    }
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