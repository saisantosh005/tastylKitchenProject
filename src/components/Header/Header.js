import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

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
  }

  logout = () => {
    const {history} = this.props
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

  renderMenuSection = () => {
    const {home, cart} = this.props

    return (
      <NavContainerTwo>
        <IconContainerTwo>
          <NavItem to="/" selected={home}>
            Home
          </NavItem>
          <NavItem to="/cart" selected={cart}>
            Cart
          </NavItem>
          <Button type="button" onClick={this.logout}>
            Logout
          </Button>
        </IconContainerTwo>
        <AiFillCloseCircle onClick={this.closeIconContainer} />
      </NavContainerTwo>
    )
  }

  renderLogoPart = () => (
    <LogoContainer to="/">
      <Logo
        color="#f7931e"
        imgUrl="https://res.cloudinary.com/delguky36/image/upload/v1630820226/Vector_hrufre.jpg"
      />
    </LogoContainer>
  )

  render() {
    const {home, cart} = this.props
    const {showNavIconSection} = this.state
    return (
      <HeaderMainContainer>
        <HeaderPart>
          {this.renderLogoPart()}
          <NavContainer>
            <NavItem to="/" selected={home}>
              Home
            </NavItem>
            <NavItem to="/cart" selected={cart}>
              Cart
            </NavItem>
            <Button type="button" onClick={this.logout}>
              Logout
            </Button>
          </NavContainer>
          <MenuIconContainer onClick={this.onClickMenu} />
        </HeaderPart>
        {showNavIconSection && this.renderMenuSection()}
      </HeaderMainContainer>
    )
  }
}

export default withRouter(Header)
