import React  , {useContext} from 'react'
import {CartContext } from './Context/CartContext'

function Item({product,price}) {

    const ItemCartContext = useContext(CartContext)

    console.log('cart',ItemCartContext)

       function btnHandller(){
           ItemCartContext.setItem([...ItemCartContext.item,{product,price}])
       }

  return (
       
        <div className='bg-yellow-300 h-20 w-72 shadow-md shadow-black'>
        <li>Product : {product}      ----       Price : {price}</li>
        <button className='bg-blue-500 active:bg-blue-600 border-black border-2'
        onClick={btnHandller}>Add to cart</button>
        </div>
    
  )
}

export default Item