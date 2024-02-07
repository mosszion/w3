const checkNum = function (a, b) {
  let c = a + b;
  if ( (a === 50) || (b === 50) || (c === 50)) {
    return true;
  }else {
    return false;
  }
}
console.log(checkNum(27,23));
console.log(checkNum(2,50));
console.log(checkNum(2,25));

const checkSig = function ( e,f) {
  if (((e < 0) & (f > 0))|| ((f < 0) & (e > 0))) {
    return true;
  } else {
    return false;
  }
  

}

console.log(checkSig(2 , 3));