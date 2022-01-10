import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
        <nav className="navbar__links">
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </nav>
      </div>
    )
}

export default Navbar
