const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello');
});


app.listen(3000, () => {
    console.log('Listening...');
});