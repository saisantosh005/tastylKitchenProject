import styled from 'styled-components'

const LoginRouteMainContainer = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100vh;
  @media screen and (min-width: 658px) {
    justify-content: space-around;
  }
`
const LoginFormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
const LoginFormMainContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 24px;

  @media screen and (min-width: 768px) {
    width: 456px;
    height: 523px;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 48px;
  }
`

const LogoAndHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.h1`
  align-self: flex-start;
  color: #0f172a;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;

  @media screen and (min-width: 768px) {
    align-self: center;
  }
`
const FormPart = styled.div``
const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`
const Label = styled.label`
  color: #475569;
  font-family: ' DM Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (min-width: 658px) {
    margin-bottom: 8px;
  }
`
const Input = styled.input`
  max-width: 360px;
  height: 40px;
  background: #e2e8f0;
  border-radius: 2px;

  color: #64748b;
  font-family: ' DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  border: none;
  outline: none;
  padding: 8px 16px;

  @media screen and (min-width: 658px) {
    padding: 8px 16px;
  }
`

const Button = styled.button`
  color: #ffffff;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  height: 40px;
  background: #f7931e;
  border-radius: 8px;
  border: none;
  outline: none;
`

const Image = styled.img`
  display: none;

  @media screen and (min-width: 658px) {
    display: flex;
    width: 50%;
    height: 100vh;
  }
`

export {
  LoginRouteMainContainer,
  LoginFormSection,
  LogoAndHeadingContainer,
  Heading,
  FormPart,
  Image,
  LoginFormMainContainer,
  LabelAndInputContainer,
  Label,
  Input,
  Button,
}
