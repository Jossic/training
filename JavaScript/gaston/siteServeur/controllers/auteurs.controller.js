const auteurModel = require('../models/auteurs');
const mongoose = require('mongoose');
const fs = require('fs');



exports.auteurAffichage = (req, res) => {
    auteurModel.findById(req.params.id)
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
