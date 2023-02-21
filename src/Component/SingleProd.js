import React from 'react'
import "./style.css"
import { useContext } from 'react';
import { Carts } from '../Context';

const SingleProd = ({prod}) => {
    const {cart,setCart}=useContext(Carts);
  return (
    <div className='products'>
       <img src={prod.image} alt={prod.name} />
       <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>{prod.price.substring(0, 3)}</span>
        </div>
        <button className="add" onClick={()=>{setCart([...cart,prod])}}>Add to Cart</button>
        <button className="add" onClick={()=>{setCart(cart.filter((c)=>c.id!==prod.id))}}>Romove to Cart</button>
    </div>
  )
}

export default SingleProd
  
