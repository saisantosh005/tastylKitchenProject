import {LogosMainContainer, LogoImage, LogoName} from './styledComponent'

const Logo = props => {
  const {color, login, imgUrl} = props
  return (
    <LogosMainContainer login={login}>
      <LogoImage color={color} src={imgUrl} />
      <LogoName color={color}>Tasty Kitchens</LogoName>
    </LogosMainContainer>
  )
}
export default Logo
