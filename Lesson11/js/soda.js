//Preston weather data
let appid = '1bc218cd2519778a9f56ca037b5e02ed';
let url = 'https://api.openweathermap.org/data/2.5/';
let method = 'weather';
let units = 'imperial';
let cityll = '2.66179170331122&lon=-111.60319155610891';

let apiURL = url + method + "?" + "lat=" + cityll + "&appid=" + appid + "&units=" + units;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    document.querySelector(".current").textContent = jsObject.weather[0].main;
    document.querySelector(".temperature").textContent = jsObject.main.temp;
    document.querySelector(".humidity").textContent =
      jsObject.main.humidity + "%";
    document.querySelector(".windSpeed").textContent = jsObject.wind.speed;
  });

//5 day forcast Preston
 method = 'forecast';


const forecastURL = url + method + "?" + "lat=" + cityll + "&appid=" + appid + "&units=" + units;
  
let daysofweek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

fetch(forecastURL)
  .then((response) => response.json())
  .then((response) => {
    

    let x = 0;
    let temp = document.querySelectorAll('.forecastDay .temp');
    let day = document.querySelectorAll('.forecastDay .day');
    let pic = document.querySelectorAll('.forecastDay .fiveD_Pic');
    let list = response.list;

    for (item of list) {
      if (item.dt_txt.includes("18:00:00")) {
        let date = new Date(item.dt * 1000);

        temp[x].innerHTML = item.main.temp;
        day[x].innerHTML = daysofweek[date.getDay()];
        let img =
          "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
        pic[x].setAttribute("src", img);
        pic[x].setAttribute("alt", "Weather Image");
        x++;
      }
    }
  });

