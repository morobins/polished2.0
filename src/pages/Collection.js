import React, { Component } from 'react'
import { Container, Header, Button, Form, TextArea, Label } from 'semantic-ui-react'
import API from "../utils/API"
import Card from "../components/Card/Card"



class Collection extends React.Component {
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


  render () {
    return (
      <Container>
        <Header className="title">Your Collection</Header>

        {this.state.products.map(product => (
          <Card
          key={product.id}
          id={product.id}
          productName={product.product_name}
          brand={product.brand}
        />
        ))}
      </Container>
    )
  }
}

export default Collection;