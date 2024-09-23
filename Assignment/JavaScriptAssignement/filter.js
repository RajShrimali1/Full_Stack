let nums = [1,2,3,4,5,6,7,8];

numsFilter = nums.filter((element)=>element>4);
console.log(numsFilter);

numsFilter = nums.filter((element)=>{  // if curly bracket are there than we have to write return 
      return element>4;
});
console.log(numsFilter);

///method chaining is also supported