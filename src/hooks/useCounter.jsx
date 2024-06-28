import { useState } from "react"

const useCounter = (valorInicial, stock) => {

    const [ contador, setContador ] = useState(valorInicial)
    
    const sumar = () => {
        contador < stock && setContador(contador + 1)
    }
    const restar = () => {
        contador > valorInicial && setContador( contador-1 )
    }

    return {contador, sumar, restar}
}

export default useCounter