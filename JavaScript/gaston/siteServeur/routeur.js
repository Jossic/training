const express = require('express');
var router = express.Router();
const twig = require('twig');
const livreModel = require('./models/livres');




router.get('/', (req, res) => {
    res.render('accueil.html.twig');
});

router.get('/livres', (req, res) => {
    const livres = livreModel.find()
        .exec()
        .then(livres => {
            res.render('livres/liste.html.twig', { livres });
        })
        .catch(error => {
            console.log(error)
        });
});

router.get('/livres/:id', (req, res) => {
    livreModel.findById(req.params.id)
        .exec()
        .then(livre => {
            res.render('livres/livre.html.twig', { livre });
        })
        .catch(error => {
            console.log(error)
        });
    // res.render('livres/livre.html.twig', {});
}
);

router.use((req, res, suite) => {
    const error = new Error('Euhh vous allez ou la ?');
    error.status = 404;
    suite(error);
});

router.use((error, req, res) => {
    res.status(error.status || 500);
    res.end(error.message);
});


module.exports = router;