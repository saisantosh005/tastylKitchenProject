import {AiFillStar} from 'react-icons/ai'
import styled from 'styled-components'

const CardMaiContainer = styled.div`
  align-self: center;
  display: flex;
  margin-bottom: 24px;
  flex-grow: 1;
  min-width: 100%;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    min-width: ${props => (props.cart ? '' : 380)}px;
    max-width: ${props => (props.cart ? 1000 : 380)}px;
  }
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
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 100px;
    width: ${props => (props.cart ? 136 : 10)}px;
  }
`

const DetailsContainers = styled.div`
  @media screen and (min-width: 768px) {
    display: ${props => props.cart && 'flex'};
    align-items: center;
    width: 100%;
    justify-content: ${props => props.cart && 'space-between'};
  }
`

const CardName = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: #334155;
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
    width: ${props => (props.cart ? 180 : '')}px;
  }
`

const PriceText = styled.p`
  display: flex;
  align-items: center;

  order: 1;
  color: #334155;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin: 0px;

  @media screen and (min-width: 768px) {
    justify-content: ${props => (props.cart ? 'flex-end' : '')}px;
    font-size: 18px;
  }
`

const RatingContainer = styled.div`
  display: flex;
  color: #64748b;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin: 8px 0px;
  @media screen and (min-width: 768px) {
    display: ${props => props.cart && 'none'};
  }
`

const Icon = styled(AiFillStar)`
  color: #ffcc00;
  margin-right: 4px;
`

const RatingText = styled.p`
  color: #1e293b;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.one ? 18 : 42)}px;
  height: ${props => (props.one ? 18 : 23.59)}px;
  color: ${props => (props.one ? '#3E4C59' : '#ffa412')};
  border: 1px solid ${props => (props.one ? '#3E4C59' : '#ffa412')};
  box-sizing: border-box;
  border-radius: ${props => (props.one ? 2 : 5.7931)}px;
  background: none;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background: ${props => (props.one ? '#3E4C59' : '#ffa412')};
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: ${props => (props.one ? 18 : 58)}px;
    height: ${props => (props.one ? 18 : 32)}px;
    font-size: 12px;
    line-height: 16px;
  }
`

const QuantityButtonContainer = styled.div`
  display: flex;
  align-items: center;
`
const Text = styled.p`
  margin: 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 0px 10px;
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
  QuantityButtonContainer,
  Text,
}
