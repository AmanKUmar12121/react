import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Carts } from '../Context'

const Header = () => {
  const {cart}=useContext(Carts)
  return (<>
    <div className='Header'>Context tutorial app</div>
    <ul className='nav'>
     <li><Link to="/">
      Home
     </Link></li>
     <li><Link to="/cart">
      Cart {cart.length}
     </Link></li>
    </ul>
    </>
  )
}

export default Header