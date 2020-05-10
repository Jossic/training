const express = require('express');
const app = express();
const morgan = require('morgan');
const routeur = require('./routeur');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
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
    if (file.minetype === "image/jpeg" || file.minetype === "image/png") {
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



app.use('/', routeur);











app.listen(3000, () => {
    console.log("Listening...")
}
);