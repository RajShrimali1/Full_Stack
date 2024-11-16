import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';

function CardApi() {
 
     const [product,setProduct] = useState(null);    
 
    useEffect(()=>{
            async function card (){
                
                try{
                   
                    const res = await fetch("https://fakestoreapi.com/products")
                    const data = await res.json();
                    setProduct(data);
                }
                catch(error){
                    console.log(error);
                  }  
            } 
        
        card();
    },[]);

    if (product === null) {
        return (
          <div className='text-black text-3xl'>Loading...</div>
        )
      }
     
  return (
       
      <>
       <Navigation product={product} />
      </>
  )

}
//
export default CardApi