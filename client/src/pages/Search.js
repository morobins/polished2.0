import React, { Component } from 'react'
import { Container, Header, Button, Form, Card, Image } from 'semantic-ui-react'
import API from "../utils/API"
import Wrapper from "../components/Wrapper";
import { Redirect } from 'react-router-dom';

const options = [

  { key: '', text: 'Select a category', value: '' },
  { key: 'n', text: 'Nails', value: 'Nails' },
  { key: 'l', text: 'Lips', value: 'Lips' },
  { key: 'f', text: 'Face', value: 'Face' },
  { key: 'm', text: 'Mascara', value: 'Mascara' },
  { key: 'e', text: 'Eyes', value: 'Eyes' },
  { key: 'b', text: 'Brows', value: 'Brows' },
  { key: 'c', text: 'Cheeks', value: 'Cheeks' },
  { key: 'mi', text: 'Misc', value: 'Misc' },
]

class Search extends Component {

  state = {
    brandSearch: "",
    colorSearch: "",
    categorySearch: "",
    productSearch: "",
    prodsList: [],
    error: "",
    showProducts: false
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleNewSearch = event => {
    event.preventDefault();

    this.setState({
      showProducts: false
    });
  }


  handleAddProd = event => {
    event.preventDefault();
    const data = JSON.parse(event.target.getAttribute("mydataattr"));
    API.addProduct({
      id: data._id,
      brand: data.brand,
      product_name: data.product_name,
      color: data.color,
      product_category: data.product_category
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }


  handleFormSubmit = event => {
    event.preventDefault();

    API.getProductList({
      brand: this.state.brandSearch,
      color: this.state.colorSearch,
      category: this.state.categorySearch,
      product_name: this.state.productSearch
    }).then(res => {
      console.log(res);
      const filteredData = res.data.filter(product => {

        let matchedProduct = false;

        if (this.state.brandSearch) {
          matchedProduct = (this.state.brandSearch.toLowerCase().includes(product.brand.toLowerCase()) ? true : false)
        }

        if (this.state.colorSearch) {
          matchedProduct = (this.state.colorSearch.toLowerCase().includes(product.color.toLowerCase()) ? true : false)
        }

        if (this.state.categorySearch) {
          matchedProduct = (this.state.categorySearch.toLowerCase().includes(product.category.toLowerCase()) ? true : false)
        }

        return matchedProduct;
      })

      console.log(filteredData);
      this.setState({
        prodsList: filteredData,
        brandSearch: "",
        colorSearch: "",
        categorySearch: "",
        productSearch: "",
        showProducts: true
      })

    }).catch(err => console.log(err))
  }

  render() {

    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <div className="container my-5">
        {this.state.showProducts ? (
          <Container>
            <Header className="title">Your Results</Header>
            <Button basic color='pink' onClick={this.handleNewSearch}>
              Search Again
                </Button>
            <Wrapper>
              {this.state.prodsList.map(product => (
                <Card key={product._id}>
                  <Card.Content>
                    <Card.Meta>{product.brand}</Card.Meta>
                    <Card.Description>
                      Color: {product.color}
                    </Card.Description>
                    <Card.Description>
                      {product.product_name !== "Null" ? product.product_name : ""}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='teal' mydataattr={JSON.stringify(product)} onClick={this.handleAddProd}>
                        Add to Your Collection
                </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Wrapper>
          </Container>
        ) : (
            <Container text>
              <Header as='h1' content='Find a Product' textAlign='center' />
              <Form verticalAlign='middle' >
                <Form.Select options={options} placeholder='Search by Category' />
                <Form.Field>
                  <label>Search by Brand</label>
                  <input placeholder='Brand' type='text' name='brandSearch'
                    value={this.state.brandSearch}
                    onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                  <label>Search by Product Name</label>
                  <input placeholder='Product Name' type='text' name='productSearch'
                    value={this.state.productSearch}
                    onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                  <label>Search by Color</label>
                  <input placeholder='Color' type='text' name='colorSearch'
                    value={this.state.colorSearch}
                    onChange={this.handleInputChange} />
                </Form.Field>
                <Button type='submit' onClick={this.handleFormSubmit} >Submit</Button>
              </Form>
            </Container>
          )}
      </div>
    )
  }
}

export default Search;