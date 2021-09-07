import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const BannerSectionContainer = styled.div`
  align-self: center;
  width: 100%;
  margin: 10px;
  text-align: ${props => (props.spin ? 'center' : 'none')};

  @media screen and (min-width: 800px) {
    padding: 165px 96px;
    max-width: 1300px;
  }
  @media screen and (min-width: 566px) {
    width: 80%;
    padding: 34px 68px;
  }
`

const DetailsAndListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 24px 32px;
  flex-grow: 1;
  width: 100%;

  text-align: ${props => (props.spin ? 'center' : 'none')};
  @media screen and (min-width: 800px) {
    padding: 165px 96px;
    max-width: 1350px;
  }
  @media screen and (min-width: 566px) {
    width: 100%;
    padding: 34px 40px;
  }
`
const DetailsContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
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
  @media screen and (min-width: 768px;) {
    font-size: 16px;
    line-height: 24px;
  }
`

const DetailsAndSortContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cbd2d9;
  padding-bottom: 24px;
  width: 100%;
  //   max-width: 1300px;

  @media screen and (min-width: 768px;) {
    flex-direction: row;
  }
`

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 16px;
`

const Select = styled.select`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`

const Option = styled.option`
  font-size: 12px;
  width: 100px;
  border-radius: 8px;
  margin: 18px 20px;
`

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 566px) {
    width: 100%;
    padding-top: 48px;
  }
`

const CardLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  max-width: 380px;

  @media screen and (min-width: 566px) {
    margin-right: 28px;
  }
`
export {
  HomeMainContainer,
  BannerSectionContainer,
  DetailsAndListContainer,
  DetailsContainer,
  CardListContainer,
  Description,
  Heading,
  CardLink,
  DetailsAndSortContainer,
  Select,
  Option,
  SortContainer,
}
