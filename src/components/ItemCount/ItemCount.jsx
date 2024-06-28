import useCounter from "../../hooks/useCounter"

const ItemCount = ({valorInicial, stock}) => {

    const { contador, sumar, restar } = useCounter(valorInicial, stock)

  return (
    <>
        <button onClick={restar} className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 text-white">-</button>
        <span className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 text-white">{contador}</span>
        <button onClick={sumar} className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 text-white">+</button>
    </>
  )
}

export default ItemCount