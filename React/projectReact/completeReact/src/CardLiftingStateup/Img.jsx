import React, { useState } from 'react'
import img1 from '../assets/photos/img1.jpeg'
import img2 from '../assets/photos/img2.jpeg'
import img3 from '../assets/photos/img3.jpeg'
import img4 from '../assets/photos/img4.jpg'
import img5 from '../assets/photos/img5.jpg'
import img6 from '../assets/photos/img6.jpg'
import img7 from '../assets/photos/img7.jpg'
import img8 from '../assets/photos/img8.jpeg'


function img({getImage}) {

  const imageArray = [img1,img2,img3,img4,img5,img6,img7,img8]

    function onClickHandller(imgs){
       getImage(imgs);
    }

  return (
    <div className='grid grid-cols-4 gap-y-4 gap-x-48 '>
     {
        imageArray.map(imgs=>(
            <img 
              src={imgs}
              className='h-48 w-32 active:border-4 active:border-red-500'
              onClick={()=>onClickHandller(imgs)}
            />
        ))
     }
    
    </div>
  )
}

export default img