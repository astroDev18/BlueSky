// const http = require('http');
// const url = 'http://api.weatherstack.com/current?access_key=4b7a89e540f3534113e65f6cd4f15b68&query=24.7136,46.6753'
//
// const request = http.request(url, (response) => {
//     let data = '';
//
//     response.on('data', (chunk) => {
//         data = data + chunk.toString();
//     })
//
//     response.on('end', () => {
//         const body = JSON.parse(data);
//         console.log(body);
//     });
// });
//
// request.on('error', (error) => {
//     console.log('An error', error);
// })
//
//
// request.end();

// const testArray = [1,2,3,4,5,6,7,8];
// testArray.forEach(num => { setTimeout(() => { console.log(num); }, 500); });

const testArray = [1,2,3,4,5,6,7,8];
testArray.forEach((num, index) => { setTimeout(() => { console.log(num); }, 500 * index); });