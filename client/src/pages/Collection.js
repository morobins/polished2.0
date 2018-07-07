import React, { Component } from 'react'
import { Container, Header, Button, Card } from 'semantic-ui-react'
import API from "../utils/API"
import Wrapper from "../components/Wrapper/Wrapper"
import "../../src/Collection.css"
import {Redirect} from 'react-router-dom';



class Collection extends Component {
  //declare state
  state = {
    isLoggedIn: true,
    username: "",
    products: []
  }

  componentDidMount() {
    this.loginCheck();
    this.getProds();
  }

  // Check login status
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => this.setState({
        isLoggedIn: res.data.isLoggedIn, username: res.data.username
      }))
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
  }

getProds = () => {
  API.getProduct()
    .then(res => {
      console.log(res)
      this.setState({
        products: res.data
      })
    })
    .catch(err => console.log(err));
}


render  () {

     // If user isn't logged in, don't let them see this page
     if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />
    }

  return (
    <Container>
    <Header className="title">Your Collection</Header>
  <Wrapper>
    {this.state.products.map(product => (
    <Card
      image={product.photo}
      meta={product.color}
      description={product.brand}
      
      />
    ))}
    </Wrapper>
  </Container>

  )
}


}


export default Collection;



// render () {
//   return (
//     <Container>
      

//       {this.state.products.map(product => (
//         <Card
//         key={product.id}
//         id={product.id}
//         photo={product.photo}
//         color={product.color}
//         brand={product.brand}
//       />
//       ))}
//     </Container>
//   )
// }