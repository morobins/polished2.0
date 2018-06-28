import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Search from "./pages/Search";
import LoginForm from "./pages/Home";
import AddForm from "./pages/Add";


const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Switch>
        
        <Route exact path="/" component={LoginForm} />
        {/*<Route exact path="/collection" component={} />*/}
        <Route exact path="/search" component={Search} />
        <Route exact path="/add" component={AddForm} />
          <Route render={() => <h1 className="text-center">You didn't match a route!</h1>}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
