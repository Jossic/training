const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/contact', (req, res) => {
    res.send('Contactez moi : jo@gmail.com');
});

app.get('/about', (req, res) => {
    res.send("Je m'appelle Jossic !!");
});


app.listen(3000, () => {
    console.log('Listening...');
});