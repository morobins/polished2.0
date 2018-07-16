import React, { Component } from 'react';
import { Container, Header, Button, Form, TextArea, Label } from 'semantic-ui-react';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';
import {Image, CloudinaryContext} from 'cloudinary-react';


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

class AddForm extends Component {
  state = {
    category: "",
    brand: "",
    productName: "",
    color: "",
    notes: "",
    photo: "",
    success:false
  };

  componentDidMount() {
    // this.getProds();
  }

  // getProds = () => {
  //   API.getUserProds()
  //     .then(res =>{
  //       console.log(res)
  //       this.setState({
  //         products: res.data
  //       })
  //     })
  //     .catch(err => console.log(err));
  // }


  //TODO: MAKE CLOUDINARY WORK!
//   uploadWidget() {
//     cloudinary.openUploadWidget({ cloud_name: 'dmz30uupq', upload_preset: 'PRESET'},
//         function(error, result) {
//             console.log(result);
//         });
// }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //TODO: HANDLE DELETE
  // deleteProduct = id => {
  //   API.deleteProduct(id)
  //   //get the newly updated list
  //     .then(res => this.getProds())
  //     .catch(err => console.log(err));
  // };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.brand && this.state.color) {
      API.addProduct({
        brand: this.state.brand,
        product_name: this.state.productName,
        color: this.state.color,
        notes: this.state.notes,
        product_category: this.state.category
      })
        // .then(() => this.getUserProds())
        .then
          (res => {
          this.setState({ 
            success: true,
            brand: "",
            productName: "",
            color: "",
            notes: "",
            product_category: ""
          })
          })
        .catch
          (err => console.log('update err', err));  
    }
  };

  render() {

    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <Container text>
        <Header as='h1' content='Add to My Collection' textAlign='center' />
        <Form verticalAlign='middle' >
          <Form.Select options={options}
            placeholder='Select a Category' />
          <Form.Field>
            <label>Brand (required)</label>
            <input
              value={this.state.brand}
              onChange={this.handleInputChange}
              name="brand"
              placeholder='Brand' />
          </Form.Field>
          <Form.Field>
            <label>Product Name</label>
            <input
              value={this.state.productName}
              onChange={this.handleInputChange}
              name="productName"
              placeholder='Product Name' />
          </Form.Field>
          <Form.Field>
            <label>Color (required)</label>
            <input
              value={this.state.color}
              onChange={this.handleInputChange}
              name="color"
              placeholder='Color' />
          </Form.Field>
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            value={this.state.notes}
            onChange={this.handleInputChange}
            name="notes"
            label='Notes'
          />
          <Label as="label" basic htmlFor="upload">
            <Button icon="upload"
              label={{
                basic: true,
                content: 'Select photo'
              }}
              labelPosition="right"
            />
            <input hidden id="upload" multiple type="file" />
            </Label>
          {/*<Button type='upload' onClick={this.uploadWidget.bind(this)}>Upload Image</Button>*/}
          {this.state.success ? (
            <span>Your product has been added!</span>
          ) : ""}
          
          <br/>
          <br/>
          <Button type='submit' disabled={!(this.state.brand && this.state.color)} onClick={this.handleFormSubmit}>Submit</Button>
        </Form>
      </Container>
    )
  }

};

export default AddForm