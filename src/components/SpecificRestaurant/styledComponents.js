import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

import styled from 'styled-components'

const SpecificRouteMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const BannerAndListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
const BannerPart = styled.div`
  height: 188px;
  background: #333333;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 344px;
  }
`

const CardMaiContainer = styled.div`
  display: flex;
  align-self: center;
  height: 100%;
  width: 100%;
  max-width: 1400px;
  @media screen and (min-width: 768px) {
    align-items: center;
    width: 70%;
  }
`

const Image = styled.img`
  min-width: 150px;
  max-width: 170px;
  height: 160px;
  border-bottom-right-radius: 133px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    min-width: 455px;
    max-width: 455px;
    height: 280px;
    border-radius: 8px;
  }
`

const DetailsContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CardName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
  margin-bottom: ${props => (props.banner ? 8 : 4)}px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  }
`
const RatingAndPriceContainer = styled.div`
  display: flex;
`
const PriceText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #e2e8f0;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  border-right: ${props => (props.one ? '1px solid #E2E8F0' : 'none')};

  padding-right: 16px;
  margin: 8px 0px;
  margin-left: ${props => (props.one ? 0 : 16)}px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 16px;
    padding-right: 32px;
    margin-left: ${props => (props.one ? 0 : 32)}px;
  }
`

const Icon = styled(AiFillStar)`
  color: #ffffff;
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
    font-size: 14px;
    line-height: 18px;
  }
`

const SmallText = styled.p`
  color: #e2e8f0;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`
const CardLink = styled(Link)`
  text-decoration: none;
`

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding-top: 32px;
  align-self: center;

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
  SmallText,
  RatingAndPriceContainer,
  BannerAndListContainer,
}
