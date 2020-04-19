const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    var today = new Date();
    var options = {
        weekday: 'long', year: 'numeric',
        month: 'numeric', day: 'numeric'
    };
    var date = today.toLocaleDateString('fr-FR', options);
    console.log(date);

    res.render('list', { date });

});


app.listen(3000, () => {
    console.log('Listening...');
});