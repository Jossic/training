const express = require('express');
const router = express.Router();
const twig = require('twig');


router.get('/', (req, res) => {
    res.render('accueil.html.twig');
});

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