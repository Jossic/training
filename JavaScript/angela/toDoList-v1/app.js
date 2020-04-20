const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const items = ["num 1", "num 2", "num 3"];
const workItems = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {

    var today = new Date();
    var options = {
        weekday: 'long', year: 'numeric',
        month: 'numeric', day: 'numeric'
    };
    var date = today.toLocaleDateString('fr-FR', options);
    console.log(date);

    res.render('list', { listTitle, items });

});

app.post('/', (req, res) => {
    const item = req.body.newItem;

    items.push(item);
    res.redirect('/');
});

app.get('/work', (req, res) => {
    res.render('list', { listTitle: "Work List", items: workItems });
});

app.listen(3000, () => {
    console.log('Listening...');
});