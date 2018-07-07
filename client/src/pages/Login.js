import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import title from "../images/title.jpg";
import {Redirect} from 'react-router-dom';
import API from "../utils/API";




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

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({username: this.state.username, password: this.state.password})
      .then(res => {
        console.log(res.data);
        this.setState({isLoggedIn: res.data})

      })
      .catch(err => console.log(err.response));
  }


  render () {

    if (this.state.isLoggedIn) {
      return <Redirect to="/collection"/>
    }

    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input 
                fluid icon='user' iconPosition='left' 
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  className="form-control"
                />
    
                <Button color='teal' fluid size='large' type="submit" onClick={this.login}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              {/* LINK TO SIGN UP/ REGISTER PAGE!!! */}
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginForm