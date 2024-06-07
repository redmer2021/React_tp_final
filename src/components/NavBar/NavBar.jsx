import { CartWidget } from "../CartWidget/CartWidget"
import { Button, Menu, MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider, Heading } from '@chakra-ui/react'
import { FaCartPlus, FaCaretDown } from "react-icons/fa";
export const NavBar = () => {
  return (
    <>
        <div className="banner-menu h-[15rem]">
            <div className="container mx-auto flex justify-between items-center p-3 ">
                <span className="text-white text-3xl font-extrabold block">Logotipo</span>
                <Menu>
                    <MenuButton as={Button} rightIcon={ <FaCaretDown /> }>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                <FaCartPlus className="text-white w-[2rem] h-[2rem]" />
            </div>
        </div>

        <CartWidget/>
    </>
  )
}
