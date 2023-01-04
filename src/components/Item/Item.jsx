import { Link } from "react-router-dom"
import "./Item.css"


const AgregarAlCarrito = () => {

  console.log(AgregarAlCarrito)
}


const Item = ({ product }) => {

  return (

    <div className='cardflex' key={product.id} >

      <Link className="card-link" to={`/detail/${product.id}`} >

        <div>
          <div className="card-img">
            <img src={product.foto} alt='' width="100% " height="500px" />
          </div>
          <div className="card-name">
            {`${product.name}`}
          </div>
          <div className="card-price">
            {" $ " + product.price}
          </div>
        </div>

      </Link>

      <div>

        <button className="btn btn-primary card-btn" onClick={AgregarAlCarrito}>Agregar al carrito</button>
        
      </div>


    </div>

  )
}

export default Item