
const list = document.querySelector('.list');
const input = document.querySelector('#fav')
const button = document.querySelector('button')

button.onclick = function() {
 let scripture = input.value;
 input.value = '';

 const addition = document.createElement('li');
 const text = document.createElement('span');
 const listBtn = document.createElement('button');

 addition.appendChild(text);
 text.textContent = scripture;
 addition.appendChild(listBtn);
 listBtn.textContent = 'Delete'
 list.appendChild(addition);

 listBtn.onclick = function (empty) {
     list.removeChild(addition);
 }
 input.focus();
}












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


