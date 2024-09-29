import React, { useState } from 'react'
import DisplayList from './DisplayList';

function ToDolist() {

    const [list, setList] = useState([]);
    const [inputValue,setInputValue] = useState('');

    function BtnHandller() {
        if(inputValue) {
            setList([...list,inputValue])
        }
    }

    function inputHandller(e) {
        setInputValue(e.target.value)
    }

    return (
        <div className='h-screen w-screen bg-black flex justify-center items-center'>
            <div className='h-2/3 w-2/3 bg-white rounded-md shadow-md shadow-gray-300'>
                <h1 className='text-xl text-center'>TODO LIST</h1>
                <div className='flex justify-center items-center mt-4 mb-14'>
                    <input type="text" className='border-black border-2 w-96 p-1' onChange={inputHandller} />
                    <button className='bg-blue-500 active:bg-blue-600 p-1 w-96 border-black border-2' onClick={BtnHandller}>ADD TO LIST</button>
                </div>
                <DisplayList list={list} setList={setList}/>
            </div>
        </div>
    )
}

export default ToDolist