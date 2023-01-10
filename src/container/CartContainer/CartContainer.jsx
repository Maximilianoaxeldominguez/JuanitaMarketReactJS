import React from 'react'
import { useCartContext } from '../../context/CartContext'




const CartContainer = () => {

  const { cartList, emptyCart, totalPrice, deleteItem } =  useCartContext()

  return (
    <div>
      { cartList.map(product => <li key={product.id}>
         <img src= {product.img} className="w-25" ></img>
         {product.name} - {product.category} - {product.price} - {product.cantidad} <button className='btn btn-danger' onClick={ ()=> deleteItem(product.id) }> X </button>
         </li>) }
        {totalPrice() > 0 &&  <label > El precio total es :  {totalPrice()}</label> }
         <button 
         className='btn btn-danger'
         onClick={emptyCart}
         > VACIAR CARRITO </button> 
    </div>
  )
}

export default CartContainer