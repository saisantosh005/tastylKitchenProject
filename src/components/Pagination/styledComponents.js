import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 24px;
  height: 24px;
  background: none;
  border: 1px solid #334155;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`
const Text = styled.p`
  color: #334155;
  font-family: Bree Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 0px 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
  }
`

export {PaginationContainer, Button, Text}
