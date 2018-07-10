import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchForm from "./pages/Search";
import LoginForm from "./pages/Login";
import AddForm from "./pages/Add";
import Collection from "./pages/Collection";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

//TODO: Show different Navbar for the homepage
const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/add" component={AddForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={Signup} />
          <Route render={() => <h1 className="text-center">You didn't match a route!</h1>}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
