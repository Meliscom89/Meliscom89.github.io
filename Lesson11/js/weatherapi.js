//access JSON file
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1bc218cd2519778a9f56ca037b5e02ed&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = 'https://www.openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt',desc);
        });


