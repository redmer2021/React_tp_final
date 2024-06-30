import { Toast } from "@chakra-ui/react";
import ItemCount from "./ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify'
const ItemDetail = ({nombre, precio, stock, descripcion, img}) => {

    const onAdd = (cantidad) => {
        //console.log(`Agregaste ${cantidad} artículos`)
        toast(`Agregaste ${cantidad} artículos`)
    }

    return (
        <div className="container mx-auto w-[40rem] grid grid-cols-1 mt-4 bg-slate-200 rounded-md shadow-md shadow-blue-300">
            <div className="bg-slate-400 rounded-t-md overflow-hidden">
                <img className="w-full h-full rounded-t-md" src={img} alt="" />
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
            <div className="flex space-x-2 mb-4 mt-8 justify-center">
                <ItemCount valorInicial={1} stock={stock} onAdd={onAdd} />
            </div>
            <ToastContainer />
        </div>
    )
}

export default ItemDetail