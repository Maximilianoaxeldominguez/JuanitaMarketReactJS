import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount2"

const ItemDetail = ( {product} ) => {

  const { addToCart, cartList } = useCartContext()
  const [isCount, setIsCount] = useState(true)

  const onAdd = ( cantidad ) =>  {
    addToCart({ ...product, cantidad })
    setIsCount(false)
  }

  return (

    <div className="row">
        <div className="col">
            <h2>{product.name} </h2>
            <img src={product.img} className="w-50" alt=" imagen del producto" />
            <h3>categorias: {product.category} </h3>
            <h4>precio : {product.price } </h4>
        </div>
        <div className="col">

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
  )
}

export default ItemDetail