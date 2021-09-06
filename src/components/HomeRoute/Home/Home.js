import Cookies from 'js-cookie'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {MdSort} from 'react-icons/md'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import Pagination from '../../Pagination/Pagination'
import Card from '../../Card/Card'
import BannerSection from '../../BannerSection/BannerSection'

import {
  HomeMainContainer,
  DetailsAndListContainer,
  DetailsContainer,
  DetailsAndSortContainer,
  Select,
  Option,
  SortContainer,
  Description,
  Heading,
  CardListContainer,
  CardLink,
  BannerSectionContainer,
} from './styledComponents'

class Home extends Component {
  state = {
    offers: [],
    restaurantsList: [],
    total: 0,
    offsetCount: 0,
    sort: '',
  }

  componentDidMount() {
    this.getOffersList()
    this.getPopularRestaurantsList()
  }

  getOffersList = async () => {
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
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
    if (offsetCount < total - 1) {
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
    if (offsetCount > 0) {
      this.setState(
        prevState => ({
          offsetCount: prevState.offsetCount - 1,
        }),
        this.getPopularRestaurantsList,
      )
    }
  }

  sortProducts = () => {}

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
    return (
      <HomeMainContainer>
        <Header home />
        <BannerSectionContainer>
          <BannerSection detailsList={offers} />
        </BannerSectionContainer>
        <DetailsAndListContainer>
          <DetailsAndSortContainer>
            <DetailsContainer>
              <Heading>Popular Restaurants</Heading>
              <Description>
                Select Your favourite restaurant special dish and make your day
                happy..
              </Description>
            </DetailsContainer>
            <SortContainer>
              <MdSort />
              <Select onChange={this.sortProducts}>
                <Option value="lowest">Lowest </Option>
                <Option value="highest">Highest</Option>
              </Select>
            </SortContainer>
          </DetailsAndSortContainer>
          <CardListContainer>{this.renderCardList()}</CardListContainer>
          {restaurantsList.length !== 0 && (
            <Pagination
              count={offsetCount + 1}
              total={total}
              increasePageCount={this.increasePageCount}
              decreasePageCount={this.decreasePageCount}
            />
          )}
        </DetailsAndListContainer>
        <Footer />
      </HomeMainContainer>
    )
  }
}

export default Home
