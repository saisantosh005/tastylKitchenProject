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
    onIncrement(name)
  }

  const decreaseCount = () => {
    onDecrement(name)
  }

  const renderButtonSection = () => (
    <>
      {button && quantity > 0 && (
        <QuantityButtonContainer>
          <Button type="button" onClick={decreaseCount} one="true">
            -
          </Button>
          <Text>{quantity}</Text>
          <Button type="button" onClick={increaseCount} one="true">
            +
          </Button>
        </QuantityButtonContainer>
      )}
    </>
  )

  const renderDetailsContainer = () => (
    <DetailsContainers cart={cart}>
      <CardName cart={cart}>{name}</CardName>
      {cuisine && <PriceText>{cuisine}</PriceText>}
      {price && (
        <PriceText cart={cart}>
          <BiRupee />
          {price}
        </PriceText>
      )}
      <RatingContainer cart={cart}>
        <RatingText>
          <Icon />
          {rating}
        </RatingText>
        {ratingCount && `(${ratingCount} rating)`}
      </RatingContainer>
      {renderButtonSection()}
      {button && quantity === 0 && (
        <>
          <Button type="button" onClick={onButtonClick}>
            Add
          </Button>
        </>
      )}
    </DetailsContainers>
  )

  return (
    <CardMaiContainer cart={cart}>
      <Image cart={cart} src={url} atl="" />
      {renderDetailsContainer()}
    </CardMaiContainer>
  )
}

export default Card
