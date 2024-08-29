
const randomColor = ()=>{
    let hex = "123456789ABCDEF";
    let color = "#";

    for(var i=0;i<6;i++)
    {
        color += hex[ Math.floor(Math.random()*15) ];
    }
    return color;
}

  let intervalId

document.getElementById("start").addEventListener("click",function()
{
     intervalId =  setInterval(() => {
        document.querySelector("body").style.background=randomColor();
    }, 1000);
});

document.getElementById("stop").addEventListener("click",function()
{
      clearInterval(intervalId);
})  
