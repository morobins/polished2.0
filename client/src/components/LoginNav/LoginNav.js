import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from 'semantic-ui-react'
import title from "../../images/title.jpg";

const imageStyle = {
  width: "100px"
}

const Navbar = props => {
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

export default Navbar;