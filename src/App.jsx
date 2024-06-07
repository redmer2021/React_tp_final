import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ChakraProvider>
            <NavBar/>
            <ItemListContainer
                titulo={'CARRITO DE COMPRAS POTENCIADO'}
            />
        </ChakraProvider>
    </>
  )
}

export default App
