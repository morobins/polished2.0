import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/search" component={Search} />
          <Route render={() => <h1 className="text-center">You didn't match a route!</h1>}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
