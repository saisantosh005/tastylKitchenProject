import {Component} from 'react'
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './components/HomeRoute/Home/Home'
import LoginRoute from './components/Authentication/LoginRoute/LoginRoute'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/CartRoute/Cart/Cart'
import SpecificRoute from './components/SpecificRestaurant/SpecificRestaurant'
import ProductContext from './Context/ProuductContext/ProuductContext'

class App extends Component {
  state = {
    cartList: [],
  }

  onIncrementQuantity = id => {
    const {cartList} = this.state

    const updatedCart = cartList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, quantity: eachItem.quantity + 1}
      }
      return eachItem
    })
    this.setState({
      cartList: [...updatedCart],
    })
  }

  onDecrementQuantity = id => {
    const {cartList} = this.state

    const updatedCart = cartList.map(eachItem => {
      if (eachItem.id === id && eachItem.quantity > 1) {
        return {...eachItem, quantity: eachItem.quantity - 1}
      }
      if (eachItem.id === id && eachItem.quantity === 1) {
        return null
      }
      return eachItem
    })
    this.setState({
      cartList: [...updatedCart],
    })
  }

  removeFromCart = id => {
    const {cartList} = this.state
    const updatedCart = cartList.map(eachItem => eachItem.id !== id)
    this.setState({
      cartList: [...updatedCart],
    })
  }

  onAddToCart = product => {
    const {cartList} = this.state
    if (cartList.length !== 0) {
      const isInCart = cartList.findIndex(item => item.name === product.name)
      if (isInCart !== -1) {
        console.log('yess')
        const updatedList = cartList.map(eachItem => {
          if (eachItem.id === product.id) {
            return {...eachItem, quantity: eachItem.quantity + 1}
          }
          return {...eachItem}
        })
        this.setState(
          {
            cartList: [...updatedList],
          },
          console.log(cartList, 'same'),
        )
      } else {
        this.setState({
          cartList: [...cartList, {...product, quantity: 1}],
        })
      }
    } else {
      this.setState({
        cartList: [{...product, quantity: 1}],
      })
    }
  }

  render() {
    const {cartList} = this.state
    return (
      <ProductContext.Provider
        value={{
          cartList,
          onAddToCart: this.onAddToCart,
          onDecrement: this.onIncrementQuantity,
          onIncrement: this.onIncrementQuantity,
        }}
      >
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={LoginRoute} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute
                exact
                path="/restaurant/:id"
                component={SpecificRoute}
              />
              <ProtectedRoute exact path="/cart" component={Cart} />
              <Route exact path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
        </div>
      </ProductContext.Provider>
    )
  }
}
export default App
