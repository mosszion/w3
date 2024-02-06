let date = new Date();

let day = date.getDay();


let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : "+ dayList[day] + ".");

let hour = date.getHours();
let hourAp
if(hour > 12) {
  hourAp = hour + "PM";

}
else {
  hourAp = hour +"AM"
}


let min = date.getMinutes();


let sec = date.getSeconds();


console.log("Current time is : " + hourAp + ":" + min + ":" + sec)