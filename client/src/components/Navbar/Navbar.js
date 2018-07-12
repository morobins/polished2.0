import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from 'semantic-ui-react'
import title from "../../images/title.jpg";

const imageStyle = {
  width: "100px"
}

const Navbar = props => {
  if (props.isLoggedIn) { 
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Image className="navbar-brand" style={imageStyle} src={title} />
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/collection" activeClassName="active">Collection</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/add" activeClassName="active">Add</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search" activeClassName="active">Search</NavLink>
            </li>
            <li>
            <NavLink className="nav-link" to="/logout" activeClassName="active">Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )} else { 
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup" activeClassName="active">Sign-up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
}

export default Navbar;