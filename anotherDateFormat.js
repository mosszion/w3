let date = new Date();

let mon = date.getMonth();



let day = date.getDate();


let yr = date.getFullYear();

exaMon = mon + 1; 
let mm;
if(mon < 10) {
  mm = "0" + exaMon;
}
else {
  mm = exaMon;
}


let dd 
if (day < 10) {
  dd = "0" + day;
}
else {
  dd = day;
}


console.log(mm + "-"+ dd + "-" + yr);
console.log(mm + "/"+ dd + "/" + yr);
console.log(dd + "-"+ mm + "-" + yr);
console.log(dd + "/"+ mm + "/" + yr);