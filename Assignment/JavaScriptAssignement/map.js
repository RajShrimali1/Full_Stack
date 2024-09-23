let array = [1,2,3,4];

const numsMap = array.map((a)=>a*10)
                     .map((a)=>a+1)
                     .filter((a)=>a>30);
 //// chaining with maps
console.log(numsMap);


