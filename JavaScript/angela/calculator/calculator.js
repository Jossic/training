const express = require('express')
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {

    const result = Number(req.body.num1) + Number(req.body.num2);
    res.send(`The result is : ${result} !`);
});


app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});


app.post('/bmiCalculator', (req, res) => {

    const result = parseFloat(req.body.weight) / parseFloat(req.body.height * req.body.height);
    res.send(`Your BMI is : ${result} !`);
});

app.listen(3000, () => {
    console.log('Listening...');
});