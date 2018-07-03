import React, { Component } from 'react'
import { Container, Header, Button, Form, Card, Image } from 'semantic-ui-react'
import API from "../utils/API"
import Wrapper from "../components/Wrapper";
import Link from "react-router-dom";

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

  // componentDidMount() {
  //   this.getProds();
  // }

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

  handleFormSubmit = event => {
    event.preventDefault();

    API.getProductList({
      brand: this.state.brandSearch,
      color: this.state.colorSearch,
      category: this.state.categorySearch,
      product_name: this.state.productSearch
    }).then(res => {
      console.log(res.data);
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
                <Card>
                  <Card.Content>
                    <Image src={product.photo} />

                    <Card.Meta>{product.color}</Card.Meta>
                    <Card.Description>
                      {product.brand}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='teal'>
                        Edit
                </Button>
                      <Button basic color='pink'>
                        Delete
                </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Wrapper>
          </Container>
        ) : (
            <Container text>
              <Header as='h1' content='Search your Collection' textAlign='center' />
              <Form verticalAlign='middle' >
                <Form.Select options={options} placeholder='Search by Product Category' />
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