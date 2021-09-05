import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'

const HeaderMainContainer = styled.div`
  background: #f8fafc;
`
const HeaderPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;

  padding: 0px 26px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    height: 96px;

    padding: 0px;
  }
`
const LogoContainer = styled.div``
const NavContainer = styled.div`
  display: none;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
const NavItem = styled(Link)`
  color: ${props => (props.selected ? '#F7931E' : '#334155')};
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  margin: 0px;
  margin-right: 32px;
  text-decoration: none;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  background: #f7931e;
  border-radius: 8px;
  margin: 0px 0px;
  width: 73px;
  height: 32px;
`
const MenuIconContainer = styled(AiOutlineMenu)`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const NavContainerTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 26px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const IconContainerTwo = styled.div``
export {
  HeaderMainContainer,
  HeaderPart,
  NavContainer,
  NavItem,
  Button,
  LogoContainer,
  MenuIconContainer,
  NavContainerTwo,
  IconContainerTwo,
}
