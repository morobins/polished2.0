import React from 'react'
import { Container, Header, Button, Form, TextArea, Label } from 'semantic-ui-react'

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

const SearchForm = () => (
  <Container text>
    <Header as='h1' content='Search your Collection' textAlign='center' />
    <Form verticalAlign='middle' >
    <Form.Select options={options} placeholder='Search by Product Category' />
      <Form.Field>
        <label>Search by Brand</label>
        <input placeholder='Brand' />
      </Form.Field>
      <Form.Field>
        <label>Search by Product Name</label>
        <input placeholder='Product Name' />
      </Form.Field>
      <Form.Field>
        <label>Search by Color</label>
        <input placeholder='Color' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </Container>
)

export default SearchForm


// class Search extends Component {

//   state = {
//     search: "",
//     brandsList: [],
//     prodsList: [],
//     brandsResults: [],
//     error: ""
//   }

//   componentDidMount() {
//     this.getBrands();
//     this.getProds();
//   }

//   getBrands = (brand) => {
//     API.getMakeupBrand(brand)
//       .then(res => {
//         console.log(res.data);
//         this.setState({brandsList: res.data.brand})})
//       .catch(err => console.log(err));
//       // console.log(res.data);
//   }
  

//   getProds = () => {
//     API.getProdType()
//       .then(res => {
//         console.log(res)
//         this.setState({
//           prodsList: res.data.product_type
//         })
//       })
//       .catch(err => console.log(err));
//   }

//   handleInputChange = event => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value
//     });
//   }

//   // handleFormSubmit = event => {
//   //   event.preventDefault();

//   //   API.getMakeupBrand(this.state.search)
//   //     .then(res => {
//   //       if (res.data.status === "error") {
//   //         throw new Error(res.data.message)
//   //       }
//   //       this.setState({
//   //         brandResults: res.data.message,
//   //         error: ""
//   //       });
//   //     })
//   //     .catch(err => this.setState({error: err.message}))
//   // }

//   render() {
  
//     return (
//       <div className="container my-5">
//         <h1>Search</h1>

//         <form>
//           <div className="form-group">
//             <label htmlFor="brandsList">Brand Name:</label>
//             <input 
//               list="brand" 
//               type="text" 
//               className="form-control"
//               id="brandsList"
//               name="search"
//               value={this.state.search}
//               onChange={this.handleInputChange}
//             />
//             <datalist id="brand">
//               {
//                 (this.state.brandsList) 
//                 ? 
//                 (this.state.brandsList.map(brand => <option value={brand} key={brand} />)) : "" }
//             </datalist>

//             <button
//               type="submit"
//               onClick={this.handleFormSubmit}
//               className="btn btn-success"
//             >
//               Search
//             </button>
//           </div>
//         </form>

 
//       </div>
//     )
//   }
// }

// export default Search;




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