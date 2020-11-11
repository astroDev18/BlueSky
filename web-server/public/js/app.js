console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');
const messageFive = document.querySelector('#message-5');
const messageSix = document.querySelector('#message-6');
const picture = document.querySelector('#img');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = 'Loading Weather...';
    messageTwo.textContent = '';
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = (`${data.error}`);
            } else {
                let degrees = data.forecast.wind_degree;
                let time = data.forecast.observation_time;
                let temps = data.forecast.temperature;
                let pic = data.forecast.weather_icons;
                let weatherDescriptions = data.forecast.weather_descriptions;
                let humidity = data.forecast.humidity;

                let addImg = () => {
                    let img = document.getElementById('mainImg');
                    img.src = pic;
                }
                addImg();

                messageOne.textContent = (`${data.location}`);
                messageTwo.textContent = (`${degrees}`);
                messageThree.textContent = (`${time}`);
                messageFour.textContent = (`${humidity}`);
                messageFive.textContent = (`${weatherDescriptions}`);
                messageSix.textContent = (`${temps}`);
            }
        })
    })
    console.log(location);
})