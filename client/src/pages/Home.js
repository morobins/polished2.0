import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import title from "../images/title.jpg";
import {Redirect, Link} from 'react-router-dom';



class LoginForm extends Component {
  state = {
    isLoggedIn: false,
    email: "",
    password: ""
  }

  // componentDidMount() {
  //   API.checkLogin()
  //     .then(res=> {
  //       if (!res.data) {
  //         this.setState({
  //           isLoggedIn: false
  //         })
  //       } else {
  //         this.setState({
  //           isLoggedIn: true
  //         })
  //       }
  //     })
  // }



  render () {

    if (this.state.loggedIn) {
      return <Redirect to="/collection"/>
    }

    return (
      <div className='login-form'>
      <h1> HOME </h1>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        {/* <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style> */}
        {/* <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
    
                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/signup'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid> */}
      </div>
    )
  }
}

export default LoginForm