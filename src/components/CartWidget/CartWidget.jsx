import { useCartContext } from "../../context/CartContext"
import CartWidgetImg from "../../img/ImagenCarrito.png"
import "./cartWidget.css"


const CartWidget = () => {
 
  const { totalQuantity } = useCartContext()
 
  return (

    <div className="cartWidgetFlex">

      <div className="totalQuantity">
        {totalQuantity() > 0 && totalQuantity()}
      </div>
      <div>
      <img src={CartWidgetImg} height="50px"></img>
      </div>

    </div>
  )
}

export default CartWidget

