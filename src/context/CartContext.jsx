import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addItem = (productoAgregado, cantidad) => {
        const newItem = {
            ...productoAgregado, cantidad
        }

        const existeProducto = cart.some((prod) => prod.id === newItem.id)

        if (existeProducto){
            const actualizarCarrito = cart.map((prod) => prod.id === newItem.id ? {...prod, cantidad: prod.cantidad + cantidad} : prod)
            setCart(actualizarCarrito)
        } else {
            setCart([...cart, newItem])
        }

    }

    const eliminarProducto = (id) => {
        const actualizarCarrito = cart.filter((prod) => prod.id !== id)
        setCart(actualizarCarrito)
    }


    const limpiarCarrito = () => {
        setCart([])
    }

    const getCantidad = () => {
        let varTotal = 0
        cart.forEach((prod) => {
            varTotal = varTotal + prod.cantidad
        })
        return varTotal
    }

    const getTotalCarrito = () => {
        const varTotal = cart.reduce((actual, item) => actual + (item.precio * item.cantidad), 0)
        
        return varTotal
    }

    //console.log(getTotalCarrito())
    
    return (

        <Context.Provider 
            value={{
                cart,
                addItem,
                eliminarProducto,
                limpiarCarrito,
                getCantidad,
                getTotalCarrito
            }}>
            {children}
        </Context.Provider>

    )
}

export default Context

