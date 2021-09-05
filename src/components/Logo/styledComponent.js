import styled from 'styled-components'

const LogosMainContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.login ? 'column' : 'row')};
  align-items: center;
`
const LogoImage = styled.img`
  width: ${props => (props.login ? 49 : 35)}px;
  height: ${props => (props.login ? 39 : 28)}px;
  background: #f7931e;
  @media screen and (min-width: 768px) {
    width: ${props => (props.login ? 'column' : 'row')} 49px;
    height: ${props => (props.login ? 39 : 'row')}px;
  }
`
const LogoName = styled.h1`
  color: #f7931e;
  font-family: ' DM Sans';
  font-style: italic;
  font-weight: bold;
  font-size: ${props => (props.login ? 24 : 16)}px;
  line-height: ${props => (props.login ? 32 : 24)}px;
  margin: 0px;
  margin-left: 11px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export {LogosMainContainer, LogoImage, LogoName}
