import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount2"
import "./itemDetail.css"

const ItemDetail = ( {product} ) => {

  const { addToCart, cartList } = useCartContext()
  const [isCount, setIsCount] = useState(true)

  const onAdd = ( cantidad ) =>  {
    addToCart({ ...product, cantidad })
    setIsCount(false)
  }

  return (

    <div className="itemDetailContainer">

      <div className="itemContainer">

        <div className="imgItemContainer">
            <img src={product.img} className="w-75" alt=" imagen del producto" />
        </div>

         <div className="prodDetailContainer">
            <h1 className="productName">{product.name} </h1>
            <p className="productDetail"> {product.detail} </p>
            <p className="productCategory">categorias: {product.category} </p>
            <p className="productPrice">precio : $ {product.price } </p>
            { isCount ? 
          <ItemCount
            stock={10}
            inital={1}
            onAdd={onAdd}
            /> 
            : 
            <>
            <Link to="/cart">
            <button className="btn btn-primary">Ir a Cart</button>
            </Link>
            <Link to="/">
            <button className="btn btn-primary">Ir a Home</button>
            </Link>
            </>
            }
        </div>

        </div>
            
    </div>
  )
}

export default ItemDetail