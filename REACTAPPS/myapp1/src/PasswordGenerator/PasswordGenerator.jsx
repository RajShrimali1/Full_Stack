import React, { useState, useEffect,useRef } from 'react'

function PasswordGenerator() {

    const [length, setLength] = useState(8);
    const [password, setPassword] = useState();
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);

    const passRef = useRef(null)

   const refFunction = ()=>{
     passRef.current?.select();
  //   passRef.current?.setSelectionRange(0,3);   // to specify the range of slection  
     window.navigator.clipboard.writeText(password);
   }


    function passGenerator() {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let size = 52;
        if (character) {
            str += "~`!@#$%^&*(){}[]?";
            size += 18;
        }
        if (number) {
            str += "1234567890"
            size += 10;
        }
           size -= 1;
        

          for (let i = 0; i < length ; i++) {

            pass += str[Math.floor(Math.random() * size)]
        }

        setPassword(pass);
    }


    useEffect(()=>{
        passGenerator();
    },[length,number,character])

    return (
        <div className='bg-black h-screen flex flex-col justify-center items-center'>
            <h1 className='text-white text-5xl mb-7'>Password Generator</h1>
            <div className='bg-slate-700 h-32 w-96 rounded-lg text-orange-500'>
                <div className='flex justify-center mt-3 mb-3'>
                    <input type="text" placeholder='Password' readOnly className='w-4/5 p-1 rounded-s-2xl' value={password} ref={passRef}/>
                    <button className='bg-blue-600 text-white p-1 rounded-e-2xl' onClick={refFunction}>Copy</button>
                </div>
                <div className='flex gap-2'>
                    <input type="range" min={8} max={100} className='w-24 cursor-pointer' value={length} onChange={(e)=>setLength(e.target.value)}/>
                    <label>Length : {length}</label>
                    <input type="checkbox" onClick={()=> setNumber((pre)=>!pre)}/>
                    <label>Numbers</label>
                    <input type="checkbox" onClick={()=>setCharacter((pre)=>!pre)}/>
                    <label>Character</label>
                </div>  
            </div>


        </div>
    )
}

export default PasswordGenerator