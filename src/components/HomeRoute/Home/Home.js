import {Component} from 'react'

import HomeMainContainer from './styledComponents'
import Header from '../../Header/Header'

class Home extends Component {
  state = {}

  render() {
    return (
      <HomeMainContainer>
        <Header home />
      </HomeMainContainer>
    )
  }
}

export default Home
