import axios from "axios";

export default {

  //  Path to register new user, you can have more fields than
  //  this but "username" and "password" must exist
  //  userInfo = {
  //    username: "alex",
  //    password: 12345Password!
  //   }
  register: function(userInfo) {
    return axios.post("/api/users/register", userInfo)
  },
  // loginCreds = {username: "alex", "password": 12345Password!}
  
  login: function(loginCreds) {
    return axios.post('/api/users/login', loginCreds)
  },
  // Path to check if user is logged in
  loginCheck: function() {
    return axios.get('/api/users/login')
  },
  // path to log out
  logout: function() {
    return axios.get('/api/users/logout')
  },
  // retrieve all saved products from mongo
  getProducts: function () {
    return axios.get("/api/products")
  },

  // Gets a single product with the given id
  getProduct: function (id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },
  // Adds a product to the database
  addProduct: function (prodData) {
    return axios.post("/api/products", prodData);
  },

    // getProdName: function(product_name) {
    //   return axios.get(`https://secret-caverns-61779.herokuapp.com/api/products?product_name=${product_name}`)
    // },

    // getBrand: function(brand) {
    //   return axios.get(`https://secret-caverns-61779.herokuapp.com/api/products?brand=${brand}`)
    // },

    // getColor: function(color) {
    //   return axios.get(`https://secret-caverns-61779.herokuapp.com/api/products?color=${color}`)
    // },

    // getCategory: function(category) {
    //   return axios.get(`https://secret-caverns-61779.herokuapp.com/api/products?category=${category}`)
    // },

    /* 
    {
      brand: this.state.brandSearch,
      color: this.state.colorSearch,
      category: this.state.categorySearch,
      product_name: this.state.productSearch
    }
    */

    getProductList: function (query) {
      return axios.get("/api/products", { params: query })
    }
  }