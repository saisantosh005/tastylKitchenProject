import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const DetailsAndListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 32px;
  border: 2px solid red;
  @media screen and (min-width: 768px) {
    padding: 165px 96px;
  }
`
const DetailsContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
const Heading = styled.h1`
  color: #183b56;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin: 0px;

  @media screen and(min-width:768px) {
    font-size: 32px;
    line-height: 48px;
  }
`
const Description = styled.p`
  color: #64748b;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  margin: 0px;
  @media screen and(min-width) {
    font-size: 16px;
    line-height: 24px;
  }
`

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid green;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
  }
`

const CardLink = styled(Link)`
  text-decoration: none;
`
export {
  HomeMainContainer,
  DetailsAndListContainer,
  DetailsContainer,
  CardListContainer,
  Description,
  Heading,
  CardLink,
}
