import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';  /// copied from material ui 
//                                                                firstly i have installed material ui 
function Login() {

     const [email,setEmail] = useState("");
     const [pass,setPass] = useState("");
     const [loading,setLoading] = useState(false);

     function submitHandler(e){
        e.preventDefault();
        setLoading(true);
        
        const obj = {
            email : {email},
            password : {pass} 
         };


        setTimeout(()=>{
          alert("you are logged in");
          setLoading(false);
          console.log(obj);
        },3000)
       
     }


  return (
    <div className='bg-slate-300 flex justify-center items-center h-screen '>
        <div className='bg-white rounded-xl flex justify-center items-center h-[70vh] w-[70vw] gap-60 shadow-xl shadow-slate-600'>
          <div>
            <img src="./src/Assets/img1.avif" alt="" />
          </div>
          <div>
             <h1 className='text-xl'>Wellcome back !! </h1><br />
             <form onSubmit={submitHandler}>
                <input type="email" placeholder="Email" required className='p-2 border-2 w-64 border-slate-400 mb-4' onChange={(e)=>setEmail(e.target.value)}/> <br />  
                <input type="password" placeholder="Password" required className='p-2 border-2 w-64 border-slate-400 mb-4' onChange={(e)=>setPass(e.target.value)}/> <br />
                 <button type='submit' className='p-2 border-2 w-64 bg-slate-700 text-white active:bg-slate-800'>{loading ? <CircularProgress style={{color:'white', height:"20px" , width:"20px"}} /> : "Login"}</button>
             </form>
          </div>
        </div>
    </div>
  )
}

export default Login
// 