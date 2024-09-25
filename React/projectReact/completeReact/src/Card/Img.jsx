import React from 'react'

function Img({title,id,dis,image,bgColor}) {
  const tailStyle ='text-sm font-bold ';
  return (
    <>
      <div className={`${bgColor} text-3xl w-56 h-80 flex flex-col items-center shadow-xl shadow-black`}>
      <img src={image} className='w-40 p-2'/>
      <h1 className={tailStyle}>Title:{title}</h1>
      <h1 className={tailStyle}>Id:{id}</h1>
      <h1 className={tailStyle}>Discription :{dis}</h1>
     </div>
    </>
  )
}

export default Img