import axios from "axios";

export default {

  // retrieve all saved products from mongo
  getProduct: function () {
    return axios.get("/api/products")
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

  getProductList: function (query) {
    return axios.get("https://secret-caverns-61779.herokuapp.com/api/products", { params: query })
  }
}