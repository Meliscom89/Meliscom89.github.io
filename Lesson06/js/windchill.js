/*Input: 
  Get Temp from document (t)
  Get wind speed from document (s)
  convert above to numbers

  Processsing:
  
  35.74+0.6215t-(35.75s^0.16)+0.4275t*s^0.16 = f

  Output: if temp is at or below 50°F and windspeed is above 3mph
  then: 
  write f in document
  otherwise write:
  N/A
*/

let t = document.querySelector(".temp").innerHTML;
let s = document.querySelector(".windSpeed").innerHTML;

let x = Math.pow(s,0.16);
var f = [35.74+(0.6215*t)]-(35.75*x)+(0.4275*t*x);
var f =  Math.round(f) + '°F';
if (t<=50&&s>=3){
document.querySelector(".windChill").textContent = f;
}
else{
    document.querySelector(".windChill").textContent = 'N/A';
}


