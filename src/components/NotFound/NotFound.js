import Header from '../Header/Header'

import {
  NotFoundMainContainer,
  DetailsContainer,
  Image,
  Heading,
  Description,
  Button,
} from './styledComponents'

const NotFound = props => {
  const {onClickButton} = props
  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <NotFoundMainContainer>
      <Header />
      <DetailsContainer>
        <Image src="https://res.cloudinary.com/delguky36/image/upload/v1630837440/erroring_1_rwjira.png" />
        <Heading>PAGE NOT FOUND</Heading>
        <Description>
          We're sorry, the page you requested could not be found. Plase go back
          to the homepage
        </Description>
        <Button type="button" onClick={goToHome}>
          Home Page
        </Button>
      </DetailsContainer>
    </NotFoundMainContainer>
  )
}

export default NotFound
