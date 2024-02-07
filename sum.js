const sumInt = function (a, b) {
  let sum = 0
  if(a === b) {
    sum = (a + b) * 3 ;
    return sum;
  }
  else {
    sum = (a + b) ;
    return sum;
  }
} 
console.log (sumInt( 2,3));
console.log (sumInt( 3,3));