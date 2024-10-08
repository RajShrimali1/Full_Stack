import React, { useReducer } from 'react'

function Counter() {
     let initionalState = 0;
     const reducer = (state,action)=>{
        switch(action.type){
          case "increment" : return state+1;
          case "decrement" : return state-1;
          default : return state;
        }
     }
     const [count,dispatch] = useReducer(reducer,initionalState)

    return (
        <div className='h-screen w-screen bg-purple-300 flex flex-col justify-center items-center'>
            <h1 className='text-4xl mb-20'>Counter Using UseReducer Hook</h1>
            <div className='h-60 w-96 bg-blue-500  shadow-md  shadow-black flex flex-col justify-center items-center'>
                <h1 className='text-xl mb-6 bg-slate-400 rounded-md border-2 border-black p-2 shadow-md  shadow-black'>Count : {count} </h1>
                <div>
                    <button className='bg-green-400 active:bg-green-500 border-2 border-black p-1 rounded-md shadow-md  shadow-black mr-5' onClick={()=>dispatch({type:"increment"})}>Increment</button>
                    <button className='bg-green-400 active:bg-green-500 border-2 border-black p-1 rounded-md shadow-md  shadow-black' onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Counter