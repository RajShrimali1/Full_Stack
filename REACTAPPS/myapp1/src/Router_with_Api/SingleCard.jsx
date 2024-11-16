import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

function SingleCard() {
    const params = useParams();
    const productId = params.id;
    const [product,setProduct] = useState();
    useEffect(()=>{
        async function card (){
            try{
                const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
                const data = await res.json();
                setProduct(data);
            }
            catch(error){
                console.log(error);
              }  
        } 
    
    card();
},[]);
  
if (!product) {
    return <div className='text-3xl'>Loading...</div>;
}

  return (
    <>
       <div className='bg-black h-screen'>
            <div className='bg-yellow-300 h-[400px] w-[500px]'>
                        <img src={product.image} className='h-24'/> <br />
                        <h1>{product.title}</h1><br />
                        <h1>{product.price}</h1><br />
                        <h1>{product.description}</h1><br />
            </div>

       </div>
    </>
  )
}

export default SingleCard