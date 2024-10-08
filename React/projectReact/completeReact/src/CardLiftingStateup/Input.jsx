import React from 'react'
import { useState } from 'react';

function Input({ getData ,getFlag }) {

    const [color, setColor] = useState('');
   const [name, setName] = useState('');
   const [id, setId] = useState('');
   const [gender, setGender] = useState('');
   const [flag,setFlag] = useState(0);

    function submitHanddler(e) {
        e.preventDefault();
        getData(color,name,id,gender)
        setFlag(!flag);
        getFlag(flag);
    }

    return (
        <>
            <form onSubmit={submitHanddler}>
                <div className='flex justify-center bg-yellow-100'>
                    <div className='flex flex-col gap-3'>
                        <input type="text" placeholder='Bg-color' onChange={(e) => setColor(e.target.value)} className='border-black border-2 p-2 mr-2 mt-6'  />
                        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} className='border-black border-2 p-2 mr-2'  />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input type="text" placeholder='id' onChange={(e) => setId(e.target.value)} className='border-black border-2 p-2 mr-2 mt-6'  />
                        <input type="text" placeholder='Gender' onChange={(e) => setGender(e.target.value)} className='border-black border-2 p-2 mr-2'  />
                    </div>
                   <button type="submit" className='bg-blue-500 p-2 mt-6 border-black border-2 active:bg-blue-600'>Add card</button>
                </div>
            </form>
        </>
    )
}

export default Input