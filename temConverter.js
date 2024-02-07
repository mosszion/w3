const tempCoverter = function (amt , type) {
  let a ;
  if (type === "Celsius") {
    a = (9*amt)/5 + 32;
    console.log("The Fahrenhit is : "+ a + " F")

  }
  else {
    a = (amt - 32) * 5/9;
    console.log("The Celsius is : "+ a + " C")
  }

}

tempCoverter(60 , "Celsius");