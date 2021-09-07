import {Component} from 'react'
import Header from '../../Header/Header'

import {
  CartMainContainer,
  Image,
  NoCartDetailsContainer,
  Heading,
  Description,
  Button,
} from './styledComponents'
import ProductContext from '../../../Context/ProuductContext/ProuductContext'

class Cart extends Component {
  state = {}

  onClickOrderNow = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderCardDetails = () => {
    const {cartList} = this.props
    // const
    // Switch(){
    // }

    // if (cartList.length > 0) {
    //   return <div>Hljj</div>
    // }
    return (
      <NoCartDetailsContainer>
        <Image src="https://res.cloudinary.com/delguky36/image/upload/v1630839419/OBJECTS_hom2wf.png" />
        <Heading>No Orders Yet!</Heading>
        <Description>
          Your cart is empty. Add something from the menu.
        </Description>
        <Button type="button" onClick={this.onClickOrderNow}>
          Order Now
        </Button>
      </NoCartDetailsContainer>
    )
  }

  render() {
    return (
      <ProductContext.Consumer>
        {value => {
          const {
            cartList,
            removeFromCart,
            onIncrement,
            onDecrement,
            onAddToCart,
          } = value
          console.log(cartList)
          return (
            <CartMainContainer>
              <Header cart />
              {this.renderCardDetails()}
            </CartMainContainer>
          )
        }}
      </ProductContext.Consumer>
    )
  }
}

export default Cart
