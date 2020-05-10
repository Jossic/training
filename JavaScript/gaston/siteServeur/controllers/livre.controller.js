const livreModel = require('../models/livres');
const auteurModel = require('../models/auteurs');
const mongoose = require('mongoose');
const fs = require('fs');


exports.livresAffichage = (req, res) => {
    auteurModel.find()
        .exec()
        .then((auteurs) => {
            livreModel.find()
                .populate('auteur')
                .exec()
                .then(livres => {
                    res.render('livres/liste.html.twig', { livres, auteurs, message: res.locals.message });
                })
                .catch(error => {
                    console.log(error)
                });
        })
        .catch(error => {
            console.log(error)
        })

};


exports.livresAjout = (req, res) => {
    const livre = new livreModel({
        _id: new mongoose.Types.ObjectId(),
        nom: req.body.nom,
        auteur: req.body.auteur,
        pages: req.body.pages,
        description: req.body.description,
        image: req.file.path.substring(14)
    })
    livre.save()
        .then(resultat => {
            console.log(resultat);
            res.redirect('/livres');

        })
        .catch(error => {
            console.log(error);
        })
};

exports.livreAffichage = (req, res) => {
    livreModel.findById(req.params.id)
        .populate('auteur')
        .exec()
        .then(livre => {
            res.render('livres/livre.html.twig', { livre, isModif: false });
        })
        .catch(error => {
            console.log(error)
        });
};

exports.livreSuppression = (req, res) => {
    const livre = livreModel.findById(req.params.id)
        .select('image')
        .exec()
        .then((livre) => {
            fs.unlink('/public/images/' + livre.image, (error) => {
                console.log(error);
            })
            livreModel.remove({ _id: req.params.id })
                .exec()
                .then(resultat => {
                    req.session.message = {
                        type: "success",
                        content: "Suppression effectuée"
                    }
                    res.redirect('/livres')
                })
                .catch(error => {
                    console.log(error);
                })
        })
        .catch(error => {
            console.log(error);
        })

};

exports.livreModifier = (req, res) => {
    auteurModel.find()
        .exec()
        .then((auteurs) => {
            livreModel.findById(req.params.id)
                .populate('auteur')
                .exec()
                .then(livre => {
                    res.render('livres/livre.html.twig', { livre, auteurs, isModif: true });
                })
                .catch(error => {
                    console.log(error)
                });
        })
        .catch(error => {
            console.log(error)
        })
};

exports.imageModifier = (req, res) => {
    const livre = livreModel.findById(req.body.identifiant)
        .select('image')
        .exec()
        .then(livre => {
            fs.unlink('/public/images/' + livre.image, (error) => {
                console.log(error);
            })
            const livreUpdate = {
                image: req.file.path.substring(14)
            };

            livreModel.update({ _id: req.body.identifiant }, livreUpdate)
                .exec()
                .then(resultat => {
                    res.redirect('/livres/modifier/' + req.body.identifiant)
                })
                .catch(error => {
                    req.session.message = {
                        type: "error",
                        content: "Modification échouée"
                    }
                    res.redirect('/livres')
                })
        })
        .catch(error => {
            console.log(error)
        });
};

exports.modifApp = (req, res) => {
    const livreUpdate = {
        nom: req.body.nom,
        auteur: req.body.auteur,
        pages: req.body.pages,
        description: req.body.description
    }
    livreModel.update({ _id: req.body.identifiant }, livreUpdate)
        .exec()
        .then(resultat => {
            if (resultat.nModified < 1) {
                throw new Error('Requête de modification échouée...');
            }
            req.session.message = {
                type: "success",
                content: "Modification effectuée"
            }
            res.redirect('/livres')

        })
        .catch(error => {
            req.session.message = {
                type: "error",
                content: "Modification échouée"
            }
            res.redirect('/livres')
        })
};