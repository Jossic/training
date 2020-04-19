const express = require('express');
const https = require('https');
let cityName = "Sommepy-Tahure"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=593934f72669afa98c34ac1c17718026&units=metric`

const app = express();

app.get('/meteo', (req, res) => {


    https.get(url, (response) => {
        console.log('statusCode:', response.statusCode);
        // console.log('headers:', response.headers);

        response.on('data', (d) => {
            process.stdout.write(d);
            const weatherData = JSON.parse(d);
            const temp = weatherData.main.temp;
            console.log(temp);
            const description = weatherData.weather[0].description;
            console.log(description);
            const icon = weatherData.weather[0].icon;
            const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            res.send(`<h1>La temperature à ${cityName} est de ${temp}°C, le temps est ${description}</h1><br><p><img src="${imgUrl}"></p>`);
        });

    }).on('error', (e) => {
        console.error(e);

    });
    // https.get(url, (res) => {
    //     console.log(res.statusCode);

    //     res.on('data', (data) => {
    //         const weatherData = JSON.parse(data);
    //         const temp = weatherData.main.temp;
    //         console.log(temp);
    //         const description = weatherData.weather[0].description;
    //         console.log(description);

    //         res.send(`La temperature à ${cityName} est de ${temp}°C, le temps est ${description}`);
    //     })

    // })

});


app.listen(3000, () => {
    console.log('Listening...');
});






