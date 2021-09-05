import {Component} from 'react'
import Header from '../../Header/Header'

import {CartMainContainer, Image} from './styledComponents'

class CartItem extends Component {
  state = {}

  render() {
    return (
      <CartMainContainer>
        <Header cart />
      </CartMainContainer>
    )
  }
}

export default CartItem
