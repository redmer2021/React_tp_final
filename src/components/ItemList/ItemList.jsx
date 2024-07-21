import { Box, Flex } from "@chakra-ui/react"
import Item from "../Item/Item"

const ItemList = ({productos}) => {

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 mt-4 mb-10 gap-8 justify-center items-center">
            {
                productos.map((p) => (
                    <Box key={p.id}>
                        <Item {...p} />
                    </Box>
                ))
            }
        </div>
    )
}

export default ItemList