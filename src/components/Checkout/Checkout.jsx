import { useContext, useState } from "react"
import { db } from '../../config/firebase'
import Context from "../../context/CartContext"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import ConfirmarPedido from "../ConfirnarPedido/ConfirmarPedido"
import { ToastContainer, toast } from 'react-toastify'


const Checkout = () => {


    const [error, setError] = useState({})

    const { idNuevoPedido, cart, limpiarCarrito, getCantidad, getTotalCarrito } = useContext(Context)

    const [ user, setUser ] = useState({
        nombre: '',
        email: '',
        reingEmail: '',
        telefono: ''
    })

    const [pedidoConfirmado, setPedidoConfirmado] = useState(false)

    const updateUser = (e) => {
        setUser((user) => ({
            ...user, [e.target.name]: e.target.value
        }) )
    }

    const FormularioValido = ( ) => {
        
        const errors = {}

        if (user.nombre===''){
            errors.nombre = 'Debe ingresar su nombre'
        }else if(user.nombre.length < 3 || user.nombre.length > 25){
            errors.nombre = 'El nombre debe tener un mínimo de 3 caracteres y un máximo de 25'
        }
        if (user.email===''){
            errors.email = 'Debe ingresar un email'
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(user.email)) {
                errors.email = 'Debe ingresar un email válido';
            }
        }
        if (user.reingEmail===''){
            errors.reingEmail = 'Debe re-ingresar el email'
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(user.email)) {
                errors.email = 'Debe re-ingresar un email válido';
            }
        }
        if (user.email !== '' && user.reingEmail !== ''){
            if (user.email !== user.reingEmail){
                errors.reingEmail = 'Los mails ingresados son diferentes'
            }
        }

        if (getCantidad() == 0){
            toast(`El carrito está vacio`)
            return false
        }

        setError(errors)

        return Object.keys(errors).length === 0

    }

    const getOrder = async ( ) => {

        if (!FormularioValido()){
            return
        }

        const ordersCollection = collection(db, 'orders')

        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotalCarrito(),
                fechaDeCompra: Timestamp.now()
            }

            const orderRef = await addDoc(ordersCollection, order)

            idNuevoPedido(orderRef.id)
            setPedidoConfirmado(true)
            limpiarCarrito()
            
        } catch (error){
            console.log(error)
        }

    }


    return (
        <>
            {
                pedidoConfirmado ? ( 
                    <ConfirmarPedido/> 
                ) : (
                    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-2">
                        <div className="bg-pink-50 border rounded-lg p-4">
                            <h3 className="text-3xl font-semibold mb-3">Datos de Facturación</h3>
                            <p className="text-lg">Por favor, ingrese sus datos para completar el pedido. Esta información no será compartida sin su concentimiento</p>
                        </div>
        
                        <div className="bg-pink-100 border rounded-lg p-6">
                            {
                                error.nombre ? (
                                    <CampTexto classname='border border-red-500 w-full p-2 rounded-md' onchange={updateUser} name='nombre' placeholder='Ingrese su nombre...'>{error.nombre}</CampTexto>
                                ) : (
                                    <CampTexto classname='border-0 w-full p-2 rounded-md' onchange={updateUser} name='nombre' placeholder='Ingrese su nombre...'>Nombre</CampTexto>
                                )
                            }
                            
                            {
                                error.email ? (
                                    <CampTexto margentop={'mt-4'} classname='border border-red-500 w-full p-2 rounded-md' onchange={updateUser} name='email' placeholder='Ingrese su Email...'>{error.email}</CampTexto>
                                ) : (
                                    <CampTexto margentop={'mt-4'} classname='border-0 w-full p-2 rounded-md' onchange={updateUser} name='email' placeholder='Ingrese su Email...'>Email</CampTexto>
                                )
                            }
        
                            {
                                error.reingEmail ? (
                                    <CampTexto margentop={'mt-4'} classname='border border-red-500 w-full p-2 rounded-md' onchange={updateUser} name='reingEmail' placeholder='Ingrese su Email...'>{error.reingEmail}</CampTexto>
                                    ) : (
                                    <CampTexto margentop={'mt-4'} classname='border-0 w-full p-2 rounded-md' onchange={updateUser} name='reingEmail' placeholder='Reingresar Email...'>Reingrese su Email</CampTexto>
                                )
                                
                            }

                            <CampTexto margentop={'mt-4'} classname='border-0 w-full p-2 rounded-md' onchange={updateUser} name='telefono' placeholder='Ingrese su teléfono (móvil o celuar)...'>Teléfonos</CampTexto>
       
                            <div className="mt-4 text-right">
                                <button onClick={getOrder} className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 font-semibold" >Finalizar Pedido</button>
                            </div>
        
                        </div>

                        <ToastContainer />

                    </div>    
                )
            }
        </>
        
    )
}

const CampTexto = ({ children, onchange, placeholder, name, classname, margentop }) => {
    return (
        <div className={margentop}>
            <label className="mb-1 block">{children}</label>
            <input onChange={onchange} name={name} className={classname} type="text" placeholder={placeholder}/>
        </div>
    )
}


export default Checkout