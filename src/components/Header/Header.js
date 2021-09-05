import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillCloseCircle} from 'react-icons/ai'

import {
  HeaderMainContainer,
  HeaderPart,
  LogoContainer,
  NavContainer,
  NavItem,
  Button,
  MenuIconContainer,
  NavContainerTwo,
  IconContainerTwo,
} from './styledComponents'
import Logo from '../Logo/Logo'

class Header extends Component {
  state = {
    showNavIconSection: false,
    offers: [],
  }

  logout = () => {
    const {history, home, cart} = this.props
    Cookies.remove('jwtToken')
    history.replace('/')
  }

  onClickMenu = () => {
    this.setState(prevState => ({
      showNavIconSection: !prevState.showNavIconSection,
    }))
  }

  closeIconContainer = () => {
    this.setState({
      showNavIconSection: false,
    })
  }

  render() {
    const {home, cart} = this.props
    const {showNavIconSection} = this.state
    return (
      <HeaderMainContainer>
        <HeaderPart>
          <LogoContainer>
            <Logo
              color="#f7931e"
              imgUrl="https://res.cloudinary.com/delguky36/image/upload/v1630820226/Vector_hrufre.jpg"
            />
          </LogoContainer>
          <NavContainer>
            <NavItem selected={home}>Home</NavItem>
            <NavItem selected={cart}>Cart</NavItem>
            <Button type="button" onClick={this.logout}>
              Logout
            </Button>
          </NavContainer>
          <MenuIconContainer onClick={this.onClickMenu} />
        </HeaderPart>
        {showNavIconSection && (
          <NavContainerTwo>
            <IconContainerTwo>
              <NavItem selected={home}>Home</NavItem>
              <NavItem selected={cart}>Cart</NavItem>
            </IconContainerTwo>
            <AiFillCloseCircle onClick={this.closeIconContainer} />
          </NavContainerTwo>
        )}
      </HeaderMainContainer>
    )
  }
}

export default Header
