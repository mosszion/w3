const minConv = function (num) {
  hr = Math.floor(num / 60);
  min = num % 60 ;

  return hr+":"+min;
}

console.log(minConv(90));

const arr = function ( ar) {
  if ( ar.length >= 1) {
    if ( (ar[0]==1) || (ar[-1]==1)){
      return true;
    }else {
      return false;
    }
  } else {
    return "NA"
  }
}

console.log(arr([2,3,5]))
console.log(arr([2]))
console.log(arr([1,3,5]))

const chkAr = function( data) {
  if (data[0] === data[-1]){
    return true;
  }
  else {
    return false;
  }
}
console.log(chkAr([1,3,5]))
console.log(chkAr([1,3,1]))