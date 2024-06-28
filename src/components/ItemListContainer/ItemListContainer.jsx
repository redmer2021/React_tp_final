import { useEffect } from "react"
import { useState } from "react"
import { getProductos } from "../../data/bdPrue"
import ItemList from "../ItemList/ItemList"
import { Flex, Heading } from "@chakra-ui/react"

export const ItemListContainer = ({titulo}) => {

const [productos, setProductos] = useState([])

useEffect(() => {
    getProductos()
        .then((prod) => setProductos(prod))
        .catch((error) => console.error(error))
}, [])

  
return (
    <>
        <span className="text-3xl font-bold my-[2rem] flex justify-center text-center" >{titulo}</span>
        <ItemList productos={productos}/>
    </>
  )
}
