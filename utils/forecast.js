const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4b7a89e540f3534113e65f6cd4f15b68&query=${latitude},${longitude}`;

    request( {url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to retrieve weather!", undefined);
        } else if (response.body.error) {
            callback("Unable to determine location!", undefined);
        } else {
            console.log(`The temperature is ${response.body.current.temperature} degrees out. There is ${response.body.current.precip} rainfall.`);
        }
    })
}


module.exports = forecast;