import Cookies from 'js-cookie'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import {
  HomeMainContainer,
  DetailsAndListContainer,
  DetailsContainer,
  Description,
  Heading,
  CardListContainer,
  CardLink,
} from './styledComponents'
import Pagination from '../../Pagination/Pagination'
import Card from '../../Card/Card'

class Home extends Component {
  state = {
    offers: [],
    restaurantsList: [],
    total: 0,
    offsetCount: 0,
  }

  componentDidMount() {
    this.getOffersList()
    this.getPopularRestaurantsList()
  }

  getOffersList = async () => {
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    // https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const responseData = await response.json()

    this.setState({
      offers: responseData.offers.map(eachItem => ({
        id: eachItem.id,
        url: eachItem.image_url,
      })),
    })
  }

  getPopularRestaurantsList = async () => {
    const {offsetCount} = this.state
    const offset = offsetCount * 10
    const limit = 10
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}`

    const jwtToken = Cookies.get('jwtToken')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    this.setState({
      restaurantsList: responseData.restaurants.map(eachItem => ({
        id: eachItem.id,
        cuisine: eachItem.cuisine,
        name: eachItem.name,
        url: eachItem.image_url,
        rating: eachItem.user_rating.rating,
        ratingCount: eachItem.user_rating.total_reviews,
      })),
      total: responseData.total / 10,
    })
  }

  increasePageCount = () => {
    const {offsetCount, total} = this.state
    if (offsetCount < total) {
      this.setState(
        prevState => ({
          offsetCount: prevState.offsetCount + 1,
        }),
        this.getPopularRestaurantsList,
      )
    }
  }

  decreasePageCount = () => {
    const {offsetCount} = this.state
    if (offsetCount > 1) {
      this.setState(
        prevState => ({
          offsetCount: prevState.offsetCount - 1,
        }),
        this.getPopularRestaurantsList,
      )
    }
  }

  renderCardList = () => {
    const {restaurantsList} = this.state
    return restaurantsList.map(eachItem => (
      <CardLink to={`${eachItem.id}`} key={uuidv4()}>
        <Card details={eachItem} />
      </CardLink>
    ))
  }

  render() {
    const {offers, restaurantsList, offsetCount, total} = this.state
    console.log(offers, restaurantsList, total)

    return (
      <HomeMainContainer>
        <Header home />
        <DetailsAndListContainer>
          <DetailsContainer>
            <Heading>Popular Restaurants</Heading>
            <Description>
              Select Your favourite restaurant special dish and make your day
              happy..
            </Description>
          </DetailsContainer>
          <CardListContainer>{this.renderCardList()}</CardListContainer>
          <Pagination
            count={offsetCount}
            total={total}
            increasePageCount={this.increasePageCount}
            decreasePageCount={this.decreasePageCount}
          />
        </DetailsAndListContainer>
        <Footer />
      </HomeMainContainer>
    )
  }
}

export default Home
