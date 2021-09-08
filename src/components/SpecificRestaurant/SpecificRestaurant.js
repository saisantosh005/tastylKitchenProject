import Cookies from 'js-cookie'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {BiRupee} from 'react-icons/bi'
import Loader from 'react-loader-spinner'

import Header from '../Header/Header'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'

import {
  SpecificRouteMainContainer,
  BannerPart,
  CardListContainer,
  DetailsAndListContainer,
  CardMaiContainer,
  Image,
  DetailsContainers,
  CardName,
  PriceText,
  RatingContainer,
  Icon,
  RatingText,
  SmallText,
  RatingAndPriceContainer,
  BannerAndListContainer,
} from './styledComponents'
import ProductContext from '../../Context/ProuductContext/ProuductContext'

const apiConstants = {
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SpecificRoute extends Component {
  state = {
    apiStatus: apiConstants.initial,
    itemsList: [],
    details: {
      url: '',
      name: '',
      cuisine: '',
      location: '',
      rating: '',
      reviewsCount: '',
      costForTwo: '',
    },
  }

  componentDidMount() {
    this.getRestaurantItemsList()
  }

  getRestaurantItemsList = async () => {
    this.setState({
      apiStatus: apiConstants.inProgress,
    })
    const {match} = this.props
    const {id} = match.params
    const url = `https://apis.ccbp.in/restaurants-list/${id}`
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const responseData = await response.json()
      this.setState({
        details: {
          url: responseData.image_url,
          name: responseData.name,
          cuisine: responseData.cuisine,
          location: responseData.location,
          rating: responseData.rating,
          reviewsCount: responseData.reviews_count,
          costForTwo: responseData.cost_for_two,
        },
        itemsList: responseData.food_items.map(eachItem => ({
          id: eachItem.id,
          name: eachItem.name,
          url: eachItem.image_url,
          price: eachItem.cost,
          rating: eachItem.rating,
          quantity: 0,
        })),
      })
      this.setState({
        apiStatus: apiConstants.success,
      })
    }
  }

  renderCardList = (onAddClick, cartList, onDecrement, onIncrement) => {
    const {itemsList} = this.state
    const updatedList = itemsList.map(eachItem => {
      const index = cartList.findIndex(
        each => each.name.toUpperCase() === eachItem.name.toUpperCase(),
      )
      if (index !== -1) {
        const quantityValue = cartList[index].quantity
        return {...eachItem, quantity: quantityValue}
      }
      return eachItem
    })
    return updatedList.map(eachItem => (
      <Card
        details={eachItem}
        button
        key={uuidv4()}
        buttonCLickHandler={onAddClick}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    ))
  }

  renderBanner = () => {
    const {details} = this.state
    const {
      url,
      cuisine,
      price,
      name,
      rating,
      ratingCount,
      location,
      costForTwo,
    } = details

    return (
      <CardMaiContainer>
        <Image src={url} atl="" />
        <DetailsContainers>
          <CardName>{name}</CardName>
          {cuisine && <PriceText>{cuisine}</PriceText>}
          {ratingCount && <PriceText>{ratingCount}</PriceText>}
          <RatingAndPriceContainer>
            <RatingContainer one>
              <RatingText>
                <Icon />
                {rating}
              </RatingText>
              <SmallText>{costForTwo}</SmallText>
            </RatingContainer>
            <RatingContainer>
              <RatingText>
                <BiRupee />
                {costForTwo}
              </RatingText>
              <SmallText>Cost for Two</SmallText>
            </RatingContainer>
          </RatingAndPriceContainer>
        </DetailsContainers>
      </CardMaiContainer>
    )
  }

  renderSpin = () => (
    <div className="products-loader-container">
      <Loader type="TailSpin" color="#F7931E" height="50" width="50" />
    </div>
  )

  renderBannerAndItemsList = (
    onAddClick,
    cartList,
    onDecrement,
    onIncrement,
  ) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return (
          <>
            <BannerPart>{this.renderBanner()}</BannerPart>
            <DetailsAndListContainer>
              <CardListContainer>
                {this.renderCardList(
                  onAddClick,
                  cartList,
                  onDecrement,
                  onIncrement,
                )}
              </CardListContainer>
            </DetailsAndListContainer>
          </>
        )
      case apiConstants.failure:
        return <div>Failure</div>
      case apiConstants.inProgress:
        return <>{this.renderSpin()}</>
      default:
        return null
    }
  }

  render() {
    const {itemsList} = this.state
    return (
      <ProductContext.Consumer>
        {value => {
          const {onAddToCart, cartList, onDecrement, onIncrement} = value
          const onAddClick = name => {
            const product = itemsList.filter(
              eachItem => eachItem.name.toUpperCase() === name.toUpperCase(),
            )
            onAddToCart(product[0])
          }
          return (
            <SpecificRouteMainContainer>
              <Header home />
              <BannerAndListContainer>
                {this.renderBannerAndItemsList(
                  onAddClick,
                  cartList,
                  onDecrement,
                  onIncrement,
                )}
              </BannerAndListContainer>
              <Footer />
            </SpecificRouteMainContainer>
          )
        }}
      </ProductContext.Consumer>
    )
  }
}
export default SpecificRoute
