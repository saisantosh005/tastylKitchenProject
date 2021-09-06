import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

import styled from 'styled-components'

const SpecificRouteMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BannerPart = styled.div`
  height: 188px;
  background: #333333;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    height: 344px;
  }
`

const CardMaiContainer = styled.div`
  display: flex;
  align-self: center;
  margin-bottom: 24px;
  max-width: 1200px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

const Image = styled.img`
  min-width: 160px;
  max-width: 160px;
  height: 100px;
  border-radius: ${props => (props.banner ? 0 : 8)}px;
  border-bottom-right-radius: ${props => (props.banner ? 133 : 'none')}px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    min-width: ${props => (props.banner ? 445 : 160)}px;
    max-width: ${props => (props.banner ? 445 : 160)}px;
    height: ${props => (props.banner ? 280 : 100)}px;
    border-radius: 8px;
  }
`

const DetailsContainers = styled.div``

const CardName = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: ${props => (props.banner ? '#ffffff' : '#334155')};
  font-family: ${props => (props.banner ? 'Roboto' : 'DM Sans')};
  font-style: normal;
  font-weight: ${props => (props.banner ? 500 : 'bold')};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  margin: 0px;
  margin-bottom: ${props => (props.banner ? 8 : 4)}px;
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.banner ? 16 : 18)}px;
  }
`

const PriceText = styled.p`
  color: ${props => (props.banner ? '#ffffff' : '#334155')};
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin: 0px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.banner ? 'column' : 'row')};
  //   align-items: flex-start;
  color: ${props => (props.banner ? '#E2E8F0' : '#64748b')};
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 8px 0px;
`

const Icon = styled(AiFillStar)`
  color: ${props => (props.banner ? '#ffffff' : '#ffcc00')};

  margin-right: 4px;
`

const RatingText = styled.p`
  color: '#1e293b';
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin: 0px;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
  }
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
  CardMaiContainer,
  Image,
  DetailsContainers,
  CardName,
  PriceText,
  RatingContainer,
  Icon,
  RatingText,
}
