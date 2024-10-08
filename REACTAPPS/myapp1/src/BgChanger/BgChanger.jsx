import React, { useState } from 'react'

function BgChanger() {
    //  function setColor(color){
    //        document.getElementById("bg").style.backgroundColor=color;   
    //  }
     const [color,setColor] = useState("#594D5B")

  return (
    <div className='h-screen ' style={{backgroundColor:color}}>
          <div className='absolute bottom-0 left-1/3 -translate-y-3/4  bg-gray-800 h-10 w-fit rounded-xl'>
           <button className='bg-red-600 ml-3 rounded-lg p-1 pr-1 pl-1'
             onClick={()=>setColor('#ff0000')}
           >Red</button>  
           <button className='bg-blue-600 ml-3 rounded-lg p-1 pr-1 pl-1'
            onClick={()=>setColor('#3b82f6')}
           >Blue</button>    
           <button className='bg-green-600 ml-3 rounded-lg p-1 pr-1 pl-1'
            onClick={()=>setColor('#00ff00')}
           >Green</button>  
           <button className='bg-yellow-500 ml-3 rounded-lg p-1 pr-1 pl-1'
            onClick={()=>setColor('#f59e0b')}
           >Yellow</button>  
           <button className='bg-white ml-3 rounded-lg p-1 pr-1 pl-1'
             onClick={()=>setColor('#ffffff')}
           >White</button>  
           <button className='bg-black text-white ml-3 rounded-lg p-1 pr-1 pl-1'
             onClick={()=>setColor('#000000')}
           >Black</button>  
           <button className='bg-orange-600 ml-3 rounded-lg p-1 pr-1 pl-1'
             onClick={()=>setColor('#f97316')}
           >Orange</button>  
           <button className='bg-pink-600 ml-3 rounded-lg p-1 pr-1 pl-1'
              onClick={()=>setColor('#ec4899')}
           >Pink</button>  
           <button className='bg-gray-500 ml-3 rounded-lg p-1 pr-1 pl-1'
             onClick={()=>setColor('#6b7280')}
           >Gray</button>  
           <button className='bg-purple-600 ml-3 mr-3 rounded-lg p-1 pr-1 pl-1'
             onClick={()=>setColor('#8b5cf6')}
           >Purple</button>  
          </div>
    </div>
  )
}

export default BgChanger