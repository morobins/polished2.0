import React, { Component } from 'react';
import { Container, Header, Button, Form, TextArea, Label } from 'semantic-ui-react';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';
// import {Image, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary';
import uuidv4 from "uuid";

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
  uploadWidget() {
    const that = this;
    window.cloudinary.openUploadWidget({ cloud_name: 'dmz30uupq', upload_preset: 'h7tuv6vd'},
            function(error, result) {
                console.log(result);
                if (that.state.photo) {
                  
                  that.setState({photo: result[0].secure_url});
                } else throw error;
               
            });

//      cloudinary.uploader.upload_stream(
//   function(result) { console.log(result); },
//   {api_key: 316522144913349,
//   cloud_name: 'dmz30uupq',
//   api_secret: 'D4qNQUa2dl8fcCRMiSOAckwCOSk'}
//   // { agent: myAgent }
// );
    // openUploadWidget({ cloud_name: 'dmz30uupq'},
    //     function(error, result) {
    //         console.log(result);
    //     });
}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };




  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.brand && this.state.color) {
      API.addProduct({
        id: uuidv4(),
        photo: this.state.photo,
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
          {/*<Form.Select options={options}
    placeholder='Select a Category' />*/}
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
          {/*<Label as="label" basic htmlFor="upload">
            <Button icon="upload"
              label={{
                basic: true,
                content: 'Select photo'
              }}
              labelPosition="right"
            />
            <input hidden id="upload" multiple type="file" />
            </Label>*/}
          <Button type='upload' onClick={() => this.uploadWidget()}>Upload Image</Button> 

          {/* <Image cloudName="demo" publicId="sample" width="300" crop="scale"/> */}

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