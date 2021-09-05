import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import {
  FooterMainContainer,
  FooterDescription,
  IconContainer,
  Icon,
} from './styledComponents'
import Logo from '../Logo/Logo'

const Footer = () => (
  <FooterMainContainer>
    <Logo
      color="#ffffff"
      imgUrl="https://res.cloudinary.com/delguky36/image/upload/v1630825329/Group_7420_rtuni9.png"
    />
    <FooterDescription>
      The only thing we're serious about is food. Contact us on
    </FooterDescription>
    <IconContainer>
      <Icon>
        <FaPinterestSquare />
      </Icon>
      <Icon>
        <FaInstagram />
      </Icon>
      <Icon>
        <FaTwitter />
      </Icon>

      <Icon>
        <FaFacebookSquare />
      </Icon>
    </IconContainer>
  </FooterMainContainer>
)

export default Footer
