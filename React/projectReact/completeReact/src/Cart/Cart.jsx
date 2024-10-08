import React ,{useContext} from 'react'
import {CartContext } from './Context/CartContext'

function Cart() {

    const ItemCartContext = useContext(CartContext)

    const total = ItemCartContext.item.reduce((a,b)=>a+b.price,0);
      
 
  return (
    <div className='mt-11 bg-yellow-200 p-4 w-72 shadow-md shadow-black'>
        <h1 className='text-center'>Cart Items</h1> 
        
        {
          ItemCartContext && ItemCartContext.item.map((items)=>{
            return(
                <li> {items.product} -- {items.price}  </li>
            )
            })

        }
        <h1>Total : ${total}</h1>
      
    </div>
  )
}

export default Cart