import React from 'react'
import { useCartContext } from '../../context/CartContext'
import "./cartList.css"
import { Table } from 'react-bootstrap'

const CartList = () => {

    const { cartList, emptyCart, totalPrice, deleteItem, finishBuyAlert} =  useCartContext()

  return (
    
    <div className='divCartContainer'>

          <h1 className='titleCart'>CARRITO DE COMPRA</h1>

    <Table className='w-75 tableCartContainer'>
    
    <thead className='trCartProuduct'>
      <tr>
        <th></th>
        <th className='thSizeCart'>PRODUCTO</th>
        <th className='thSizeCart'>PRECIO</th>
        <th className='thSizeCart'>CANTIDAD</th>
        <th></th>
      </tr>
    </thead>


    <tbody>

     { cartList.map ( product => 
     
     <tr  key={product.id} >

      <td className='sizingTdCartImg' > <img src={ product.img } className="imgCart w-50" alt="" />  </td>
      <td className='sizingTdCartname' > { product.name } </td>
      <td className='sizingTdCartPrice' > $ { product.price } </td>
      <td className='sizingTdCartQuantity' >  <input  className='w-25' type="number" value={1} /> </td>
      <td className='sizingTdCartPrice' > <button className='btn btn-danger' onClick={ () => deleteItem(product.id)  }>X</button> </td>
      </tr> 
     )}
      <div className='bottonCart'>
      {totalPrice() > 0 &&  <div className='totalPrice'> El precio total es: ${totalPrice()}</div> }
      <button  className='btn btnEmpty btn-danger active' onClick={emptyCart} > VACIAR CARRITO </button> 
      <button   className='btn btnBuy btn-success active'  onClick={finishBuyAlert} > TERMINAR COMPRA </button> 
      </div>

    </tbody>

    
  </Table>

  </div>

  )
}

export default CartList