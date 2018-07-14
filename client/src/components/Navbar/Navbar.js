import React from "react";
import { NavLink } from "react-router-dom";
import { Image, Button, Menu } from 'semantic-ui-react'
import title from "../../images/title.jpg";
import "../Navbar/Navbar.css"
import API from "../../utils/API";


const imageStyle = {
  width: "100px"
}

// logout = event => {
//   event.preventDefault();

//   API.logout()
//     .then(res => {
//       console.log(res.data);
//       if (res.data.isLoggedIn) {
//         this.setState({
//           isLoggedIn: res.data.isLoggedIn
//         })
//       }
//     })
// }

const Navbar = props => {
  if (props.isLoggedIn) {
    return (
      <Menu secondary>
        <Menu.Item><Image className="navbar-brand" style={imageStyle} src={title} /></Menu.Item>
        <Menu.Item name='collection'><NavLink className="nav-link" color="black" to="/collection" activeClassName="active">Collection</NavLink></Menu.Item>
        <Menu.Item name='Add'><NavLink className="nav-link" to="/add" activeClassName="active">Add</NavLink></Menu.Item>
        <Menu.Item name='Search'><NavLink className="nav-link" to="/search" activeClassName="active">Search</NavLink></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button
              name='logout'
              onClick={this.logout}
            >Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  } else {
    return (
      <Menu secondary>
        <Menu.Item><Image className="navbar-brand" style={imageStyle} src={title} /></Menu.Item>
        <Menu.Item name='collection'><NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink></Menu.Item>
        <Menu.Item>
          <NavLink className="nav-link" to="/signup" activeClassName="active">Sign-up</NavLink></Menu.Item>
      </Menu>
    )
  }
}

export default Navbar;

// <nav className="navbar navbar-expand-lg navbar-light bg-light">

//         <Image className="navbar-brand" style={imageStyle} src={title} />
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/collection" activeClassName="active">Collection</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/add" activeClassName="active">Add</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/search" activeClassName="active">Search</NavLink>
//             </li>
//           </ul>
//           <Button basic color='black' circular="true" position="right" onClick={this.logout} >
//             Logout
//       </Button>
//         </div>
//       </nav>