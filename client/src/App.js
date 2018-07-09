import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchForm from "./pages/Search";
import LoginForm from "./pages/Home";
import AddForm from "./pages/Add";
import Collection from "./pages/Collection";
import LoginNav from "./components/LoginNav/LoginNav"



// class App extends Component {

//     state= {
//       isLoggedIn: false
//     }
//     handleAuth(data){
//       this.setState({isLoggedIn: data})
//     }
//     render(){
//       if(this.state.isLoggedIn){
//         return <LoggedIn />
//       }else{
//         return <LoggedOut />
//       }
    
//     }

// }


//TODO: Show different Navbar for the homepage
//const LoggedIn = () => {
const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Switch>
        <Route exact path="/" component={LoginForm}  handleAuth={this.handleAuth}/>
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/add" component={AddForm} />
          <Route render={() => <h1 className="text-center">You didn't match a route!</h1>}
          />
        </Switch>
      </div>
    </Router>
  )
}

// const LoggedOut = () => {
//   return (
//     <Router>
//       <div className="container-fluid">
//         <LoginNav />
//         <Switch>
//         <Route exact path="/" component={LoginForm} handleAuth={this.handleAuth}/>
//         <Route exact path="/collection" component={Collection} />
//         <Route exact path="/search" component={SearchForm} />
//         <Route exact path="/add" component={AddForm} />
//           <Route render={() => <h1 className="text-center">You didn't match a route!</h1>}
//           />
//         </Switch>
//       </div>
//     </Router>
//   )
// }
export default App;
