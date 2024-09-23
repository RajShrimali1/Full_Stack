let image = document.getElementById("img");
let stopbtn = document.getElementById("stop");
let startbtn = document.getElementById("start");
let regulate1 = document.getElementById("regulate1");
let regulate2 = document.getElementById("regulate2");
let regulate3 = document.getElementById("regulate3");
let flag=0;

stopbtn.addEventListener("click",()=>{
      image.style.animation="none";
    //   let btn = document.getElementById("stop");
      flag=1;
})

startbtn.addEventListener("click",()=>{
    if(flag==1)
    image.style.animation="imageAnimation 2s linear infinite";
})


regulate1.addEventListener("click",()=>{
    image.style.animationDuration="0.8s";
    flag=0;
})

regulate2.addEventListener("click",()=>{
    image.style.animationDuration="0.5s";
    flag=0;
})

regulate3.addEventListener("click",()=>{
    image.style.animationDuration="0.1s";
    flag=0;
})
