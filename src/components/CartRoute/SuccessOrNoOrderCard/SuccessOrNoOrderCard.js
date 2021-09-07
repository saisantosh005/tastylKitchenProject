import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../../Header/Header'

import {
  CardMainContainer,
  Image,
  Heading,
  Description,
  Button,
  SuccessContainer,
} from './styledComponents'

const data = {
  cart: {
    heading: 'No Orders Yet!',
    description: 'Your cart is empty. Add something from the menu.',
    buttonText: ' Order Now',
  },
  success: {
    heading: 'Payment Successful',
    description:
      'Thank you for ordering Your payment is successfully completed.',
    buttonText: 'Go To Home Page',
  },
}

const SuccessOrNoOrderCard = props => {
  const {history, status} = props

  const onButtonClick = () => {
    history.replace('/')
  }

  const renderNoItems = () => (
    <>
      <Image src="https://res.cloudinary.com/delguky36/image/upload/v1630839419/OBJECTS_hom2wf.png" />
      <Heading>{data.cart.heading}</Heading>
      <Description>{data.cart.description}</Description>
      <Button type="button" onClick={onButtonClick}>
        {data.cart.buttonText}
      </Button>
    </>
  )

  const renderSuccess = () => (
    <SuccessContainer>
      <Image
        status
        src="https://res.cloudinary.com/delguky36/image/upload/v1631013419/Vector_2_n1rnga.png"
      />

      <Heading>{data.success.heading}</Heading>
      <Description>{data.success.description}</Description>
      <Button type="button" onClick={onButtonClick}>
        {data.success.buttonText}
      </Button>
    </SuccessContainer>
  )

  return (
    <CardMainContainer>
      {status === 'success' ? renderSuccess() : renderNoItems()}
    </CardMainContainer>
  )
}

export default withRouter(SuccessOrNoOrderCard)
