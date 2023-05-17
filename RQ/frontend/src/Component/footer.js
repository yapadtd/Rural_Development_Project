import React from "react";function Footer() { return(<div style={{backgroundColor:'#1ABC9C'}}>
    <footer className="page-footer font-small blue pt-4" >
    <div className="container-fluid text-center text-md-left">
    <div className="row">
    <div className="col-md-6 mt-md-0 mt-3">
    <a className="navbar-brand fw-bold fst-italic fs-2" href="#" style={{color:"#fffff"}}>Mystery Sri Lanka</a>
    <div class="container ">
    <img    src={process.env.PUBLIC_URL+"logo2.png"}/>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-google-plus"></i></a>
    <a href="#"><i class="fa fa-skype"></i></a>
    </div>
    </div> <hr className="clearfix w-100 d-md-none pb-0"/> <div className="col-md-3 mb-md-0 mb-3"style={{backgroundColor:'#48C9B0 '}}>
    <h5 className="text-uppercase"style={{color:"#ffffff",backgroundColor:'#117864'}}><b>Quick Links</b></h5>
    <ul className="list-unstyled" >
    <li><a href="#!"style={{color:"black"}}><b>Residencies Reservations</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Residencies</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Vehicles</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Activities</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Tour Package</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Tour Guides</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Shops</b></a></li>
    </ul>
    </div> <div className="col-md-3 mb-md-0 mb-3"style={{backgroundColor:' #76D7C4 '}}>
    <h5 className="text-uppercase"style={{color:"#ffffff",backgroundColor:'#117864'}}><b>Quick Links</b></h5>
    <ul className="list-unstyled">
    <li><a href="#!"style={{color:"black"}}><b>About US</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Terms and Conditions</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Help</b></a></li>
    <li><a href="#!"style={{color:"black"}}><b>Contact us</b></a></li>
    </ul>
    </div>
    </div>
    </div> <div className="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="https://mystery.com/"> Mystery Sri Lanka</a>
    </div></footer></div>
    )
    }export default Footer;