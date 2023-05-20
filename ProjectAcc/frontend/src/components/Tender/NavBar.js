import React, { Component } from 'react'

const mystyle ={

  padding:"10px 0px 0px 40px", 
  color:"MidnightBlue",
  fontFamily: "Fantasy",
  fontSize: "20px"

};

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#c4e0f5'}}>
        <div class="container-fluid">

           
            <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
            <a class="nav-link"  style={mystyle} aria-current="page" href="/">Tenders</a>
                <a class="nav-link " style={mystyle} aria-current="page" href="#">Home</a>
                <a class="nav-link " style={mystyle} aria-current="page" href="#">Community Request</a>
                <a class="nav-link " style={mystyle} aria-current="page" href="#">Estimation</a>
                <a class="nav-link " style={mystyle} aria-current="page" href="#">Contracts</a>
                <a class="nav-link " style={mystyle} aria-current="page" href="#">Monetary Accounts</a>
                <a class="nav-link " style={mystyle} aria-current="page" href="#">Inquary</a>
                <a class="nav-link " style={mystyle} aria-current="page" href="#">About</a>
            
       
     </div>
    </div>
  </div>
</nav>

        


      </div>
    )
  }
}
