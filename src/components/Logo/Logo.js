import {LogosMainContainer, LogoImage, LogoName} from './styledComponent'

const Logo = props => {
  const {color, login, imgUrl} = props
  return (
    <LogosMainContainer login={login}>
      <LogoImage login={login} src={imgUrl} />
      <LogoName login={login} color={color}>
        Tasty Kitchens
      </LogoName>
    </LogosMainContainer>
  )
}
export default Logo
