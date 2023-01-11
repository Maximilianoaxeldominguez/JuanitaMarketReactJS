import { Link } from "react-router-dom"
import "./Item.css"


const Item = ({ product }) => {

  return (

    <div className='cardflex' key={product.id} >

      <Link className="card-link" to={`/detail/${product.id}`} >

        <div>
          <div className="card-img">
            <img src={product.img} alt='img producto' width="75% " height="350px" className="imgList"/>
          </div>
          <div className="card-name">
            {`${product.name}`}
          </div>
          <div className="card-price">
            {" $ " + product.price}
          </div>
        </div>

        <button className=" btnDetail btn btn-primary card-btn">Ver detalle</button>

      </Link>

    </div>

  )
}

export default Item