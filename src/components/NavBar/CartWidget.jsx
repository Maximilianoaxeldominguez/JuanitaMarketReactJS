import { useCartContext } from "../../context/CartContext"
import CartWidgetImg from "../../img/ImagenCarrito.png"


const CartWidget = () => {
 
  const { totalQuantity } = useCartContext()
 
  return (

    <div className="CartWidget">
      {totalQuantity() > 0 && totalQuantity()}
        <img src={CartWidgetImg} height="50px"></img>
    </div>
  )
}

export default CartWidget

