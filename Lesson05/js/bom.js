const output = document.querySelector('.list');
const fav = document.querySelector('#fav');
const button = document.querySelector('button');

button.addEventListener('click', () => {
   if (fav.value !='') {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = fav.value;
    deletebutton.textContent = 'X';

    li.append(deletebutton);
    scripture.append(li);
   }


});












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


