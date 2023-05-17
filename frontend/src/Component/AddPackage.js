
import React,{useState} from "react";  //useState- for functional component
import axios from "axios";
import { Link } from "react-router-dom";


export default function AddPackage(){

    const myStyle={
        backgroundImage: 
 "url('./sea.jpg')",
        height:'160vh',
        marginTop:'-150px',
        width:'2000px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
                                   //initialize our state by calling useState

    const [package_id, setPackage_id] = useState(""); //data or properties that need to be tracking in an application.
    const [package_type, setPackage_type] = useState("");
    const [package_name, setPackage_name] = useState("");
    const [day_range, setday_range] = useState("");
    const [price_range, setprice_range] = useState("");
    const [other_details, setother_details] = useState("");

    function sendData(){
        //e.preventDefault();      //prevent normal behaviour after clicking submit btn
        
        const newPackage = {
            package_id,
            package_type,
            package_name,
            day_range,
            price_range,
            other_details
        }

        axios.post('http://localhost:8060/adminpackage/add',newPackage).then(()=>{
            
            alert("package Create succesfully");
            

        }).catch((err)=>{
            alert(err)
        })
        
    }


    return(
        <div style={myStyle} >
       <div className="section">
           ::before
        <div className="section-center"> 
      <div className="col-md-7 col-md-push-5" style={{marginLeft:'1000px', marginTop:'300px'}}>
          <div className="booking-cta">
              <h1 style={{color:'lightGray', fontWeight:'bold'}}>Want To View <br></br>
                  Existing Packages </h1>
              <Link to="/allPackages">
                        <button type="button" className="btn btn-md btn-warning" style={{textDecoration:'none',  marginRight:'600px' , width:'150px', marginTop:'30px'}}><i className="fa fa-wpforms"></i>  View Packages </button>
                    </Link>
          </div>
      </div>

  
        
               <div className="card card-1" style={{width:'850px', marginRight:'200px', marginLeft:'20px',  marginTop:'-190px'}}>
               <div className="container" style={{marginLeft:'10px',marginRight:'20px', marginBottom:'60px', marginTop:'-1px'}}>

            <form className="form  "  onSubmit={sendData} >
                
                <div class="form group">
                    <label for="package_id" class="form-label">Package ID</label>
                    <input type="text" class="form-control" id="inputid" required placeholder="Enter Package ID" onChange={(e)=>{
                                                                                                        //onChange is used to handle user input in real-time.
                                                                                                        //event to track the value of input elements.(e)
                        setPackage_id(e.target.value);

                    }}/>
                    
                </div>
                <div class="form group">
                    <label for="package_type" class="form-label">Package Type</label>
                    <input type="text" class="form-control" id="inputype" required placeholder="Enter Package Type"onChange={(e)=>{
                        setPackage_type(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="package_name" class="form-label">Package Name</label>
                    <input type="text" class="form-control" id="inputname" required placeholder="Enter Package Name"onChange={(e)=>{
                        setPackage_name(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="day_range" class="form-label">Day Range</label>
                    <input type="text" class="form-control" id="inputdays" required placeholder="Enter Day Range"onChange={(e)=>{
                        setday_range(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="price_range" class="form-label">Price Range</label>
                    <input type="text" class="form-control" id="inputprice" required placeholder="Enter Price Range"onChange={(e)=>{
                        setprice_range(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="other_details" class="form-label">Other Details</label>
                    <input type="text" class="form-control" id="inputothers" placeholder="Enter Other Details"onChange={(e)=>{
                        setother_details(e.target.value);

                    }}/>
                    
                </div>

               
                
                <button type="submit" class="btn btn-primary">Create Package</button>

                
                </form>
                </div> 
                </div>  
        </div>
        </div> 
     </div>

    )
}