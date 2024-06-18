import { Box, Flex } from "@chakra-ui/react"
import Item from "../Item/Item"

const ItemList = ({productos}) => {

    return (
        <Flex gap={6} wrap={"wrap"} align={"center"} justify={"center"}>
            {
                productos.map((p) => (
                    <Box key={p.id}>
                        <Item {...p} />
                    </Box>
                ))
            }
        </Flex>
    )
}

export default ItemList