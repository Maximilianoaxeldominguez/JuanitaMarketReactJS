import React from 'react'
import { Link } from 'react-router-dom'
import CartList from '../../components/CartList/CartList'
import { useCartContext } from '../../context/CartContext'
import "./cartContainer.css"




const CartContainer = () => {

  const { cartList } =  useCartContext()

  console.log(cartList)

  return (
    <div>

    { cartList[0]  
    ? 
   <CartList/> 
    : 
    <div className='emptyCart'>
    <h1>El carrito esta vacia</h1> 
    <Link to="/"> <button className='btn btn-primary'> VOLVER A HOME</button></Link>
    </div>
    } 

    </div>
    )
}

export default CartContainer

