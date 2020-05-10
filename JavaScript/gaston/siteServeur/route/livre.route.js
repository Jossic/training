const express = require('express');
var router = express.Router();
const twig = require('twig');
const livreController = require('../controllers/livre.controller');

const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    console.log(file);
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Erreur sur l'image"), false);
    }
};


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});




router.get('/livres', livreController.livresAffichage);
router.get('/livres/:id', livreController.livreAffichage);
router.post('/livres', upload.single("image"), livreController.livresAjout);
router.post('/livres/delete/:id', livreController.livreSuppression);
router.get('/livres/modifier/:id', livreController.livreModifier);
router.post('/livres/updateImage', upload.single('image'), livreController.imageModifier);
router.post('/livres/modifApp', livreController.modifApp);


module.exports = router;