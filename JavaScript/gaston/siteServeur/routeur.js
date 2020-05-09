const express = require('express');
var router = express.Router();





router.get('/', (req, res) => {
    res.end('Accueil');
});

router.get('/hello', (req, res) => {
    res.end('hello');
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