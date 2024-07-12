import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import 'react-toastify/ReactToastify.css'
import PageNoteFound from './components/PageNotFound/PageNoteFound'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ChakraProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={ <ItemListContainer titulo='Pilchas baratas'/> } />
                        <Route path='/categorias/:idCateg' element={ <ItemListContainer titulo='Pilchas baratas'/> } />
                        <Route path='/producto/:idProd' element={ <ItemDetailContainer/> } />
                        <Route path='/cart' element={ <Cart/> } />
                        <Route path='*' element={ <PageNoteFound /> } />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </ChakraProvider>
    </>
  )
}

export default App
