import styled from 'styled-components'

const CardMaiContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`

const ImageContainer = styled.div`
  width: 160px;
  height: 100px;
`

const Image = styled.img`
  min-width: 160px;
  height: 100px;
  border-radius: 8px;
  margin-right: 16px;
`

const DetailsContainers = styled.div``

const CardName = styled.p`
  color: #334155;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  margin: 0px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const PriceText = styled.p`
  color: #334155;
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
  color: #64748b;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const Button = styled.button`
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export {
  CardMaiContainer,
  ImageContainer,
  Image,
  DetailsContainers,
  CardName,
  PriceText,
  RatingContainer,
  Button,
}
