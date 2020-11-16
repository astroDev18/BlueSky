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
const windSpeed = document.querySelector('#wind-speed');
const cloudCover = document.querySelector('#cloudcover');
const rainFall = document.querySelector('#precipitation');
const localTime = document.querySelector('#local-time');
const windDirection = document.querySelector('#direction');
const pressure = document.querySelector('#pressure');
const feelslike = document.querySelector(`#feelslike`);

weatherForm.addEventListener('#submit', (e) => {
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = 'Loading Weather...';
    messageTwo.textContent = '';
    windDirection.textContent = ('');
    messageThree.textContent = (``);
    messageFour.textContent = (``);
    messageFive.textContent = (``);
    messageSix.textContent = (``);
    windSpeed.textContent = (``);
    cloudCover.textContent = (``);
    rainFall.textContent = (``);
    localTime.textContent = (``);
    pressure.textContent = (``);
    feelslike.textContent = (``);


    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = (`${data.error}`);
            } else {
                let degrees = data.forecast.current.wind_degree;
                let time = data.forecast.current.observation_time;
                let temps = data.forecast.current.temperature;
                let pic = data.forecast.current.weather_icons;
                let weatherDescriptions = data.forecast.current.weather_descriptions;
                let humidity = data.forecast.current.humidity;
                let windSpeeds = data.forecast.current.wind_speed;
                let cloudCoverage = data.forecast.current.cloudcover;
                let precipitation = data.forecast.current.precip;
                let localtimes = data.forecast.location.localtime;
                let direction = data.forecast.current.wind_dir;
                let pressures = data.forecast.current.pressure;
                let feelslikes = data.forecast.current.feelslike;

                // let addImg = () => {
                //     let img = document.getElementById('mainImg');
                //     img.src = pic;
                // }
                // addImg();


                let input = localtimes;
                let values = localtimes.split(" ");
                let dates = values[0];
                let times = values[1] ? input.substr(input.indexOf(' ') + 1) : '';

                let CSSImage = document.querySelector('.card-image')

                let desc = weatherDescriptions[0].toLowerCase();
                if (desc.includes("sunny")) {
                    CSSImage.style.backgroundImage = "url('/img/008-sunny.svg')";
                } else if (desc.includes("clear")) {
                    CSSImage.style.backgroundImage = "url('/img/sun.svg')";
                } else if (desc.includes("partly cloudy")) {
                    CSSImage.style.backgroundImage = "url('/img/partlycloudy.svg')";
                } else if (desc.includes("snow")) {
                    CSSImage.style.backgroundImage = "url('/img/snowy.png')";
                } else if (desc.includes("freezing")) {
                    CSSImage.style.backgroundImage = "url('/img/freezingcloud.png')";
                } else if (desc.includes("overcast")) {
                    CSSImage.style.backgroundImage = "url('/img/overcast.png')";
                } else if (desc.includes("mist")) {
                    CSSImage.style.backgroundImage = "url('/img/mist.png')";
                } else if (desc.includes("rain")) {
                    CSSImage.style.backgroundImage = "url('/img/rain.svg')";
                } else if (desc.includes("thunder")) {
                    CSSImage.style.backgroundImage = "url('/img/thunderstorm.png')";
                } else if (desc.includes("heavy")) {
                    CSSImage.style.backgroundImage = "url('/img/storm.png')";
                }


                messageOne.textContent = (`${data.location}`);
                messageTwo.textContent = (`Direction: ${degrees}°`);
                messageThree.textContent = (`${times}`);
                messageFour.textContent = (`Humidity: ${humidity}%`);
                messageFive.textContent = (`${weatherDescriptions}`);
                messageSix.textContent = (`${temps}° Celsius`);
                windSpeed.textContent = (`${windSpeeds} Km/h`);
                cloudCover.textContent = (`Cloud Coverage: ${cloudCoverage}%`);
                rainFall.textContent = (`${precipitation} MM`);
                localTime.textContent = (`${dates}`);
                windDirection.textContent = (`${direction}`);
                pressure.textContent = (`${pressures} MB`);
                feelslike.textContent = (`Feels: ${feelslikes}°`);
            }
        })
    })
    console.log(location);
})

$(document).ready(function(){
    $("#search").focus(function() {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
        }
        else {
            $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
        $(".search-form").submit();
    });
});
