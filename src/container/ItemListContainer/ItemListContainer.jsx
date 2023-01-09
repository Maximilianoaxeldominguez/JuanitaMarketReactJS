import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

import ItemList from '../../components/ItemList/ItemList'


const ItemListContainer = () => {


  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState([true])


  const { categoriaId } = useParams()

useEffect ( () => {

  if (categoriaId) {

  const db = getFirestore()
  const queryCollection = collection(db,"Products")
  const queryFiltered = query(queryCollection, where("category", "==", categoriaId))

  getDocs(queryFiltered)
  .then( response => setProducts ( response.docs.map(product => ( { id: product.id, ...product.data() } ) ) ) )
  .catch( err => console.log( err ) )
  .finally(()=> setLoading(false))

} else {
    const db = getFirestore()
    const queryCollection = collection(db, "Products")

    getDocs (queryCollection)
    .then(response => setProducts( response.docs.map( product => ( { id: product.id, ...product.data() } ) ) ))
    .finally( ()=> setLoading(false) )

}

}, [categoriaId] )


  return (

    <>

      {loading ?
        <h2>cargando productos... </h2>
        :
        <ItemList className="ItemListFlex" products={products} />
      }

    </>

  )


}

export default ItemListContainer
