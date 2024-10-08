import React, { useState } from 'react'
import Child from './Child';

function Parent() {
    const [data,setData] = useState('');
    function getData(data){
       setData(data);
    }
  return (
    <>
    <div className='flex justify-center items-center h-screen flex-col'>
      <h1 className='mb-2 text-lg bg-green-400'>Sending data from child to parent</h1>
      <h1 className='mb-2 text-lg bg-green-400'>lifting state up</h1>
     <Child getData={getData}/>
     <div className='h-60 w-60 bg-yellow-200 shadow-black shadow-xl border-2 border-black flex justify-center items-center'>
        <h1>Data is : {data}</h1>        
     </div>
    </div>
    </>
  )
}

export default Parent