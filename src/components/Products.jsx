import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartslice'
import '../styles/Products.css'
import {product_data} from '../productsdata'
function Products() {
  const dispatch = useDispatch();

  const handleadd = (product)=>{
   dispatch(add(product));
  }
  return (
    <div className='products'>
 {
    product_data.map((product , index)=>{
      return  <div  className="card " key={index}>
       
            <img src={product.img} alt="" />
            <div className='card-info'>
            <h1 className='pro-title'>{product.tittle}</h1>
            <h3> price : {product.price}</h3>
            <h3> color :{product.color}</h3>
           
            <button className='addtocart' onClick={()=>handleadd(product)}>
               add to cart
            </button>
            </div>
        </div>
    })
 }
    
    </div>
  )
}

export default Products
