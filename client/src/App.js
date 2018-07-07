import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchForm from "./pages/Search";
import LoginForm from "./pages/Login";
import AddForm from "./pages/Add";
import Collection from "./pages/Collection";
import Signup from "./pages/Signup";
import Home from "./pages/Home";


// const fakeAuth = {
//   isAuthenticated: true,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) //fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// const Public = () => <h3>Public</h3>
// const Protected = () => <h3>Protected</h3>

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/'/>
//   )}/>
// )

// express server
class App extends Component {
  state = {
    response: ''
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);
  //   console.log(body);
  //   return body;
  // };

render () {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/collection" component={Collection} />
        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/add" component={AddForm} />
        <Route exact path="/signup" component={Signup} />
          <Route render={() => <h1 className="text-center">You didn't match a route!</h1>}
          />
        </Switch>
      </div>
    </Router>
  )
}
}

export default App;
