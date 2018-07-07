import axios from "axios";

export default {

  getProduct: function(brand) {
    return axios.get(`https://secret-caverns-61779.herokuapp.com/api/products`)
  },

  // getProdType: function(prod_type) {
  //   return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${prod_type}`)
  // }

  // register:  function(data){
  //   console.log(data);
  //   console.log('this should handle registration');
  //   return(data);
  // }
  /* 
    loginCreds = {username: "alex", "password": 12345Password!}
  */
 login: function(loginCreds) {
  return axios.post('/api/users/login', loginCreds)
},
/* 
  Path to check if user is logged in
*/
loginCheck: function() {
  return axios.get('/api/users/login')
},
/* 
  Path to log out
*/
logout: function() {
  return axios.get('/api/users/logout')
},
/* 
  Path to register new user, you can have more fields than this but "username" and "password" must exist

  userInfo = {
    username: "alex",
    password: 12345Password!
  }
*/
register: function(userInfo) {
  return axios.post("/api/users/register", userInfo)
}

}

