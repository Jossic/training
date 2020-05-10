const mongoose = require('mongoose');

const auteurSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: String,
    prenom: String,
    age: Number,
    sexe: Boolean,
    description: String
});

module.exports = mongoose.model('Auteur', auteurSchema);
