const express = require('express');
const https = require('https');
let cityName = "Sommepy-Tahure"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=593934f72669afa98c34ac1c17718026&units=metric`

const app = express();

app.get('/', (req, res) => {
    https.get(url, res => {
        // console.log(res.statusCode)

    })
    res.send("ok");
});


app.listen(3000, () => {
    console.log('Listening...');
});





`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=593934f72669afa98c34ac1c17718026&units=metric`

