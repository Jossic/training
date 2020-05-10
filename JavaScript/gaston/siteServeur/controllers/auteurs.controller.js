const auteurModel = require('../models/auteurs');
const livreModel = require('../models/livres');
const mongoose = require('mongoose');
const fs = require('fs');



exports.auteurAffichage = (req, res) => {
    auteurModel.findById(req.params.id)
        .populate('livres')
        .exec()
        .then((auteur) => {
            console.log(auteur)
            res.render('auteurs/auteur.html.twig', { auteur });
        })
        .catch((err) => {
            console.log(err);
        }
        )
};


exports.auteursAffichage = (req, res) => {
    auteurModel.find()
        .populate('livres')
        .exec()
        .then((auteurs) => {
            console.log(auteurs)
            res.render('auteurs/liste.html.twig', { auteurs });
        })
        .catch((err) => {
            console.log(err);
        })
};


exports.auteursAjout = (req, res) => {
    const auteur = auteurModel({
        _id: new mongoose.Types.ObjectId(),
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        sexe: (req.body.sexe === "homme") ? true : false,
        description: req.body.descriptif
    })
    auteur.save()
        .then((resultat) => {
            res.redirect('/auteurs');
        })
        .catch((err) => {
            console.log(err);
        })
};


exports.auteurSuppr = (req, res) => {
    auteurModel.find()
        .where('nom')
        .equals('anonyme')
        .exec()
        .then(auteur => {
            livreModel.updateMany({ 'auteur': req.params.id },
                { '$set': { 'auteur': auteur[0]._id } },
                { 'multi': true })
                .exec()
                .then(
                    auteurModel.remove({ _id: req.params.id })
                        .exec()
                        .then(res.redirect('/auteurs'))
                        .catch()
                )


        })
}
