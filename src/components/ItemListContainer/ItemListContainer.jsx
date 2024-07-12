import { useEffect } from "react"
import { useState } from "react"
//import { getProductos, getProductosPorCategoria } from "../../data/bdPrue"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {RingLoader } from "react-spinners"
import { db } from "../../config/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = ({titulo}) => {
    const [productos, setProductos] = useState([])
    const [titCompuesto, setTitCompuesto] = useState('')
    const { idCateg } = useParams()
    const [cargando, setCargando] = useState(true)
        
    useEffect(() => {
        /**
         * Se agrega un estado para construir un título compuesto entre lo que recibe por parámetros + la categoría
         * cuando es enviada desde alguna ruta. 
         */
        setTitCompuesto( idCateg ? titulo + ' - ' + idCateg : titulo )
        setCargando(true)

        const getData = async ( ) => {
            const colec = collection(db, 'productos')
            const queryRef = !idCateg ? colec : query(colec, where('categoria', '==', idCateg))

            const response = await getDocs(queryRef)

            const productos = response.docs.map((d) => {
                const newVec = {
                    ...d.data(),
                    id: d.id
                }
                return newVec
            })
            setProductos(productos)
            setCargando(false)
        }
        getData()
        // const dataProductos = idCateg ? getProductosPorCategoria(idCateg) : getProductos()        
        // dataProductos
        //     .then((prod) => setProductos(prod))
        //     .catch((error) => console.error(error))
        //     .finally(()=>setCargando(false))
    }, [ idCateg ])

    return (
        <>
            {
                cargando ? (
                        <div className="flex justify-center mt-20">
                            <RingLoader color="#0f53d8" />
                        </div> ) : (
                    <div>
                        <span className="text-3xl font-bold my-[2rem] flex justify-center text-center" >{titCompuesto}</span>
                        <ItemList productos={productos}/>
                    </div>
                )
            }

        </>
    )
}
