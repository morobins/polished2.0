import React, { Component } from 'react'
import { Container, Header, Button, Card } from 'semantic-ui-react'
import API from "../utils/API"
import Wrapper from "../components/Wrapper/Wrapper"
import "../../src/Collection.css"




class Collection extends Component {
  //declare state
  state = {
      products: []
  }

  componentDidMount() {
    this.getProds();
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