import styled from 'styled-components'

const CartMainContainer = styled.div``
const Image = styled.img`
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

const NoCartDetailsContainer = styled.div`
  text-align: center;
  padding: 65px;
  @media screen and (min-width: 768px) {
  }
`

const Heading = styled.h1`
  color: #1e293b;
  text-align: center;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  margin: 0px;
  margin-top: 32px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
    margin-top: 52px;
  }
`

const Description = styled.p`
  color: #64748b;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const Button = styled.button`
  color: #ffffff;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  width: 93px;
  height: 32px;
  background: #f7931e;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`

export {
  CartMainContainer,
  Image,
  NoCartDetailsContainer,
  Heading,
  Description,
  Button,
}
