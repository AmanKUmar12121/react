import React from 'react'
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import SingleProd from './SingleProd';
import "./style.css"

const Home = () => {

    faker.seed(123);
    const productArray=[...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        image: faker.image.nature(),
        price: faker.commerce.price()
    }));
   console.log(productArray);
   const [products]=useState(productArray);
  return (
    <div className='productContainer'>
        {products.map((prod)=>(
            <SingleProd prod={prod}  key={prod.id}/>
        ))}
    </div>
  )
}

export default Home;