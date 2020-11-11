const request = require('request');
const chalk = require('chalk');
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4b7a89e540f3534113e65f6cd4f15b68&query=${latitude},${longitude}`;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to retrieve weather!", undefined);
        } else if (body.error) {
            callback("Unable to determine location!", undefined);
        } else {
            callback(undefined, body.current);
        }
    })
}
module.exports = forecast;