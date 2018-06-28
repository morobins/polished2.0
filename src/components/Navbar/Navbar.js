import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from 'semantic-ui-react'

//TODO: Fix polished logo image
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/" activeClassName="active">Polished
      {/*<Image src='../../images/title.jpg' />*/}
    </NavLink>
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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;