import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

export default () => (<nav className="navbar">
  {/* Hamburger menu */}
  <input type="checkbox" id="burger-check" />
        <label className="navbar-burger" htmlFor="burger-check">
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
    );
