import {
  CardMaiContainer,
  ImageContainer,
  Image,
  DetailsContainers,
  CardName,
  PriceText,
  RatingContainer,
  Button,
} from './styledComponents'

const Card = props => {
  const {details} = props
  const {url, id, cuisine, name, rating, ratingCount} = details

  return (
    <CardMaiContainer>
      <Image src={url} atl="" />

      <DetailsContainers>
        <CardName>{name}</CardName>
        <PriceText>{cuisine}</PriceText>
        <RatingContainer>
          {rating} ({ratingCount} rating)
        </RatingContainer>
        <Button type="button">Add</Button>
      </DetailsContainers>
    </CardMaiContainer>
  )
}

export default Card
//  <ImageContainer>

//       </ImageContainer>
