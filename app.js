// const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const prompt = require('prompt-sync')({sigint: true});

// const url = "http://api.weatherstack.com/current?access_key=4b7a89e540f3534113e65f6cd4f15b68&query=24.7136,46.6753";

let areaToCheck = prompt('Please input the city you want to check: ');
if (areaToCheck.length === 0) {
    return console.log("Please input location!");
} else {
    geocode(areaToCheck, (error,{ location, latitude, longitude } = {}) => {

        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {

            if (error) {
                return console.log();
            }

            console.log(location);
            console.log(forecastData);
        });
    })
}