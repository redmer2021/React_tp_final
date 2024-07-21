import { useContext } from "react"
import { Link } from "react-router-dom"
import Context from "../../context/CartContext"


const ConfirmarPedido = () => {
    const { nuevoId } = useContext(Context)
    return (
    <div className="flex items-center flex-col">
        <h3 className="text-3xl mb-3 text-center font-extrabold mt-4">Pedido Confirmado</h3>
        <h4 className="text-2xl font-semibold"> Número de Identificación: {nuevoId} </h4>
        <Link to={'/'} className="bg-blue-800 w-[15rem] text-white text-center py-2 rounded-md mt-4" >Ver Productos disponibles</Link>
    </div>
    )
}

export default ConfirmarPedido
