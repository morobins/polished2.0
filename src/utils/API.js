import axios from "axios";

export default {

  getMakeupBrand: function(brand) {
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand`)
  },

  getProdType: function(prod_type) {
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${prod_type}`)
  }

}