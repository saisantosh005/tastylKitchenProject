import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

import {PaginationContainer, Button, Text} from './styledComponents'

const Pagination = props => {
  const {increasePageCount, decreasePageCount, count, total} = props
  const onIncreaseCount = () => {
    increasePageCount()
  }

  const onDecreaseCount = () => {
    decreasePageCount()
  }

  return (
    <PaginationContainer>
      <Button type="button" onClick={onIncreaseCount}>
        <IoIosArrowBack />
      </Button>
      <Text>
        {count} of {total}
      </Text>
      <Button type="button" onClick={onDecreaseCount}>
        <IoIosArrowForward />
      </Button>
    </PaginationContainer>
  )
}

export default Pagination
