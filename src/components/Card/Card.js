import {
  CardMaiContainer,
  Image,
  DetailsContainers,
  CardName,
  PriceText,
  RatingText,
  RatingContainer,
  Button,
  Icon,
} from './styledComponents'

const Card = props => {
  const {details, button} = props
  const {url, cuisine, name, rating, ratingCount} = details

  return (
    <CardMaiContainer>
      <Image src={url} atl="" />
      <DetailsContainers>
        <CardName>{name}</CardName>
        <PriceText>{cuisine}</PriceText>
        <RatingContainer>
          <RatingText>
            <Icon />
            {rating}
          </RatingText>
          {ratingCount && `(${ratingCount} rating)`}
        </RatingContainer>
        {button && <Button type="button">Add</Button>}
      </DetailsContainers>
    </CardMaiContainer>
  )
}

export default Card
//  <ImageContainer>

//       </ImageContainer>
