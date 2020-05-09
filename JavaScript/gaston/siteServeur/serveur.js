const express = require('express');
const app = express();
const morgan = require('morgan');
const routeur = require('./routeur');
const twig = require('twig');


app.use(express.static('public'));
app.use(morgan('dev'));
app.use('/', routeur);


















app.listen(3000, () => {
    console.log("Listening...")
}
);