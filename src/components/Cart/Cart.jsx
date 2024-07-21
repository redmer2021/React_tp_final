import { useContext } from "react"
import Context from "../../context/CartContext"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, eliminarProducto, getTotalCarrito, limpiarCarrito } = useContext(Context)


    if (cart.length === 0){
        return (
            <div className="flex items-center flex-col">
                <h3 className="text-3xl text-center font-extrabold mt-4">Aún no has realizado compras</h3>
                <Link to={'/'} className="bg-blue-800 w-[15rem] text-white text-center py-2 rounded-md mt-4" >Ver Productos disponibles</Link>
            </div>
        )
    } else {
        return (
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                                    <thead
                                        className="border-b border-neutral-200 bg-[#332D2D] font-medium text-white dark:border-white/10">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Producto</th>
                                            <th scope="col" className="px-6 py-4">Cantidad</th>
                                            <th scope="col" className="px-6 py-4">Precio</th>
                                            <th scope="col" className="px-6 py-4">Subtotal</th>
                                            <th scope="col" className="px-6 py-4">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((prod) => (
                                                <tr key={prod.id} className="border-b border-neutral-200 dark:border-white/10">
                                                    <td className="whitespace-nowrap px-6 py-4">{prod.nombre}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{prod.cantidad}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{prod.precio}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">{prod.cantidad*prod.precio}</td>
                                                    <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center">
                                                        <RiDeleteBin6Fill className="cursor-pointer" size={28} onClick={() => eliminarProducto(prod.id)} />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="flex flex-col items-end mt-2 space-y-2">
                    <span className="text-2xl font-bold text-right">Total General: { getTotalCarrito() } </span>
                    <Link to='/checkout'><button className="bg-blue-600 px-3 py-2 text-white w-auto rounded-md font-bold">Finalizar Compra</button></Link> 
                    <button className="bg-blue-600 px-3 py-2 text-white w-auto rounded-md font-bold" onClick={() => limpiarCarrito()}>Cancelar Compra</button>
                </div>
            </div>
    
        )
    }

}

export default Cart

