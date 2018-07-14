import React from "react";
import { NavLink, Link } from "react-router-dom";
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
  console.log(props.isLoggedIn);
  if (props.isLoggedIn) {
    return (
      <Menu secondary>
        <Menu.Item as={Link} to="/"><Image className="navbar-brand" style={imageStyle} src={title} /></Menu.Item>
        <Menu.Item name='collection'><NavLink className="nav-link" color="black" to="/collection" activeClassName="active"> My Collection</NavLink></Menu.Item>
        <Menu.Item name='Add'><NavLink className="nav-link" to="/add" activeClassName="active">Add</NavLink></Menu.Item>
        <Menu.Item name='Search'><NavLink className="nav-link" to="/search" activeClassName="active">Search</NavLink></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button
              name='logout'
              onClick={props.logout}
            >Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  } else {
    return (
      <Menu secondary>
        <Menu.Item as={Link} to="/"><Image className="navbar-brand" style={imageStyle} src={title} /></Menu.Item>
        <Menu.Item name='collection'><NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink></Menu.Item>
        <Menu.Item>
          <NavLink className="nav-link" to="/signup" activeClassName="active">Sign-up</NavLink></Menu.Item>
      </Menu>
    )
  }
}

export default Navbar;

