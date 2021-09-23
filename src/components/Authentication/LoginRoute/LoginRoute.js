import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginRouteMainContainer,
  LogoAndHeadingContainer,
  Heading,
  LoginFormSection,
  LoginFormMainContainer,
  LabelAndInputContainer,
  Label,
  Input,
  Button,
  Image,
  FormPart,
  LogoContainer,
  Text,
} from './styledComponents'
import Logo from '../../Logo/Logo'

const loginUrl = 'https://apis.ccbp.in/login'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const {history} = this.props
    const details = {username, password}
    const options = {method: 'POST', body: JSON.stringify(details)}
    const response = await fetch(loginUrl, options)
    if (response.ok) {
      const responseData = await response.json()
      Cookies.set('jwtToken', responseData.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({
        errorMessage: 'true',
      })
    }
  }

  renderLoginForm = () => {
    const {username, password, errorMessage} = this.state
    return (
      <LoginFormMainContainer onSubmit={this.onSubmit}>
        <LogoAndHeadingContainer>
          <LogoContainer>
            <Logo
              login
              color="#F7931E"
              imgUrl="https://res.cloudinary.com/delguky36/image/upload/v1630820226/Vector_hrufre.jpg"
            />
          </LogoContainer>
          <Heading>Login</Heading>
        </LogoAndHeadingContainer>
        <FormPart>
          <LabelAndInputContainer>
            <Label>USERNAME</Label>
            <Input
              type="text"
              value={username}
              onChange={this.onChangeUserName}
            />
          </LabelAndInputContainer>
          <LabelAndInputContainer>
            <Label>PASSWORD</Label>
            <Input
              type="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </LabelAndInputContainer>
          {errorMessage && (
            <Text errorText>Please enter a valid Username & Password</Text>
          )}
          <Button type="submit">Sign in</Button>
        </FormPart>
      </LoginFormMainContainer>
    )
  }

  render() {
    return (
      <LoginRouteMainContainer>
        <LoginFormSection>{this.renderLoginForm()}</LoginFormSection>
        <Image
          one
          src="https://res.cloudinary.com/delguky36/image/upload/v1632377835/Rectangle_1457_lmqtr5.png"
          alt=""
        />
        <Image
          two
          src="https://res.cloudinary.com/delguky36/image/upload/v1630816541/Rectangle_1456_1_hfd0ty.png"
          alt=""
        />
      </LoginRouteMainContainer>
    )
  }
}

export default LoginRoute
