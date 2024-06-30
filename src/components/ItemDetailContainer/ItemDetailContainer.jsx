import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductosPorId } from "../../data/bdPrue"
import ItemDetail from "../ItemDetail"
import {RingLoader } from "react-spinners"


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const { idProd } = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)

        getProductosPorId(idProd)
            .then((data) => setProducto(data))
            .catch((error) => console.log(error))
            .finally(()=>setCargando(false))
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
