
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
})


//days between visits


let lastDate = localStorage.getItem('lastDateViewed');
let lastDateValue = lastDate.value;
let dateValue = date.value;
if (lastDateValue = null) {
  localStorage.setItem(lastDateViewed, dateValue);
  document.querySelector(".visitedLast").textContent = 0;
}
else{
  function getNumberOfDays(lastdateValue, dateValue) {
    let oneDay = 1000 * 60 * 60 * 24;
    let diffInTime = dateValue.getTime() - lastDateValue.getTime();
    let diffInDays =Math.round(diffInTime / oneDay);
    return diffInDays;
  }
  console.log(getNumberOfDays(lastdateValue, dateValue));
  document.querySelector(".visitedLast").textContent = diffInDays
  storage.setItem(lastDateViewed, date);
};



