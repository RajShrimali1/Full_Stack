import React, { useEffect, useState } from 'react'
import Input from './Input';
import Img from './Img';

function Card() {

   const [color, setColor] = useState('');
   const [name, setName] = useState('');
   const [id, setId] = useState('');
   const [gender, setGender] = useState('');
   const [card, setCard] = useState([]);
   const [image, setImage] = useState('');
   const [flag,setFlag] = useState(0);

   function getData(color, name, id, gender) {
      setColor(color);
      setName(name);
      setId(id);
      setGender(gender);
   }

   function getImage(image){
      setImage(image)
   }

   function getFlag(flag1){
      setFlag(flag1);
   }

   useEffect(()=>{
      if(id && image && name && color && gender)
      {
         setCard((previous) => [...previous, { name1: name, id1: id, color1: color, gender1: gender ,image1:image}])
      }
     },[flag])

   return (
      <div>
         
         <div className='text-7xl flex justify-center bg-yellow-100'>
            DYNAMIC CARDS
         </div>
     <div className='bg-blue-300'>

        <div className='flex justify-between mb-9'>
         <div className='text-5xl ml-32 mt-10'>
            COLORS
         </div>
         <div className='text-5xl mr-72 mt-10'>
            IMAGES
         </div>
        </div>

         <div className='flex'>
            <div className='mr-9'>
            <h1 className='text-xl bg-slate-400 inline'>(you may choose any color other than this)</h1>
            <ul>
               <li className='bg-red-500 w-fit mt-4 mb-2 text-lg'>bg-red-500</li>
               <li className='bg-yellow-400 w-fit mb-2 text-lg'>bg-yellow-400</li>
               <li className='bg-blue-500 w-fit mb-2 text-lg'>bg-blue-500</li>
               <li className='bg-slate-500 w-fit mb-2 text-lg'>bg-slate-500</li>
               <li className='bg-green-400 w-fit mb-2 text-lg'>bg-green-400</li>
               <li className='bg-purple-500 w-fit mb-2 text-lg'>bg-purple-500</li>
               <li className='bg-orange-600 w-fit mb-2 text-lg'>bg-orange-600</li>
            </ul>
            </div>
            <Img getImage={getImage}/>
         </div>

     </div>
         <Input getData={getData} getFlag={getFlag}/>

     <div className='grid grid-cols-4 gap-y-2'>
         {card.length > 0&& (  
            card.map((card) => (
               <div className={` m-2 h-72 w-56 shadow-black shadow-xl rounded-md flex flex-col justify-center items-center ${card.color1}`}>
                  <h1>Name : {card.name1}</h1>
                  <h1>id : {card.id1}</h1>
                  <h1>gender : {card.gender1}</h1>
                  <img src={card.image1} className='h-48'/>
               </div>
            )
         )
      )}
      </div>

      </div>
   )
}

export default Card
