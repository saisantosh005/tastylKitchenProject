import Cookies from 'js-cookie'
import {AiOutlineMenu} from 'react-icons/ai'

import {
  HeaderMainContainer,
  HeaderPart,
  LogoContainer,
  NavContainer,
  NavItem,
  Button,
  MenuIconContainer,
  NavContainerTwo,
} from './styledComponents'
import Logo from '../Logo/Logo'

const Header = props => {
  const {history, home, cart} = props
  const logout = () => {
    Cookies.remove('jwtToken')
    history.replace('/')
  }

  return (
    <HeaderMainContainer>
      <HeaderPart>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavContainer>
          <NavItem selected={home}>Home</NavItem>
          <NavItem selected={cart}>Cart</NavItem>
          <Button type="button" onClick={logout}>
            Logout
          </Button>
        </NavContainer>
        <MenuIconContainer />
      </HeaderPart>
      <NavContainerTwo>
        <NavItem selected={home}>Home</NavItem>
        <NavItem selected={cart}>Cart</NavItem>
      </NavContainerTwo>
    </HeaderMainContainer>
  )
}

export default Header
