const request = require('request');
const chalk = require('chalk');
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=4b7a89e540f3534113e65f6cd4f15b68&query=${latitude},${longitude}`;

    request( {url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to retrieve weather!", undefined);
        } else if (body.error) {
            callback("Unable to determine location!", undefined);
        } else {
            callback(undefined, `It is ${body.current.weather_descriptions} with ${body.current.humidity}`)
        //     console.log(chalk.greenBright(`The weather conditions in the area are currently ${body.current.weather_descriptions}`))
        //     console.log(chalk.redBright(`* The wind direction is ${body.current.wind_dir}, and the speed is ${body.current.wind_speed}.`))
        //     console.log(chalk.blueBright(`* The humidity outside is ${body.current.humidity}, and rainfall is ${body.current.precip}.`))
        //     console.log(chalk.yellowBright(`* The temperature is ${body.current.temperature} degrees out, and it feels like ${body.current.feelslike}.`))
        }
    })
}


module.exports = forecast;