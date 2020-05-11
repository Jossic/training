const express = require('express');
const router = express.Router();
const twig = require('twig');
const auteurController = require('../controllers/auteurs.controller');


router.get('/:id', auteurController.auteurAffichage);
router.get('/', auteurController.auteursAffichage);
router.post('/', auteurController.auteursAjout);
router.post('/delete/:id', auteurController.auteurSuppr);
router.get('/modifier/:id', auteurController.auteurModif);
router.post('/modifApp', auteurController.modifApp);


module.exports = router;