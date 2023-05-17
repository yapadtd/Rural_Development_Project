import React from "react";

export default function Carousel (){
    return(<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="header.png" class="d-block w-100" style={{height:"400px"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>HOTELS, RESORTS, HOSTELS & MORE</h2>
        <p>Grand Plaza of Accommodations</p>
      </div>
    </div>
    </div>
</div>)}