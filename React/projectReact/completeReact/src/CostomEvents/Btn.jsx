import React, { Children, useState } from 'react'

  function Btn({onPause,onPlay ,children}) {
    const [running,setRunning] = useState(false);

    function btnHandler (e){

       e.stopPropagation();  // e is the event object in html and is also called synthetic base envent in react
                            // it has many keys in it , now stopPropagation is used to stop eventBubbling 
                            // eventBubbling means if a event is triggered in child it will be propagated till parent
      e.preventDefault() // it is used in forms                      

      if(running) onPause(); // onPause and onplay are coutom event which is passed as prop in this Btn component
      else onPlay();

      setRunning(!running); 
    }
    return (
      <>
      <div onClick={()=>console.log("propagated event")}>
      <button className='border-2 border-black mt-7 w-32 p-3 bg-lime-400 hover:bg-lime-600' 
              onClick={btnHandler}>{running ? 'Pause' : children}</button>
                      {/* conditional rendring and childern */}
      </div>
      </>
    )
  }

  export default Btn