import React from "react";
import {Link} from 'react-router-dom';

function Lists(){
 
    const myStyle={
        backgroundImage: 
 "url('./fb.jpeg')",
        height:'200vh',
        marginTop:'-150px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return(
        <div style={myStyle} >
<div className="container" >



        <ul className="navbar-nav">
        <li className="nav-item">
           <Link to="/allPackages">
                      <button type="button" className="btn btn-md  btn-warning" style={{textDecoration:'none', float: "right", margin:"10px -50px 0px 100px" }}><i className="fa fa-wpforms"></i>  View Packages </button>
                  </Link>
                  </li>
      </ul>

        <div class="row row-cols-1 row-cols-md-3 g-6">
                <div class="col">
                
                        <div className="card mb-4 rounded-3 shadow-sm" >
                            <img className="card-img-top" src={process.env.PUBLIC_URL+"ad.jpg"} alt={'adventure'}/>
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Adventurous</h4>
                            </div>
                            <div className="card-body">
                                <h1 className= "card-title pricing-card-title">
                                    
                                </h1>
                                <Link to="/addPackage">
                                    <button type="button" className="w-100 btn-lg btn-outline-primary">List Now</button>
                                </Link>
                                
                            </div>
                        
                        </div>
                </div>
        

                <div class="col">
                                            
                        <div className="card mb-4 rounded-3 shadow-sm" style={{height:'390px'}}>
                                <img className="card-img-top" src={process.env.PUBLIC_URL+"w.jpg"} alt={'wildlife'} style={{height:'370px'}}/>
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">WildLife</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className= "card-title pricing-card-title">
                                        
                                    </h1>
                                    <Link to="/addPackage">
                                        <button type="button" className="w-100 btn-lg btn-outline-primary">List Now</button>
                                    </Link>
                                    
                                </div>

                        </div>

                </div>

                <div class="col">
                    
                        <div className="card mb-4 rounded-3 shadow-sm" style={{height:'390px'}}>
                                <img className="card-img-top" src={process.env.PUBLIC_URL+"cultural.jpg"} alt={'cultural'}style={{height:'345px'}}/>
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Cultural</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className= "card-title listing-card-title">
                                        
                                    </h1>
                                    <Link to="/addPackage">
                                        <button type="button" className="w-100 btn-lg btn-outline-primary">List Now</button>
                                    </Link>
                                </div>
                        </div>
                    
                </div> 

                <div class="col" style={{margin:"0px 0px 0px 0px"}}>
                    
                        <div className="card mb-4 rounded-3 shadow-sm">
                                <img className="card-img-top" src={process.env.PUBLIC_URL+"coast.jpg"} alt={'coadtline'}/>
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Coastline</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className= "card-title listing-card-title">
                                        
                                    </h1>
                                    <Link to="/addPackage">
                                        <button type="button" className="w-100 btn-lg btn-outline-primary">List Now</button>
                                    </Link>
                                </div>
                        </div>
                        
                </div>  

                <div class="col"  style={{margin:"0px 0px 0px 0px"}}>
                        
                        <div className="card mb-4 rounded-3 shadow-sm" style={{height:'390px'}}>
                                <img className="card-img-top" src={process.env.PUBLIC_URL+"RoundT.jpg"} alt={'Round island'} style={{height:'300px'}}/>
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Round Island Tour</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className= "card-title listing-card-title">
                                        
                                    </h1>
                                    <Link to="/addPackage">
                                        <button type="button" className="w-100 btn-lg btn-outline-primary">List Now</button>
                                    </Link>
                                </div>
                        </div>
                </div> 

                <div class="col"  style={{margin:"0px 0px 0px 0px"}}>
                        <div className="card mb-4 rounded-3 shadow-sm" style={{height:'390px'}}>
                                <img className="card-img-top" src={process.env.PUBLIC_URL+"hill.jpg"} alt={'hill country'} style={{height:'345px'}}/>
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Hill Country</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className= "card-title listing-card-title">
                                        
                                    </h1>
                                    <Link to="/addPackage">
                                        <button type="button" className="w-100 btn-lg btn-outline-primary">List Now</button>
                                    </Link>
                                </div>
                        </div>    
                </div>         

        </div>
        </div>
        </div>
    );
}

export default Lists;