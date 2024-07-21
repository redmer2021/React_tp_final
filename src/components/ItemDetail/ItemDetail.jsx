import { Toast } from "@chakra-ui/react"
import ItemCount from "../ItemCount/ItemCount"
import { ToastContainer, toast } from 'react-toastify'
import { useContext, useState } from "react"
import Context from "../../context/CartContext"
import { Link } from "react-router-dom"
const ItemDetail = ({id, nombre, precio, stock, descripcion, img}) => {

    const [ productosAgregados, setProductosAgregados ] = useState(0)

    const { addItem } = useContext(Context)

    const onAdd = (cantidad) => {
        const varItem = {
            id,
            nombre,
            precio
        }
        addItem(varItem, cantidad)
        
        setProductosAgregados(cantidad)

        toast(`Agregaste ${cantidad} artículos`)

    }

    return (
        <div className="container mx-auto w-[35rem] h-[35rem] grid grid-cols-1 mt-10 bg-slate-200 rounded-md shadow-md shadow-blue-300 mb-10">
            <div className="bg-slate-400 rounded-t-md overflow-hidden p-2 flex justify-center">
                <img className="h-full rounded-md" src={img} alt="" />
            </div>
            <div className="text-[1rem] font-bold text-left pl-2 my-2">
                {nombre}
            </div>
            <div className="text-left text-sm h-[5.2rem] overflow-hidden px-2">
                {descripcion}
            </div>
            <div className="text-xl font-extrabold text-right pr-4 mt-2">
                ${precio}
            </div>
            {
                productosAgregados === 0 ?(
                    <div className="flex space-x-2 mb-4 mt-8 justify-center">
                        <ItemCount valorInicial={1} stock={stock} onAdd={onAdd} />
                    </div>    
                ) :(
                    <div className="flex space-x-2 justify-center mt-4 mb-4">
                        <Link to={'/'}>
                            <button className="bg-blue-600 px-3 py-2 text-white w-[12rem] text-center rounded-md font-bold">Seguir de compras</button>
                        </Link>
                        <Link to={'/cart'}>
                            <button className="bg-blue-600 px-3 py-2 text-white w-[10rem] text-center rounded-md font-bold">Ver Carrito</button>
                        </Link>
                    </div>
                )
            }
            <ToastContainer />
        </div>
    )
}

export default ItemDetail