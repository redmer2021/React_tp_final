import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {RingLoader } from "react-spinners"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../config/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const { idProd } = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        const getData = async () => {

            const queryRef = doc(db, 'productos', idProd)
            const response = await getDoc(queryRef)
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProducto(newItem)
            setCargando(false)
        }

        getData()

        // getProductosPorId(idProd)
        //     .then((data) => setProducto(data))
        //     .catch((error) => console.log(error))
        //     .finally(()=>setCargando(false))
    }, [])

    return (
        <>

            {
                cargando ? (
                        <div className="flex justify-center mt-20">
                            <RingLoader color="#0f53d8" />
                        </div> ) : (
                    <div>
                        <ItemDetail {...producto}/>
                    </div>
                )
            }

        </>
    )
}
