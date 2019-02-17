import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
 render() {
   return (
  <nav className="navbar">
      {/* Hamburger menu */}
      <input type="checkbox" id="burger-check" />
      <label class="navbar-burger" for="burger-check">
        <span></span>      
      </label>
      <div className="navbar-menu">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
      </div>
  </nav>
  )}
}

export default Navbar
