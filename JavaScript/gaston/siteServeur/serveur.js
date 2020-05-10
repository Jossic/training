const express = require('express');
const app = express();
const morgan = require('morgan');
const routerLivre = require('./route/livre.route');
const routerGlobal = require('./route/global.route');
const routerAuteur = require('./route/auteurs.route');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 7200000 }
}))

mongoose.connect('mongodb://localhost/biblio', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1);

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

app.use('/livres', routerLivre);
app.use('/auteurs', routerAuteur);



app.use('/', routerGlobal);





app.listen(3000, () => {
    console.log("Listening...")
}
);