import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SpecificRouteMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BannerPart = styled.div`
  color: #ffffff;
  background: #333333;
`

const CardLink = styled(Link)`
  text-decoration: none;
`

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 566px) {
    width: 100%;
    padding-top: 48px;
  }
`
const DetailsAndListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 24px 32px;
  flex-grow: 1;
  align-self: center;

  @media screen and (min-width: 800px) {
    padding: 165px 96px;
    max-width: 1500px;
  }
  @media screen and (min-width: 566px) {
    width: 80%;
    padding: 34px 68px;
  }
`
export {
  SpecificRouteMainContainer,
  BannerPart,
  CardListContainer,
  CardLink,
  DetailsAndListContainer,
}
