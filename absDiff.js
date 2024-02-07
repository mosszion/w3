const absDiff = function (a) {
  let diff 
  if(a <= 19) {
    diff = 19 - a ;
    return diff;

  } else {
    diff = (a - 19) * 3;
    return diff ;
  }

}

console.log(absDiff(5));
console.log(absDiff(19));