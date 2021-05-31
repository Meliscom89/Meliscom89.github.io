let d = new Date();

let year = d.getFullYear();

document.querySelector(".currentYear").textContent = year;

let currentDay = d.getDay();
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let month = d.getMonth();
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = d.getDate();

let dateFormatted =
  daysOfWeek[currentDay] + ", " + date + " " + monthNames[month] + " " + year;

document.querySelector(".lastUpdate").textContent = dateFormatted;

if (currentDay == 5) {
  document.querySelector(".pancake").style.display = "block";
}

const hamburger = document.querySelector(".hamButton");
const topNav = document.querySelector(".navigation");

hamburger.addEventListener(
  "click",
  () => {
    topNav.classList.toggle("respond");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 760) topNav.classList.remove("respond");
};
/*Input: 
  Get Temp from document (t)
  Get wind speed from document (s)
  convert above to numbers

  Processsing:
  35.74+0.6215t-(35.75s^0.16)+0.4275t*s^0.16 = f

  Output: write f in document
*/

let t = document.querySelector(".temp").innerHTML;
let s = document.querySelector(".windSpeed").innerHTML;
let x = Math.pow(s,0.16);
var f = [35.74+(0.6215*t)]-(35.75*x)+(0.4275*t*x);
var f =  Math.round(f) + '°F';

document.querySelector(".windChill").textContent = f;



