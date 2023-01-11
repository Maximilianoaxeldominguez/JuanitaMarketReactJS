import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import CartContainer from './container/CartContainer/CartContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'

//css BOOSTRAP
import "bootstrap/dist/css/bootstrap.min.css"

import { CartContextProvider } from './context/CartContext'
import Footer from './components/footer/footer'



function App() {


  return (

    <CartContextProvider>

    <BrowserRouter>

        <NavBar />

      <Routes>
        
      <Route path="" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/detail/:productoId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<CartContainer/>}/>
      <Route path="*" element={<Navigate to="/" /> }/> //* Si la ruta no exite me lleva a la raiz // 

      </Routes>

      <Footer/>

    </BrowserRouter>

    </CartContextProvider>

  )
}

export default App


