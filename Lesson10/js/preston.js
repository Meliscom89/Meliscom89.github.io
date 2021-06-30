//Preston weather data

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1bc218cd2519778a9f56ca037b5e02ed&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject)
    document.querySelector(".current").textContent = jsObject.weather[0].main;
    document.querySelector(".temp").textContent = jsObject.main.temp;
    document.querySelector(".humidity").textContent =
      jsObject.main.humidity + "%";
    document.querySelector(".windSpeed").textContent = jsObject.wind.speed;
  });

//5 day forcast Preston
const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1bc218cd2519778a9f56ca037b5e02ed&units=imperial";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    fiveDay = jsObject.list.filter((forcast) =>
      forcast.dt_txt.includes("18:00:00")
    );
    console.log(fiveDay);
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

//day1
    let x = 0;
    let day = new Date(fiveDay[x].dt_txt);
    let temp = fiveDay[x].main.temp;
    
      document.querySelector(".day1").textContent = daysOfWeek[day.getDay()];
      document.querySelector(".temp1").textContent = temp;
      document
        .querySelector("#picDay1")
        .setAttribute("src", 'https://openweathermap.org/img/w/' + fiveDay[x].weather[0].icon + '.png');
      document
        .querySelector("#picDay1")
        .setAttribute("alt", fiveDay[x].weather[0].main);
//day2
    x = 1;
    day = new Date(fiveDay[x].dt_txt);
    temp = fiveDay[x].main.temp;
        
    document.querySelector(".day2").textContent = daysOfWeek[day.getDay()];
    document.querySelector(".temp2").textContent = temp;
    document
            .querySelector("#picDay2")
            .setAttribute("src", 'https://openweathermap.org/img/w/' + fiveDay[x].weather[0].icon + '.png');
    document
            .querySelector("#picDay2")
            .setAttribute("alt", fiveDay[x].weather[0].main);
//day3
            x = 2;
    day = new Date(fiveDay[x].dt_txt);
    temp = fiveDay[x].main.temp;
        
    document.querySelector(".day3").textContent = daysOfWeek[day.getDay()];
    document.querySelector(".temp3").textContent = temp;
    document
            .querySelector("#picDay3")
            .setAttribute("src", 'https://openweathermap.org/img/w/' + fiveDay[x].weather[0].icon + '.png');
    document
            .querySelector("#picDay3")
            .setAttribute("alt", fiveDay[x].weather[0].main);
    
//day4
x = 3;
    day = new Date(fiveDay[x].dt_txt);
    temp = fiveDay[x].main.temp;
        
    document.querySelector(".day4").textContent = daysOfWeek[day.getDay()];
    document.querySelector(".temp4").textContent = temp;
    document
            .querySelector("#picDay4")
            .setAttribute("src", 'https://openweathermap.org/img/w/' + fiveDay[x].weather[0].icon + '.png');
    document
            .querySelector("#picDay4")
            .setAttribute("alt", fiveDay[x].weather[0].main);

//day5

x = 4;
    day = new Date(fiveDay[x].dt_txt);
    temp = fiveDay[x].main.temp;
        
    document.querySelector(".day5").textContent = daysOfWeek[day.getDay()];
    document.querySelector(".temp5").textContent = temp;
    document
            .querySelector("#picDay5")
            .setAttribute("src", 'https://openweathermap.org/img/w/' + fiveDay[x].weather[0].icon + '.png');
    document
            .querySelector("#picDay5")
            .setAttribute("alt", fiveDay[x].weather[0].main);

  });
