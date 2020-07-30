const express = require('express');
const app = express();

app.set('view engine', 'ejs');



app.get(['/', '/index'], (req, res) => {
    res.render('index', { pseudo: "Jossic" });
})

app.get('/personnages', (req, res) => {
    res.render('personnages');
})







app.listen(9090, () => {
    console.log("ecoute");
})