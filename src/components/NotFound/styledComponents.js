import styled from 'styled-components'

const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Image = styled.img`
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

const DetailsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 171px;
  }
`
const Heading = styled.h1`
  color: #1e293b;
  text-align: center;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`
const Description = styled.p`
  color: #475569;
  text-align: center;
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`
const Button = styled.button`
  color: #ffffff;
  background: #f7931e;
  border-radius: 8px;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 8px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 44px;
  }
`

export {
  NotFoundMainContainer,
  Image,
  DetailsContainer,
  Heading,
  Description,
  Button,
}
