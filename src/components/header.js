import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/lambda-logo.png'

const Header = ({ siteTitle }) => (
  <div className="l-header">
    <div className="l-container">
      <header>
        <Link to="#" className="logo theme-margin">
          <img src={Logo} alt="Lambda Restaurant Logo" />
        </Link>

        <nav id="menu">
          <label htmlFor="tm" id="toggle-menu">Navigation <span className="drop-icon">▾</span></label>
          <input type="checkbox" id="tm" />
          <ul className="main-menu">
            <li><Link to="#">home</Link></li>
            <li><Link to="#">about</Link></li>
            <li><Link to="#">ingredients</Link></li>
            <li><Link to="#">menu</Link></li>
            <li><Link to="#">reviews</Link></li>
            <li><Link to="#">reservations</Link></li>
          </ul>
        </nav>
        </header>

        <div className="banner">
        <h2>the right ingredients<br />for the right food</h2>
        <hr className="fancy-hr" />
        <ul className="l-inline-list">
          <li><Link to="#" className="btn btn-primary">book a table</Link></li>
          <li><Link to="#food-menu" className="btn btn-secondary">see the menu</Link></li>
        </ul>
      </div>

    </div>
  </div>

)

export default Header


