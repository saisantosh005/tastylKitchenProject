import {Component} from 'react'
import {Cookies} from 'js-cookie'

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
} from './styledComponents'

const loginUrl = ''

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
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
    const response = await fetch(loginUrl)

    if (response.ok) {
      const responseData = await response.json()
      Cookies.set('jwtToken', response.responseData)
    }
  }

  renderLoginForm = () => {
    const {username, password} = this.state
    return (
      <LoginFormMainContainer onSubmit={this.onSubmit}>
        <LogoAndHeadingContainer>
          <Heading>Sign in</Heading>
        </LogoAndHeadingContainer>
        <FormPart>
          <LabelAndInputContainer>
            <Label>USERNAME</Label>
            <Input value={username} onChange={this.onChangeUserName} />
          </LabelAndInputContainer>
          <LabelAndInputContainer>
            <Label>PASSWORD</Label>
            <Input value={password} onChange={this.onChangePassword} />
          </LabelAndInputContainer>
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
          src="https://res.cloudinary.com/delguky36/image/upload/v1630816541/Rectangle_1456_1_hfd0ty.png"
          alt=""
        />
      </LoginRouteMainContainer>
    )
  }
}

export default LoginRoute