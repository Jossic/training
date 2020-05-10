const express = require('express');
const app = express();
const morgan = require('morgan');
const routeur = require('./routeur');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/biblio', { useNewUrlParser: true, useUnifiedTopology: true });



app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', routeur);


















app.listen(3000, () => {
    console.log("Listening...")
}
);