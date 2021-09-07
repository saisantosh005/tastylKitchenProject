import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {BiRupee} from 'react-icons/bi'

import Header from '../../Header/Header'

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
import ProductContext from '../../../Context/ProuductContext/ProuductContext'
import Card from '../../Card/Card'
import Footer from '../../Footer/Footer'
import SuccessOrNoOrderCard from '../SuccessOrNoOrderCard/SuccessOrNoOrderCard'

class Cart extends Component {
  state = {orderStatus: 'initial'}

  onClickOrderNow = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderCardList = cartList =>
    cartList.map(eachItem => <Card key={uuidv4()} details={eachItem} />)

  changeOrderStatus = () => {
    this.setState({
      orderStatus: 'success',
    })
  }

  renderCardDetails = cartList => {
    const cartListLength = cartList.length
    if (cartListLength === 0) {
      return <SuccessOrNoOrderCard status="cart" />
    }
    if (cartListLength > 0) {
      const priceList = cartList.map(
        eachItem => eachItem.price * eachItem.quantity,
      )
      const totalPrice = priceList.reduce((a, b) => a + b)
      return (
        <CartListAndFooterContainer>
          <CartListAndOrderSummaryContainer>
            <CartListContainer>
              {this.renderCardList(cartList)}
            </CartListContainer>
            <OrderSummaryContainer>
              <TextContainer>
                <OrderSummaryText>OrderTotal:</OrderSummaryText>
                <OrderSummaryText>
                  <BiRupee />
                  {totalPrice}
                </OrderSummaryText>
              </TextContainer>
              <Button type="button" onClick={this.changeOrderStatus}>
                Place Order
              </Button>
            </OrderSummaryContainer>
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
                this.renderCardDetails(cartList)
              )}
            </CartMainContainer>
          )
        }}
      </ProductContext.Consumer>
    )
  }
}

export default Cart
