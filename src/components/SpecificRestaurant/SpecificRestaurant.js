import Cookies from 'js-cookie'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

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
} from './styledComponents'

class SpecificRoute extends Component {
  state = {
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
        })),
      })
      console.log(responseData)
    }
  }

  renderCardList = () => {
    const {itemsList} = this.state
    return itemsList.map(eachItem => (
      <Card details={eachItem} button key={uuidv4()} />
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
          {price && <PriceText>{price}</PriceText>}
          <RatingContainer>
            <RatingText>
              <Icon />
              {rating}
            </RatingText>
            {ratingCount && `(${ratingCount} rating)`}
          </RatingContainer>
        </DetailsContainers>
      </CardMaiContainer>
    )
  }

  render() {
    const {details} = this.state
    return (
      <SpecificRouteMainContainer>
        <Header home="true" />
        <BannerPart>{this.renderBanner()}</BannerPart>
        <DetailsAndListContainer>
          <CardListContainer>{this.renderCardList()}</CardListContainer>
        </DetailsAndListContainer>
        <Footer />
      </SpecificRouteMainContainer>
    )
  }
}
export default SpecificRoute
