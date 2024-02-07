const largest = function (a , b , c) {
  if ( (a > b) && (a > c)) {
    return a +" is the greatest of three"
  }
  else if ( (b > a) && (b > c)) {
    return b + " is the greatest of three"
  }
  else {
    return c + " is the greatest of three"
  }

}

console.log(largest(2,3,5));
console.log(largest(2,99,5));
console.log(largest(8,3,5));

const close = function (a , b) {
  let f = 100 - a ;
  let s = 100 - b ; 
  if ( f > s) {
    return b + " is closer to 100."
  }else {
    return a + " is closer to 100."
  }

}

console.log(close (2 , 5));