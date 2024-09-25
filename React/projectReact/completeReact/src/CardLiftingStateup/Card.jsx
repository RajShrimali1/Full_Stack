import React, { useState } from 'react'
import Input from './Input';

function Card() {

   const [color,setColor] = useState('');
   const [name,setName] = useState('');
   const [id,setId] = useState('');
   const [gender,setGender] = useState('');

  function getColor(color,name,id,gender){
     setColor(color);
     setName(name);
     setId(id);
     setGender(gender);
  }

  return (
    <div>
 
     <div>
     <h1 className='text-lg bg-slate-400 inline'>Colors (you may choose any color other than this)</h1>
      <ul>
       <li className='bg-red-500 w-fit mb-2'>bg-red-500</li>
       <li className='bg-yellow-400 w-fit mb-2'>bg-yellow-400</li>
       <li className='bg-blue-500 w-fit mb-2'>bg-blue-500</li>
       <li className='bg-slate-500 w-fit mb-2'>bg-slate-500</li>
       <li className='bg-green-400 w-fit mb-2'>bg-green-400</li>
       <li className='bg-purple-500 w-fit mb-2'>bg-purple-500</li>
       <li className='bg-orange-600 w-fit mb-2'>bg-orange-600</li>  
      </ul>
     </div>

      <Input getColor={getColor}/> 
       
       {color && name && (
          <div className={` m-2 h-72 w-56 shadow-black shadow-md ${color}`}>
          <h1>Name : {name}</h1>      
          <h1>id : {id}</h1>      
          <h1>gender : {gender}</h1>        
          </div>
       )}

    </div>
  )

}

export default Card
