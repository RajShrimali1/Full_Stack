import React, { useState, useEffect } from 'react'

function DisplayList({ list, setList }) {

  const [completed, setCompleted] = useState(0);
  const [bg, setBg] = useState([]);
  const [moveDirection,setMoveDirection] = useState([]);

  useEffect(() => {   /// bg-color array
    setBg(Array(list.length).fill('bg-yellow-200'));
  }, [list]);

  useEffect(() => {  /// counter of task completed 
    let count = 0;

    bg.forEach((color) => {
      if (color === 'bg-green-400') {
        count++;
      }
    });

    setCompleted(count);
  }, [bg])

  function crossBtn(index) {  /// cross button
    setList(list.filter((_, i) => i != index))
  }

  function completeBtn(index) {  /// when clicked on list item (task completed/ task not completed)

    const newBg = bg.map((_, i) => {
      if (i == index && bg[i] == 'bg-green-400') {
        return 'bg-yellow-200'
      }
      else if (i == index && bg[i] == 'bg-yellow-200') {
        return 'bg-green-400'
      }
      else if (i != index) {
        return bg[i]
      }
    })

    setBg(newBg);
  }

  function downBtn(index) {
    if (index < list.length - 1) { // down button
      const newList = [...list];
      const temp = newList[index];
      newList[index] = newList[index + 1];
      newList[index + 1] = temp;
      setList(newList);
    
    setMoveDirection({[index]:'move-down',[index+1]:'move-up'})

    const newBg = [...bg];
      const tempBg = newBg[index];
      newBg[index] = newBg[index + 1];
      newBg[index + 1] = tempBg;
      setBg(newBg);
    }
  }
   
  function upBtn(index) {
    if (index > 0) { // up button 
      const newList = [...list];
      const temp = newList[index];
      newList[index] = newList[index - 1];
      newList[index - 1] = temp;
      setList(newList);
      
      setMoveDirection({[index]:'move-up',[index-1]:'move-down'})
      
      const newBg = [...bg];
      const tempBg = newBg[index];
      newBg[index] = newBg[index - 1];
      newBg[index - 1] = tempBg;
      setBg(newBg);
    }

  }
   

  return (
    <>
      <div className='text-center text-xl mb-7'>
        TASK COMPLETED {completed}/{list.length}
      </div>


      {
        list.map((value, index) => (
          value ? (
            <div className='flex gap-2'>
              <div className={`${bg[index]} border-1 border-black border-2 p-2 w-3/4 mb-1 ml-6 
              transition-transform duration-300 ${moveDirection[index] || '' }`} 
              onClick={() => completeBtn(index)} onAnimationEnd={() => setMoveDirection({})}>
                {value}
              </div>
              <button className='bg-purple-500 border-black border-2 p-2 mb-1 active:bg-purple-600'
              onClick={()=>upBtn(index)}>up</button>

              <button className='bg-blue-500 border-black border-2 p-2 mb-1 active:bg-blue-600'
              onClick={()=>downBtn(index)}>down</button>

              <button className='bg-red-500 border-black border-2 p-2 mb-1 active:bg-red-600' 
              onClick={() => crossBtn(index)}>x</button>
            </div>
          ) : null
        ))
      }

    </>

  )
}

export default DisplayList