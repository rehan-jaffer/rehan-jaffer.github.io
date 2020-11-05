import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import write from '../images/write.png'
import github from '../images/github.png'
import bird from '../images/bird.png'
import email from '../images/email.png'

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo-segment">
      <img src={write} className="logo-image" />
      <h1 className="logo">
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}.
        </Link>
      </h1>
    </div>
    <nav>
        <ul className="navigation">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
