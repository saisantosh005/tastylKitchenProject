import {BiRupee} from 'react-icons/bi'
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
  const {details, button, banner} = props
  const {
    url,
    cuisine,
    price,
    name,
    rating,
    ratingCount,
    location,
    costForTwo,
  } = details

  return (
    <CardMaiContainer>
      <Image src={url} atl="" />
      <DetailsContainers>
        <CardName>{name}</CardName>
        {cuisine && <PriceText>{cuisine}</PriceText>}
        {price && <PriceText>{price}</PriceText>}
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
