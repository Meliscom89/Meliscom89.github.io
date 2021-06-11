
// last updated
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


//pancake banner
if (currentDay == 5) {
  document.querySelector(".pancake").style.display = "block";
}

//hamburger button
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


//lazyload
let imagesToLoad= document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src',image.getAttribute("data-src"));
  image.onload = () =>{
    image.removeAttribute('data-src');
  };
};
imagesToLoad.forEach((img)=> {
  loadImages(img);
});


//days between visits


let lastDate = localStorage.getItem('lastDateViewed') || Date.now();
let diffInDays = (lastDate - Date.now()) / 864000;

if (diffInDays < 1) {
  message = "Welcome!"
} 
else{
  if(diffInDays == 1){
  message = 'You last visited this site ${diffInDays} day ago.';}
  else{
    message = 'You last visited this site ${diffInDays} days ago.';}
  }

document.querySelector(".visitedLast").innerHTML = message;
localStorage.setItem('lastDate' , Date.now());