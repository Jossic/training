const mongoose = require('mongoose');

const livreSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: String,
    auteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auteur',
        required: true
    },
    pages: Number,
    description: String,
    image: String
});

module.exports = mongoose.model('Livre', livreSchema);
