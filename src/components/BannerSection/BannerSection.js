import Slider from 'react-slick'
import {v4 as uuid4} from 'uuid'
import {EachSection, Image} from './styledComponents'

const BannerSection = props => {
  const {detailsList} = props
  const renderSliderList = () =>
    detailsList.map(eachItem => (
      <EachSection key={uuid4()} id={eachItem.id}>
        <Image src={eachItem.url} />
      </EachSection>
    ))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <>
      <Slider {...settings}>{renderSliderList()}</Slider>
    </>
  )
}

export default BannerSection
