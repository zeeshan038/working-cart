import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import '../styles/Cart.css'
import { useDispatch } from 'react-redux';
import {remove} from '../store/cartslice'
function Cart({items}) {
const dispatch = useDispatch();
  const products = useSelector(state=>state.cart);
  const handleremove =(productId)=>{
    dispatch(remove(productId));
  }
 
  return (
    <div className='cart'>
     { products.map((product)=>{
         return <div className='cartCard'>
              <img src={product.img} alt='img' className='cart-img'/>
              <h5>{product.tittle}</h5>
              <h5>{product.price}</h5>
              <h5>{product.color}</h5>
              <button className="remove-btn" onClick={()=>handleremove(product.id)}>Remove</button>
         </div>

     })}
    </div>
  )
}

export default Cart
 