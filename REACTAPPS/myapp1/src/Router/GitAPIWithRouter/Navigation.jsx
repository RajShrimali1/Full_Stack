import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'

function Navigation() {
  return (
    <>
    <div className='flex justify-between h-28 bg-yellow-300 items-center'>
       <h1 className='text-red-700 text-3xl ml-5'>LOGO</h1>
       <div className='flex gap-9 mr-5'>
            <NavLink className={(e)=>{return e.isActive?"text-red-500 text-xl":"text-xl"}} to="home">Home</NavLink>
            <NavLink className={(e)=>{ return e.isActive?"text-red-500 text-xl":"text-xl"}} to="about">About us</NavLink>
            <NavLink className={(e)=>{ return e.isActive?"text-red-500 text-xl":"text-xl"}} to="login">Login</NavLink>
            <NavLink className={(e)=>{ return e.isActive?"text-red-500 text-xl":"text-xl"}} to="contact">Contact us</NavLink>
            <NavLink className={(e)=>{ return e.isActive?"text-red-500 text-xl":"text-xl"}} to="github">GitHub</NavLink>
       </div>
    </div>
            <Outlet />
    </>
  )
}

export default Navigation