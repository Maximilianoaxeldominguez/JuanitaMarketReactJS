import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ( {products} ) => {

  return (
    <div className="ItemList">
    {products.map(product => <Item className="ItemFlex" product={product}/>)}
    </div>
    
  )

}

export default ItemList