const express = require('express');
const bodyParser = require('body-parser');
const request = ('request');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.get('/signup', (req, res) => {
    res.send('Bonjour');
});

app.post('/signup', (req, res) => {
    const prenom = req.body.prenom;
    const mail = req.body.mail;
    console.log(prenom, mail);
});




app.listen(3000, () => {
    console.log("Listening")
});