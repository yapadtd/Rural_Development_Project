import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style = {{color:"#008568"}}>Mystery Sri Lanka</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
              <Link to ="/" className="nav-link"> Residencies Reservations</Link>
          </li>
          <li className="nav-item">
              <Link to ="/add" className="nav-link">Residencies</Link>
          </li>

          <li className="nav-item">
            <Link to ="/" className="nav-link"> Vehicles</Link>
          </li>

          <li className="nav-item">
            <Link to ="/" className="nav-link"> Activities</Link>
          </li>

          <li className="nav-item">
            <Link to ="/" className="nav-link"> Tour Packages</Link>
          </li>

          <li className="nav-item">
            <Link to ="/" className="nav-link"> Tour Guides</Link>
          </li>

          <li className="nav-item">
            <Link to ="/" className="nav-link"> Contact Us</Link>
          </li>

        <form className="navbar-nav me-auto mb-2 mb-lg-0" style={{margin:"0px 0px 0px 170px"}} >
          <input className="form-control me-2" type="search"  aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" style={{margin:"0px 0px 0px 0px"}} >Search</button>
        </form>        
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to ="/admin" className="btn btn-primary" style={{ margin:"0px 20px 10px 40px"}}>Admin</Link>
          </li>
        </ul> </ul>

      </div>
    </div>
  </nav>
        
    )
}

export default Header;