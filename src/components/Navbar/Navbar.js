import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/" activeClassName="active">Polished
      {/*<img src="../../../public/../src/images/title.jpg" width="30" height="30" alt=""> </img>*/}
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