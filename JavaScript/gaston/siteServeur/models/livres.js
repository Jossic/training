const mongoose = require('mongoose');

const livreSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: String,
    auteur: String,
    pages: Number
});

module.exports = mongoose.model('Livre', livreSchema);
