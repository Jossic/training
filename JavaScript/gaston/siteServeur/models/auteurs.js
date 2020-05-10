const mongoose = require('mongoose');

const auteurSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: String,
    prenom: String,
    age: Number,
    sexe: Boolean,
    description: String
});

auteurSchema.virtual('livres', {
    ref: "Livre",
    localField: "_id",
    foreignField: "auteur"
})

module.exports = mongoose.model('Auteur', auteurSchema);
