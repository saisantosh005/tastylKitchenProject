import styled from 'styled-components'

const LogosMainContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.login ? 'column' : 'row')};
  align-items: center;
`
const LogoImage = styled.img`
  width: 49px;
  height: 39px;
  background: #f7931e;
`
const LogoName = styled.h1`
  color: #f7931e;
  font-family: ' DM Sans';
  font-style: italic;
  font-weight: bold;
  font-size: ${props => (props.login ? 24 : 'row')}px;
  line-height: ${props => (props.login ? 32 : 'row')}px;
  margin: 0px;
`

export {LogosMainContainer, LogoImage, LogoName}
