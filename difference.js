const difference = function (n) {
  if(n <= 13) {
    return 13 - n;
  }
  else {
    return (n - 13)*2;
  }
}

console.log(difference(5));
console.log(difference(45));
console.log(difference(20));