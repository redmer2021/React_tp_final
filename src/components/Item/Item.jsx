import { Link } from "react-router-dom";

const Item = ({id, nombre, descripcion, img, precio, stock}) => {

    return (
    <>
        <div className="bg-slate-200 rounded-md shadow-md shadow-blue-300 hover:bg-slate-300">
            <div className="flex flex-col">
                <div className="bg-slate-400 rounded-t-md overflow-hidden">
                    <img className="w-full object-cover rounded-t-md" src={img} alt="" />
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
                    <Link to={`/producto/${id}`} ><button className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 text-white">Ver Detalles</button></Link>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Item