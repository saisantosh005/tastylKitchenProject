import {LogosMainContainer, LogoImage, LogoName} from './styledComponent'

const Logo = props => {
  const {color, login} = props
  return (
    <LogosMainContainer login={login}>
      <LogoImage src="https://res.cloudinary.com/delguky36/image/upload/v1630820226/Vector_hrufre.jpg" />
      <LogoName>Tasty Kitchens</LogoName>
    </LogosMainContainer>
  )
}
export default Logo
