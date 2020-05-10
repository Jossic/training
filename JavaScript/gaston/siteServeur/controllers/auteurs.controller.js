const auteurModel = require('../models/auteurs');
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
    console.log(auteur);
    // auteur.save()
    //     .then((resultat) => {
    //         res.redirect('/auteurs');
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
};
