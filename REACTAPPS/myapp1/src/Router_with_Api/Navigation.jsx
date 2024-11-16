import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation(props) {

  

  return (
    <>
      <div className='bg-slate-700 h-28 flex justify-between items-center'>
        {/* <NavLink ></NavLink> */}
         <h1 className='text-white text-3xl'>Logo</h1>
         <div className='text-white text-3xl flex justify-evenly gap-9'> 
             <h1>Home</h1>
             <h1>contect</h1>
             <h1>about us</h1>
             <h1>login</h1>
         </div>
      </div>
      <div className='h-[250vh] bg-black grid grid-cols-4 gap-[182px] m-0 p-0'>
         {props?.product?.map((e)=>(
            <NavLink  to={`/${e.id}`}>
             <div className='bg-yellow-300 h-48 w-60 m-0 p-0'>
          <img src={e.image} alt="logo" className='h-8' /> <br />
          <h1>{e.title}</h1><br />
          <h1>{e.price}</h1><br />
          {/* <h1>{e.description}</h1><br /> */}
          </div>
        </NavLink>
      ))}  
      </div>
      <NavLink to="/:id"></NavLink>
      </>
  )
}

export default Navigation