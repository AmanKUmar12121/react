import React, { useEffect } from 'react'
import { useState } from 'react'
import SingleProd from './SingleProd'
import { useContext } from 'react';
import { Carts } from '../Context';

const Cart = () => {
    const {cart}=useContext(Carts);

    const [total,setTotal]=useState(0);
    useEffect(()=>(
        setTotal(cart.reduce((x,prod)=>x+Number(prod.price),0))
    )
    ,[cart])

  return (
    <div>
        <span style={{fontSize : 30}}> My Cart</span>
        <h1>{total}</h1>
        {
            cart.map((prod)=>(
            <SingleProd prod={prod} key={prod.id} />
            ))}
    </div>
  )
}

export default Cart