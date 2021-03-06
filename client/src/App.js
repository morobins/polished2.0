import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import SearchForm from "./pages/Search";
import LoginForm from "./pages/Login";
import AddForm from "./pages/Add";
import Collection from "./pages/Collection";
import API from "./utils/API";

class App extends Component {

    state= {
      isLoggedIn: false
    }

    componentDidMount() {
      API.loginCheck()
        .then(res => {
          console.log(res.data);
          if (res.data.isLoggedIn) {
            this.setState({
              isLoggedIn: res.data.isLoggedIn
            })
          }
        })
    }

    handleAuth = (data, user) => {
      this.setState({isLoggedIn: data, userData: user})
    }

    logout = () => {
      
        API.logout()
          .then(res => {
            console.log(res.data);
            if (!res.data.isLoggedIn) {
              this.setState({
                isLoggedIn: false
              })
            }
          }).catch(err=> console.log(err))
      }


    render(){
      return (
        <Router>
        <div className="container-fluid">
        {/*<div>{props.isLoggedIn}</div>}*/}
          <Navbar isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
          <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/collection" render={() => <Collection isLoggedIn={this.state.isLoggedIn}/>} />

          <Route exact path="/search" render={() => <SearchForm isLoggedIn={this.state.isLoggedIn}/>} />

          <Route exact path="/add" component={() => <AddForm userData={this.state.userData} isLoggedIn={this.state.isLoggedIn} />} />

          <Route exact path="/login" render={() => <LoginForm isLoggedIn={this.state.isLoggedIn} handleAuth={this.handleAuth} />} />

          <Route exact path="/logout" component={Home} />

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
