import styled from 'styled-components'

const FooterMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0f172a;
  padding: 45px;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`
const FooterDescription = styled.p`
  text-align: center;
  color: #ffffff;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`
const IconContainer = styled.div`
  display: flex;
`
const Icon = styled.div`
  font-size: 25px;
  color: #ffffff;
  margin: 14px;

  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`

export {FooterMainContainer, FooterDescription, IconContainer, Icon}
