import React, { useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {
  useNavigate,
  useLocation,
  useParams,
  useState,
} from "react-router-dom";


const EditRequest = () => {
  const params = useParams(); //access the parameters of the current route.
  let navigate = useNavigate();
  let location = useLocation();
  const [requestDetails, setRequestDetails] = React.useState({});
  const [updatedRequestDetails, setUpdatedRequestDetails] = React.useState({});

  useEffect(() => {
    fetchPackage();
  }, [])

  const fetchPackage = async () => {
    const response = await fetch(`http://localhost:8000/${params.id}`);
    const data = await response.json();
    setRequestDetails(data.post);
  } 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRequestDetails({ ...updatedRequestDetails, [name]: value });
  }
 
  


  const updateRequest = (e) => {
    e.preventDefault();
    console.log(updatedRequestDetails);
    axios.put(`http://localhost:8000/update/${params.id}`, updatedRequestDetails).then((res) => {
      if (res.data.success) {
        alert("Request update succesfully");
        navigate("/" + location.search);
        

      }
    })
  }


  return (
    <div className="container">

        <ul className="navbar-nav">
          <li className="nav-item">
             <Link to="/">
                        <button type="button" className="w-20 btn-lg btn-outline-primary" style={{textDecoration:'none', float: "right", margin:"20px 10px 10px 10px" }}><i className="fa fa-wpforms"></i>  View Requests </button>
                    </Link>
                    </li>
        </ul>



      <form className="needs-validation" noValidate>
        <div class="form group">
          <label for="package_id" class="form-label">
          Division Number
          </label>
          <input
            type="text"
            disabled
            class="form-control"
            name="divisionID"
            id="divisionID"
            placeholder="Enter Division Number"
            defaultValue={requestDetails.devisionID}
            onChange={handleInputChange}
          />
        </div>
        <div class="form group">
          <label for="package_type" class="form-label">
          Title
          </label>
          <input
            type="text"
            class="form-control"
            name="title"
            id="title"
            placeholder="Enter Title"
            defaultValue={requestDetails.title}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="package_name" class="form-label">
          Brief Description
          </label>
          <input
            type="text"
            class="form-control"
            id="description"
            name='description'
            placeholder="Enter Description"
            defaultValue={requestDetails.description}
            onChange={handleInputChange}
          />
        </div> 

        <div class="form group">
          <label for="day_range" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            name='name'
            placeholder="Enter Name"
            defaultValue={requestDetails.name}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="price_range" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="address"
            name='address'
            placeholder="Enter Address"
            defaultValue={requestDetails.address}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="other_details" class="form-label">
            Division
          </label>
          <input
            type="text"
            class="form-control"
            id="division"
            name='division'
            placeholder="Enter Division"
            defaultValue={requestDetails.division}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="other_details" class="form-label">
            District
          </label>
          <input
            type="text"
            class="form-control"
            id="district"
            name='district'
            placeholder="Enter District"
            defaultValue={requestDetails.district}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="other_details" class="form-label">
            Province
          </label>
          <input
            type="text"
            class="form-control"
            id="province"
            name='province'
            placeholder="Enter Province"
            defaultValue={requestDetails.province}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="other_details" class="form-label">
            Email Address
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            name='email'
            placeholder="Enter Email"
            defaultValue={requestDetails.email}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="other_details" class="form-label">
            Contact Number
          </label>
          <input
            type="text"
            class="form-control"
            id="phnNo"
            name='phnNo'
            placeholder="Enter Phone no"
            defaultValue={requestDetails.phoneNo}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit" class="btn btn-success" style={{ marginTop: '16px' }}   onClick={updateRequest}> <i className="far fa-check-square"></i>  &nbsp;update  </button>
        
      </form>
    </div>
  );
}
  
export default EditRequest;