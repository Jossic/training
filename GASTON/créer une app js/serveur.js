const personnages = require('./personnages.json');
const express = require('Express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/personnage', (req, res) => {
    const monPerso = req.body.perso;
    const monArme = req.body.arme;

    let perso = '';
    for (perso in personnages) {
        if (monPerso === personnages[perso].nom) {
            personnages[perso].arme = monArme
            break;
        }
    }
    fs.writeFileSync('personnages.json', JSON.stringify(personnages, undefined, 4));
    res.render('personnage', { perso: personnages[perso] });
})






app.listen(9090, () => {
    console.log("ecoute");
})