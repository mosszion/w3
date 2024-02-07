const addStr = function (str) {
  let kep = "" ;
  for (i = 0 ; i < 4 ; i++)
    {
     kep = kep + str[i];
      
    
    }
    console.log(kep);
   if (kep === "Java") {
    return true;
   }
   else {
    return false;
   }
  
  
}


console.log(addStr("Javapythis is the best thing"));
console.log(addStr("python"));
console.log(addStr("thon"));