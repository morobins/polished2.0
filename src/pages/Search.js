import React, { Component } from 'react'
import { Container, Header, Button, Form } from 'semantic-ui-react'
import API from "../utils/API"

const options = [
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
    search: "",
    brandsList: [],
    prodsList: [],
    brandsResults: [],
    error: ""
  }

  // componentDidMount() {
  //   this.getProduct();
  // }

  // getBrands = (brand) => {
  //   API.getMakeupBrand(brand)
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({brandsList: res.data.brand})})
  //     .catch(err => console.log(err));
  //     // console.log(res.data);
  // }


  getProds = () => {
    API.getProduct()
      .then(res => {
        console.log(res)
        this.setState({
          prodsList: res.data
        })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    API.getProduct(this.state.search)
      .then(res => {
        console.log(res.data);
        if (res.data.status === "error") {
          throw new Error(res.data.message)
        }
        this.setState({
          prodsList: res.data,
          error: ""
        });
      })
      .catch(err => this.setState({error: err.message}))
  }

  render() {

    return (
      <div className="container my-5">

        <Container text>
          <Header as='h1' content='Search your Collection' textAlign='center' />
          <Form verticalAlign='middle' >
            <Form.Select options={options} placeholder='Search by Product Category' />
            <Form.Field>
              <label>Search by Brand</label>
              <input placeholder='Brand' type='text' name='search'
                value={this.state.search}
                onChange={this.handleInputChange} />
              <datalist id="brand">
                {
                  (this.state.brandsList)
                    ?
                    (this.state.prodsList.map(brand => <option value={brand} key={brand} />)) : ""}
              </datalist>
            </Form.Field>
            <Form.Field>
              <label>Search by Product Name</label>
              <input placeholder='Product Name' />
            </Form.Field>
            <Form.Field>
              <label>Search by Color</label>
              <input placeholder='Color' />
            </Form.Field>
            <Button type='submit' onClick={this.handleFormSubmit} >Submit</Button>
          </Form>
        </Container>

      </div>


    )
  }
}

export default Search;




//        /* <div className="row">
//         //   {
//         //     this.state.error 
//         //     ? 
//         //     (<h1>{this.state.error}</h1>) 
//         //     :
//         //     (
//         //       this.state.brandsList.map(brandImage => (
//         //       <div className="col-3" key={brandImage}>
//         //         <img src={brandImage} alt="Makeup" className="img-fluid" />
//         //       </div>
//         //       )
//         //     )
//         //     )
//         //   }
//         // </div>
//     */