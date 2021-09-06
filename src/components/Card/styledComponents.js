import {AiFillStar} from 'react-icons/ai'
import styled from 'styled-components'

const CardMaiContainer = styled.div`
  align-self: center;
  display: flex;
  margin-bottom: 24px;
  border: 2px solid red;
  width: 380px;
  max-width: 1200px;
`

const ImageContainer = styled.div`
  width: 160px;
  height: 100px;
`

const Image = styled.img`
  min-width: 160px;
  max-width: 160px;
  height: 100px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    height: 100px;
    border-radius: 8px;
  }
`

const DetailsContainers = styled.div``

const CardName = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: '#334155';
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  margin: 0px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const PriceText = styled.p`
  color: '#334155';
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
  color: '#64748b';
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 8px 0px;
`

const Icon = styled(AiFillStar)`
  color: #ffcc00;

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

const Button = styled.button`
  width: 42px;
  height: 23.59px;
  color: #ffa412;
  border: 1.44828px solid #ffa412;
  box-sizing: border-box;
  border-radius: 5.7931px;
  background: none;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 58px;
    height: 32px;
    font-size: 12px;
    line-height: 16px;
  }
`

export {
  CardMaiContainer,
  ImageContainer,
  Icon,
  Image,
  DetailsContainers,
  CardName,
  PriceText,
  RatingText,
  RatingContainer,
  Button,
}
