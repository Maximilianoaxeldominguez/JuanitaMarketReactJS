import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import ItemDetail from "../../components/ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { productoId } = useParams() 



  useEffect ( () => {

    const db = getFirestore()
    const queryDoc = doc(db,"Products",productoId)

    getDoc(queryDoc)
    .then(response => setProduct (  { id: response.id, ...response.data()  }  ) )
    .catch(err => console.log(err))
  }
  ,[productoId])

  return (
    
    
      <ItemDetail
        product={product}
    />

  )
}

export default ItemDetailContainer