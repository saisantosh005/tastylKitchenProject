import React from 'react'

const ProductContext = React.createContext({
  cartList: [],
  removeFromCart: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
  onAddToCart: () => {},
})

export default ProductContext
