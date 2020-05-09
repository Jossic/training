const express = require('express');
const app = express();
const morgan = require('morgan');
const routeur = require('./routeur');




app.use(morgan('dev'));
app.use('/', routeur);


















app.listen(3000, () => {
    console.log("Listening...")
}
);