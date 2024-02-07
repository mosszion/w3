const guessNum = function (n) {
  let num = Math.ceil (Math.random() * 10)
  console.log(num)
  if (n === num ) {
    console.log("Your guees was a Match");
    
  }
  else {
    console.log("Your guess was not matched");
  }
}
guessNum(4);

const numb = function (n) {
  if (n % 3 == 0 ){
    return n + " is a multiple of 3"
  } else if ( n % 7 == 0){
    return n + " is a m ultiple of 7"

  }
  else {
    return n + " is neither a multiple of 3 or 7"
  }
}

const ran = function ( a , b) {
  
    if ((( a >= 50) &&(a<=99)) || ( (b >= 50) && (b <= 99))){
      return true;

    }
    else {
      return false;
    }
  
}

console.log(ran( 34 , 23));
console.log(ran( 68 , 23));
console.log(ran( 34 , 78));