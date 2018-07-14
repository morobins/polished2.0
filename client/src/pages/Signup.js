import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Header, Segment, Button, Form, Message } from 'semantic-ui-react'
import API from "../utils/API";


class Signup extends Component {
  state = {
    success: false,
    username: "",
    password: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  // Method to register a new user
  register = (e) => {
    e.preventDefault();
    API.register({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data);
        this.setState({ success: true })

      })
    // .catch(err => console.log(err.response.data));
  }

  render() {
    // If Signup was a success, take them to the Login page
    if (this.state.success) {
      return <Redirect to="/login" />
    }

    return (

      <div className='login-form' >
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='pink' textAlign='center'>
              Get Polished!
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' name="username" type="text"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  label='Email' placeholder='beauty@full.com' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  placeholder="Password"
                  label='Password'
                />
                <Message
                  error
                  header='Action Forbidden'
                  content='You can only sign up for an account once with a given e-mail address.'
                />
                <Button color='pink' fluid size='large' onClick={this.register}>
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Signup;