import {Component} from 'react'

import HomeMainContainer from './styledComponents'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

class Home extends Component {
  state = {}

  render() {
    return (
      <HomeMainContainer>
        <Header home />
        <Footer />
      </HomeMainContainer>
    )
  }
}

export default Home
