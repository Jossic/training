const personnages = require('./personnages.json');
const express = require('Express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get(['/', '/index'], (req, res) => {
    res.render('index', { pseudo: "Jossic" });
})

app.get('/personnages', (req, res) => {
    res.render('personnages', { personnages });
})

app.get('/personnage', (req, res) => {
    const idPerso = req.query.perso;
    res.render('personnage', { perso: personnages[idPerso] });
})







app.listen(9090, () => {
    console.log("ecoute");
})