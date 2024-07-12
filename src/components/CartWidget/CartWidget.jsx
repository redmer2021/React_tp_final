import { FaCartPlus } from "react-icons/fa"
import { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    const { getCantidad } = useContext(Context)

    return (
        <>
            <Link to={'/cart'}>
                <div className="flex items-center">
                        <FaCartPlus className="text-white w-[2rem] h-[2rem]" />
                        <div className="bg-gray-100 ml-2 px-2 rounded-md font-bold">
                            { getCantidad() }
                        </div>
                </div>
            </Link>
        </>
  )
}
