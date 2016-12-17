import React from 'react'
import {Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button} from 'react-bootstrap'
import timezones from '../../data/timezones'
import map from 'lodash/map'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }

    this.setUsername = this.setUsername.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setPasswordConfirmation = this.setPasswordConfirmation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  setEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  setPasswordConfirmation(e) {
    this.setState({
      passwordConfirmation: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    console.log(this.state.username.value)
    console.log(this.state.email.value)
    console.log(this.state.password.value)
    console.log(this.state.passwordConfirmation.value)
  }

  render() {
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    )
    return (
      <Form onSubmit={this.onSubmit} horizontal>
        <h1>Join Workouts!</h1>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl
              inputRef={ value => { this.state.username = value }}
              onChange={this.setUsername}
              type="username"
              placeholder="Username" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              inputRef={ value => { this.state.email = value }}
              onChange={this.setUsername}
              type="email"
              placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              inputRef={ value => { this.state.password = value }}
              onChange={this.setPassword}
              type="password"
              placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Confirm Password
          </Col>
          <Col sm={10}>
            <FormControl
              inputRef={ value => { this.state.passwordConfirmation = value }}
              onChange={this.setPassword}
              type="password"
              placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Select a Timezone
          </Col>
          <Col sm={10}>
            <FormControl
              inputRef={ value => { this.state.passwordConfirmation = value }}
              onChange={this.setPassword}
              componentClass="select">
              <option value="select">Select a timezone...</option>
              {options}
              </FormControl>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign Up
            </Button>
          </Col>
        </FormGroup>

      </Form>
    )
  }
}

export default SignupForm
