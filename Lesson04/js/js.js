let d = new Date();

let year = d.getFullYear();

document.querySelector(".currentYear").textContent = year;


let update = document.lastModified;

document.querySelector(".lastUpdate").textContent = update;


const hamburger = document.querySelector('.hamButton');
const topNav = document.querySelector('.navigation')

hamburger.addEventListener('click', () =>
{topNav.classList.toggle('respond')}, false);




