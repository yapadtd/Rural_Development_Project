import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "./images/logo.png";



export default class Navbar extends Component {


    state = {
        isOpen: false
      };
      handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
      };
      render() { 
        return (
        
      <nav className="navbar">
        
      <div className="nav-center">
        <div className="nav-header">
        <Link to="/">
              <img src={logo} alt="Mystery SriLanka" />
            </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={this.handleToggle}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
        >
            <li>
            <Link to="/">Residence</Link>
          </li>
          <li>
            <Link to="/">Residece Reservation</Link>
          </li>
          <li>
            <Link to="/">Activity</Link>
          </li>
          <li>
            <Link to="/">Tour Package</Link>
          </li>
          <li>
            <Link to="/">Tour Package Reservation</Link>
          </li>
          <li>
            <Link to="/">Tour Guide</Link>
          </li>
          <li>
            <Link to="/">Vehicle Reservation</Link>
          </li>
          <li>
            <Link to="/">Inquary</Link>
          </li>
        </ul>
      </div>
      <div >
                    <Link to="/allPackages">
                        <button type="button" className="w-20 btn-lg btn-outline-primary" style={{textDecoration:'none' }}><i className="fa fa-wpforms"></i>  View Packages </button>
                    </Link>
                </div>
    </nav>
  );

    }
}