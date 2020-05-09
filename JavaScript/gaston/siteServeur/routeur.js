const express = require('express');
var router = express.Router();





router.get('/', (req, res) => {
    res.render('accueil.html.twig');
});

router.get('/livres', (req, res) => {
    res.render('livres/liste.html.twig');
});

router.get('/livres/:nom', (req, res) => {
    console.log(req.params.nom);
    res.render('livres/livre.html.twig', { nom: req.params.nom })
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