import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams();
  return (
    <div className='h-[80vh] bg-gray-500 flex justify-center items-center'>
    <h1 className='text-white text-3xl'>UserName is : {params.username}</h1>
    </div>
  )
}

export default User