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
        <div className="flex justify-center mt-[2rem]">
            <Flex direction={'column'} justify={'center'} align={"center"}>
                <Heading className="text-2xl" >{titulo}</Heading>
                <ItemList productos={productos}/>
            </Flex>
        </div>
    </>
  )
}
