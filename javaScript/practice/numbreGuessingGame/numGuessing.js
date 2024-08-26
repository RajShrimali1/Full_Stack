

let randomNumber = (Math.floor(1+Math.random()*100));
let userInput;
let attempts=0;

let newdiv = document.createElement("div");
    newdiv.style.height="100px";
    newdiv.style.width="300px";
    newdiv.style.backgroundColor="yellow";
    newdiv.style.textAlign="center";
    newdiv.style.fontsize="1.5rem";
    document.body.appendChild(newdiv);

 while(1)
 {

    userInput = (prompt("Please Guess a number b/w 1-100"));
     userInput = Number(userInput);  

     attempts++;

     if(randomNumber < userInput)
     {
        window.alert(`to high try again`);
        // console.log("to high");
         // newdiv.textContent="Guess something less than this"; 
         // break;
    } 
    else if(randomNumber > userInput)
        {
           window.alert(`to low try again`); 
            // console.log("to low");
            //  newdiv.textContent="Guess something more than this"; 
       // break;
     }   
     else
     {
        newdiv.textContent=`Congratulation !! You have Guessed the right number 🎉🎉🎉 you Guessed in ${attempts} attempts`;            
        break;
     }

 }
    
    