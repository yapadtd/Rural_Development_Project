import React,{useState} from "react";  //useState- for functional component
import axios from "axios";
import { Link } from "react-router-dom";


export default function MakeRequest(){

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

    const [divisionID, setDivisionID] = useState(""); //data or properties that need to be tracking in an application.
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [division, setDivision] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    function sendData(){
        //e.preventDefault();      //prevent normal behaviour after clicking submit btn
        
        const newPackage = {
            divisionID,
            title,
            description,
            name,
            address,
            division,
            district,
            province,
            email,
            phoneNo
        }

        axios.post('http://localhost:8000/posts/add',newPackage).then(()=>{
            
            alert("Request Create succesfully");
            

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
                    <label for="package_id" class="form-label">Division Number</label>
                    <input type="text" class="form-control" id="inputid" required placeholder="Enter Division Number" onChange={(e)=>{
                                                                                                        //onChange is used to handle user input in real-time.
                                                                                                      //event to track the value of input elements.(e)
                                                                                                        setDivisionID(e.target.value);

                    }}/>
                    
                </div>
                <div class="form group">
                    <label for="package_type" class="form-label">Title</label>
                    <input type="text" class="form-control" id="inputype" required placeholder="Enter Title"onChange={(e)=>{
                        setTitle(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="package_name" class="form-label">Brief Description</label>
                    <input type="text" class="form-control" id="inputname" required placeholder="Enter Description"onChange={(e)=>{
                        setDescription(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="day_range" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputdays" required placeholder="Enter Name"onChange={(e)=>{
                        setName(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="price_range" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputprice" required placeholder="Enter Address"onChange={(e)=>{
                        setAddress(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="other_details" class="form-label">Division</label>
                    <input type="text" class="form-control" id="inputothers" placeholder="Enter Division"onChange={(e)=>{
                        setDivision(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="other_details" class="form-label">District</label>
                    <input type="text" class="form-control" id="inputothers" placeholder="Enter District"onChange={(e)=>{
                        setDistrict(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="other_details" class="form-label">Province</label>
                    <input type="text" class="form-control" id="inputothers" placeholder="Enter Province"onChange={(e)=>{
                        setProvince(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="other_details" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputothers" placeholder="Enter Email"onChange={(e)=>{
                        setEmail(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="other_details" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" id="inputothers" placeholder="Enter Contact Number"onChange={(e)=>{
                        setPhoneNo(e.target.value);

                    }}/>
                    
                </div>

               
                
                <button type="submit" class="btn btn-primary">MakeRequest</button>

                
                </form>
                </div> 
                </div>  
        </div>
        </div> 
     </div>

    )
}