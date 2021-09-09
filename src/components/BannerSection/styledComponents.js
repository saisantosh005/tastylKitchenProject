import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 188px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 321px;
    object-fit: cover;
    border-radius: 8px;
  }
`
const EachSection = styled.div`
  object-fit: contain;
`
export {EachSection, Image}
