const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = "http://api.weatherstack.com/current?access_key=4b7a89e540f3534113e65f6cd4f15b68&query=24.7136,46.6753";


forecast(-25, 23, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
});

geocode('Kansas City, Missouri, United States', (error, data) => {
    console.log('error', error);
    console.log('Data', data);
})