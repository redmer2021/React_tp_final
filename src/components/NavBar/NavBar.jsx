import { CartWidget } from "../CartWidget/CartWidget"
import { Button, Menu, MenuButton,MenuList,MenuItem } from '@chakra-ui/react'
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
        <div className="banner-menu h-[15rem]">
            <div className="container mx-auto flex justify-between items-center p-3 ">
                <Link to='/'> <span className="text-white text-3xl font-extrabold block">Logotipo</span> </Link>

                <Menu>
                    <MenuButton as={Button} rightIcon={ <FaCaretDown /> }>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem> <Link to='/categorias/Remeras'> Remeras </Link> </MenuItem>
                        <MenuItem> <Link to='/categorias/Buzos'> Buzos </Link> </MenuItem>
                        <MenuItem> <Link to='/categorias/Pijamas'> Pijamas </Link> </MenuItem>
                        <MenuItem> <Link to='/categorias/Zapatillas'> Zapatillas </Link> </MenuItem>
                    </MenuList>
                </Menu>
                
                <CartWidget/>
            </div>
        </div>

    </>
  )
}
