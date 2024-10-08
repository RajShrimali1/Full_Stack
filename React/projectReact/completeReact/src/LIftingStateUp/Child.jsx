import React from 'react'

function Child({getData}) {

    let data;
 
    function submitHanddler(e){
      e.preventDefault();
      getData(data);
    }   
     
  return (
    <>
       <form onSubmit={submitHanddler}>
           <input type="text" 
           onChange={(e)=>data=e.target.value} 
           placeholder='Data'
           className='p-3 border-2 border-black m-3 ml-0 shadow-black shadow-sm'/>
           <button type="submit" 
           className='p-3 border-2 border-black shadow-black shadow-sm m-3 ml-0 bg-blue-400 active:bg-blue-500'>Submit</button> 
       </form>   
    </>
    
  )
}

export default Child
