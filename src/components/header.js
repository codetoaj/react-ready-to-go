import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <i className="fa fa-thumbs-up"></i> Navbar
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link"><i className="fa fa-home"></i> Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link"><i className="fa fa-puzzle-piece"></i> Features</Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link"><i className="fa fa-money"></i> Pricing</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown link
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
