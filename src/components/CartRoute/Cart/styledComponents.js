import styled from 'styled-components'

const CartMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const CartListAndFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const CartListContainer = styled.div`
  @media screen and (min-width: 566px) {
    padding: 32px 48px;
    background: #f9fbfe;
  }
`
const CartListAndOrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  flex-grow: 1;
  align-self: center;
  width: 100%;
  //   border: 2px solid red;

  @media screen and (min-width: 800px) {
    width: 70%;
    max-width: 1300px;
  }
  @media screen and (min-width: 566px) {
    width: 100%;
    padding: 34px 40px;
  }
`

const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px dashed #cbd2d9;
  padding-top: 24px;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const OrderSummaryText = styled.p`
  display: flex;
  align-items: center;
  color: #3e4c59;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
`

const Button = styled.button`
  width: 99px;
  height: 32px;
  align-self: flex-end;
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
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`
export {
  CartMainContainer,
  Button,
  CartListContainer,
  CartListAndFooterContainer,
  CartListAndOrderSummaryContainer,
  OrderSummaryContainer,
  TextContainer,
  OrderSummaryText,
}
