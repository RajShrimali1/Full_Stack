import React from 'react'

function ProductCard(props) {
  return (
    <div className='grid grid-cols-4 gap-14 bg-slate-400'>    
      {props.product.map((e)=>(
        <div className='bg-yellow-300 h-48 w-60'>
          <img src={e.image} alt="logo" className='h-8' /> <br />
          <h1>{e.title}</h1><br />
          <h1>{e.price}</h1><br />
          {/* <h1>{e.description}</h1><br /> */}
        </div>
      ))}
    </div>
  )
}

export default ProductCard