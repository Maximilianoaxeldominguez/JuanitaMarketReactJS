import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children } ) => {

    const [ cartList, setCartList ] = useState([])

    const addToCart = (product) => {

        const idx = cartList.findIndex(prod => prod.id === product.id )

            if ( idx === -1 ) {
                
                setCartList( [
                ...cartList,
                product
            ] )
            } else {

                 cartList[idx].cantidad += product.cantidad
                 setCartList( [ ...cartList ] )

            }        
    }
  
     // It sets the cartList to an empty array.
    const emptyCart = () => setCartList([])


    // precio  total

    const totalPrice = () => cartList.reduce ( (count, product) => count += (product.cantidad * product.price) , 0  )

    // cantidad total

    const totalQuantity = () => cartList.reduce ( (count, product) => count += product.cantidad , 0  )

    // eliminar item

    const deleteItem = ( id ) => setCartList(cartList.filter( product => product.id != id  ))



    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalQuantity,
            totalPrice,
            deleteItem
        }} >

            
            { children }     
        </CartContext.Provider>
    )

}