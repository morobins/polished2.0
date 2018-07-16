import axios from "axios";

export default {

  //  Path to register new user, you can have more fields than
  //  this but "username" and "password" must exist
  //  userInfo = {
  //    username: "alex",
  //    password: 12345Password!
  //   }
  register: function (userInfo) {
    return axios.post("/api/users/register", userInfo)
  },
  // loginCreds = {username: "alex", "password": 12345Password!}

  login: function (loginCreds) {
    return axios.post('/api/users/login', loginCreds)
  },

  // Path to check if user is logged in
  loginCheck: function () {
    return axios.get('/api/users/login')
  },

  // path to log out
  logout: function () {
    return axios.get('/api/users/logout')
  },

  // retrieve all saved products from mongo
  getProducts: function () {
    return axios.get("/api/products")
  },

  //retrieve all products from user's array
  getUserProds: function () {
    return axios.get("/api/users")
  },

  // Gets a single product with the given id
  getProduct: function (id) {
    return axios.get("/api/products/" + id);
  },

  // Deletes the product with the given id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },

  // Adds a product to the user's personal database
  addProduct: function (prodData) {
    console.log(prodData)
    return axios.put("/api/users/", prodData);
  },

  // Updates a product in the database
  // updateProduct: function (id) {
  //   return axios.put("/api/products/" + id);
  // },

  getProductList: function (query) {
    return axios.get("/api/products", { params: query })
  }
}