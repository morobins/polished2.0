import axios from "axios";

export default {

  getProduct: function(brand) {
    return axios.get(`https://secret-caverns-61779.herokuapp.com/api/products`)
  },

  // getProdType: function(prod_type) {
  //   return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${prod_type}`)
  // }

}