//access JSON file
const apiURL = "https://api.openweathermap.org/data/2.5/find?id=5604473&units=imperial&appid=1bc218cd2519778a9f56ca037b5e02ed";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        });


