import styled from 'styled-components'

const CardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 65px;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
  }
`
const Image = styled.img`
  @media screen and (min-width: 768px) {
    width: ${props => props.status !== 'success' && 400} px;
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
  text-align: center;
  padding: 8px 16px;
  //   align-self: flex-end;
  color: #ffffff;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  background: #f7931e;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 312px;
  height: 320px;
  border-radius: 12px;
  box-shadow: 0px 4.00734px 40.0734px rgba(23, 31, 70, 0.16);
  @media screen and (min-width: 768px) {
    width: 546px;
    height: 376px;
  }
`
export {
  CardMainContainer,
  NoCartDetailsContainer,
  Image,
  Heading,
  Description,
  Button,
  SuccessContainer,
}
