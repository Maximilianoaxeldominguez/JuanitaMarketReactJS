import { ItemCount } from "../ItemCount/ItemCount2"


const ItemDetail = ( {product} ) => {

  const onAdd = ( cantidad ) =>  console.log(cantidad)

  return (

    <div className="row">
        <div className="col">
            <h2>{product.name} </h2>
            <img src={product.foto} className="w-50" alt=" imagen del producto" />
            <h3>categorias: {product.categoria} </h3>
            <h4>precio : {product.price } </h4>
        </div>
        <div className="col">
            <ItemCount
            stock={10}
            inital={1}
            onAdd={onAdd}
            />
        </div>
        
        
    </div>
  )
}

export default ItemDetail