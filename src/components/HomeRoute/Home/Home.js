import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import {
  HomeMainContainer,
  DetailsAndListContainer,
  DetailsContainer,
  Description,
  Heading,
} from './styledComponents'
import Pagination from '../../Pagination/Pagination'

class Home extends Component {
  state = {
    offers: [],
  }

  componentDidMount() {
    this.getPopularRestaurantsList()
  }

  getPopularRestaurantsList = async () => {
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

  renderRestaurantList = () => {}

  render() {
    const {offers} = this.state
    console.log(offers)

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
          <Pagination />
        </DetailsAndListContainer>
        <Footer />
      </HomeMainContainer>
    )
  }
}

export default Home
