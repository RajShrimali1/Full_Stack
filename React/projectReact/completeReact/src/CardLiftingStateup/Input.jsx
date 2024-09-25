import React from 'react'

function Input({ getColor }) {

    let color;
    let name;
    let gender;
    let id;

    function submitHanddler(e) {
        e.preventDefault();
        getColor(color,name,id,gender)
    }

    return (
        <>
            <form onSubmit={submitHanddler}>
                <div className='flex '>
                    <div className='flex flex-col gap-3'>
                        <input type="text" placeholder='Bg-color' onChange={(e) => color = e.target.value} className='border-black border-2 p-2 mr-2' />
                        <input type="text" placeholder='name' onChange={(e) => name = e.target.value} className='border-black border-2 p-2 mr-2' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input type="text" placeholder='id' onChange={(e) => id = e.target.value} className='border-black border-2 p-2 mr-2' />
                        <input type="text" placeholder='Gender' onChange={(e) => gender = e.target.value} className='border-black border-2 p-2 mr-2' />
                    </div>
                   <button type="submit" className='bg-blue-500 p-2 border-black border-2 active:bg-blue-600'>Add card</button>
                </div>
            </form>
        </>
    )
}

export default Input