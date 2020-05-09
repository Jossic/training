const express = require('express');
const app = express();
const morgan = require('morgan');
const routeur = require('./routeur');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/biblio', { useNewUrlParser: true, useUnifiedTopology: true });

const livreSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: String,
    auteur: String,
    page: Number
});

const livreModel = mongoose.model('Livre', livreSchema);

livreModel.find()
    .exec()
    .then(livres => {
        console.log(livres)
    })
    .catch();



app.use(express.static('public'));
app.use(morgan('dev'));
app.use('/', routeur);


















app.listen(3000, () => {
    console.log("Listening...")
}
);