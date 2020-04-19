const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});


app.post('/signup', (req, res) => {
    const prenom = req.body.prenom;
    const mail = req.body.mail;
    const data = {
        members: [
            {
                email_address: mail,
                status: "subscribed",
                merge_fields: {
                    FNAME: prenom,
                }
            }]
    };

    const jsonData = JSON.stringify(data);


    const url = 'https://us4.api.mailchimp.com/3.0/lists/c934f56af0';

    const options = {
        method: "POST",
        auth: "Jossic:37734945172bb29746e94687675fd8a5-us4"
    };

    const request = https.request(url, options, (response) => {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html');
        } else {
            res.sendFile(__dirname + '/failure.html');
        }

        response.on('data', (data) => {
            console.log(JSON.parse(data));
        })


    });
    request.write(jsonData);
    request.end();

});


app.post('/failure', (req, res) => {
    res.redirect('/signup');
});



app.listen(3000, () => {
    console.log("Listening")
});


