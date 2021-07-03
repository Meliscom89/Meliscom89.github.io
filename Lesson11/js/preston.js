//Preston weather data
let appid = '1bc218cd2519778a9f56ca037b5e02ed';
let url = 'https://api.openweathermap.org/data/2.5/';
let method = 'weather';
let units = 'imperial';
let cityid = '5604473';

let apiURL = url + method + "?" + "id=" + cityid + "&appid=" + appid + "&units=" + units;
fetch(apiURL)
  .then((response) => response.json())
  .then((response) => {
    
    document.querySelector(".current").textContent = response.weather[0].main;
    document.querySelector(".temperature").textContent = Math.round(response.main.temp);
    document.querySelector(".humidity").textContent =
      response.main.humidity + "%";
    document.querySelector(".windSpeed").textContent = Math.round(response.wind.speed);
  });

//5 day forcast Preston
method = 'forecast';


const forecastURL = url + method + "?" + "id=" + cityid + "&appid=" + appid + "&units=" + units;
  
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

        temp[x].innerHTML = Math.round(item.main.temp) + '°F';
        day[x].innerHTML = daysofweek[date.getDay()];
        let img =
          "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
        pic[x].setAttribute("src", img);
        pic[x].setAttribute("alt", "Weather Image");
        x++;
      }
    }
  });


  // Town data

const dataURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(dataURL)
  .then((response) => response.json())
  .then((response) => {
   //console.log(response);

   let events = response.towns[6].events;
   let x = 0;
  for(item of events){
    let item  = document.createElement('p');
    item.textContent = response.towns[6].events[x];
    document.querySelector('.eventList').appendChild(item);
    x++;
  }
  
  
  });