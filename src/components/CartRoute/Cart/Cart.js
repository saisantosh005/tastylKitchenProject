import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {BiRupee} from 'react-icons/bi'

import Header from '../../Header/Header'
import ProductContext from '../../../Context/ProuductContext/ProuductContext'
import Card from '../../Card/Card'
import Footer from '../../Footer/Footer'
import SuccessOrNoOrderCard from '../SuccessOrNoOrderCard/SuccessOrNoOrderCard'

import {
  CartMainContainer,
  Button,
  CartListContainer,
  CartListAndFooterContainer,
  CartListAndOrderSummaryContainer,
  OrderSummaryContainer,
  TextContainer,
  OrderSummaryText,
} from './styledComponents'

class Cart extends Component {
  state = {orderStatus: 'initial'}

  onClickOrderNow = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderCardList = (cartList, onIncrement, onDecrement) =>
    cartList.map(eachItem => (
      <Card
        key={uuidv4()}
        button
        cart
        details={eachItem}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    ))

  changeOrderStatus = removeFromCart => {
    removeFromCart()
    this.setState({
      orderStatus: 'success',
    })
  }

  renderOrderSummary = (cartList, removeFromCart) => {
    const priceList = cartList.map(
      eachItem => eachItem.price * eachItem.quantity,
    )
    const totalPrice = priceList.reduce((a, b) => a + b)
    return (
      <OrderSummaryContainer>
        <TextContainer>
          <OrderSummaryText>OrderTotal:</OrderSummaryText>
          <OrderSummaryText>
            <BiRupee />
            {totalPrice}
          </OrderSummaryText>
        </TextContainer>
        <Button
          type="button"
          onClick={() => this.changeOrderStatus(removeFromCart)}
        >
          Place Order
        </Button>
      </OrderSummaryContainer>
    )
  }

  renderCardDetails = (cartList, onIncrement, onDecrement, removeFromCart) => {
    const cartListLength = cartList.length
    if (cartListLength === 0) {
      return <SuccessOrNoOrderCard status="cart" />
    }
    if (cartListLength > 0) {
      return (
        <CartListAndFooterContainer>
          <CartListAndOrderSummaryContainer>
            <CartListContainer>
              {this.renderCardList(cartList, onIncrement, onDecrement)}
              {this.renderOrderSummary(cartList, removeFromCart)}
            </CartListContainer>
          </CartListAndOrderSummaryContainer>
          <Footer />
        </CartListAndFooterContainer>
      )
    }
    return null
  }

  render() {
    const {orderStatus} = this.state
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

          return (
            <CartMainContainer>
              <Header cart />
              {orderStatus === 'success' ? (
                <SuccessOrNoOrderCard status="success" />
              ) : (
                this.renderCardDetails(
                  cartList,
                  onIncrement,
                  onDecrement,
                  removeFromCart,
                )
              )}
            </CartMainContainer>
          )
        }}
      </ProductContext.Consumer>
    )
  }
}

export default Cart
