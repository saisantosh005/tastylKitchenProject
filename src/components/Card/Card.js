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
  QuantityButtonContainer,
  Text,
} from './styledComponents'

const Card = props => {
  const {
    details,
    button,
    buttonCLickHandler,
    cart,
    onDecrement,
    onIncrement,
  } = props
  const {
    id,
    url,
    cuisine,
    price,
    name,
    rating,
    ratingCount,
    location,
    costForTwo,
    quantity,
  } = details

  const onButtonClick = () => {
    buttonCLickHandler(name)
  }

  const increaseCount = () => {
    // console.log(quantity)
    onIncrement(name)
  }

  const decreaseCount = () => {
    onDecrement(name)
  }

  return (
    <CardMaiContainer cart={cart}>
      <Image cart={cart} src={url} atl="" />
      <DetailsContainers cart={cart}>
        <CardName>{name}</CardName>
        {cuisine && <PriceText>{cuisine}</PriceText>}
        {price && <PriceText>{price}</PriceText>}
        <RatingContainer cart={cart}>
          <RatingText>
            <Icon />
            {rating}
          </RatingText>
          {ratingCount && `(${ratingCount} rating)`}
        </RatingContainer>

        {button && quantity > 0 && (
          <QuantityButtonContainer>
            <Button type="button" onClick={decreaseCount} one>
              -
            </Button>
            <Text>{quantity}</Text>
            <Button type="button" onClick={increaseCount} one>
              +
            </Button>
          </QuantityButtonContainer>
        )}
        {button && quantity === 0 && (
          <>
            <Button type="button" onClick={onButtonClick}>
              Add
            </Button>
          </>
        )}
      </DetailsContainers>
    </CardMaiContainer>
  )
}

export default Card
//  <ImageContainer>

//       </ImageContainer>
