import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

function ProductList() {
  
  const [product,setProduct] = useState([]);
  const [loading,setLoading] = useState(false);

   useEffect(()=>{
         const fetchProduct = async ()=> {
            setLoading(true);
            try{
                const response = await fetch("https://fakestoreapi.com/products"); 
                const data = await response.json();
                setProduct(data);
                setLoading(false); 
            }
            catch (error){
               console.log("error");
            }
         }; 
    fetchProduct();
   },[])
  return (
    <>
          <ProductCard product={product}/>
    </>
  )
}

export default ProductList