let d = new Date();

let year = d.getFullYear();

document.querySelector(".currentYear").textContent = year;




let currentDay = d.getDay();
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let month = d.getMonth();
let monthNames = ["January" , "February" , "March" , "April" , "May", "June", "July", "August", "September", "October", "November", "December"];
let date = d.getDate();


let dateFormatted = daysOfWeek[currentDay] + ", " + date + " " + monthNames[month] +  " " + year;

document.querySelector(".lastUpdate").textContent = dateFormatted;







const hamburger = document.querySelector('.hamButton');
const topNav = document.querySelector('.navigation')

hamburger.addEventListener('click', () =>
{topNav.classList.toggle('respond')}, false);


window.onresize = () => {if (window.innerWidth > 760) topNav.classList.remove('respond')}
;

