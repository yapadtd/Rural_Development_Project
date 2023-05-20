import React, { useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";


const EditPackage = () => {
  const params = useParams(); //access the parameters of the current route.
  let navigate = useNavigate();
  let location = useLocation();
  const [packageDetails, setPackageDetails] = React.useState({});
  const [updatedPackageDetails, setUpdatedPackageDetails] = React.useState({});

  useEffect(() => {
    fetchPackage();
  }, [])

  const fetchPackage = async () => {
    const response = await fetch(`http://localhost:8060/request/request/${params.id}`);
    const data = await response.json();
    setPackageDetails(data.request);
  } 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPackageDetails({ ...updatedPackageDetails, [name]: value });
  }
 
  


  const updatePackage = (e) => {
    e.preventDefault();
    console.log(updatedPackageDetails);
    axios.put(`http://localhost:8060/request/update/${params.id}`, updatedPackageDetails).then((res) => {
      if (res.data.success) {
        alert("package update succesfully");
        navigate("/allPackages/*" + location.search);
        

      }
    })
  }


  return (
    <div className="container">

        <ul className="navbar-nav">
          <li className="nav-item">
             <Link to="/allPackages">
                        <button type="button" className="w-20 btn-lg btn-outline-primary" style={{textDecoration:'none', float: "right", margin:"0px 10px 10px 10px" }}><i className="fa fa-wpforms"></i>  View Packages </button>
                    </Link>
                    </li>
        </ul>



      <form className="needs-validation" noValidate>
        <div class="form group">
          <label for="package_id" class="form-label">
            Package ID
          </label>
          <input
            type="text"
            disabled
            class="form-control"
            name="package_id"
            id="package_id"
            placeholder="Enter Package ID"
            defaultValue={packageDetails.divisionID}
            onChange={handleInputChange}
          />
        </div>
        <div class="form group">
          <label for="package_type" class="form-label">
            Package Type
          </label>
          <input
            type="text"
            class="form-control"
            name="package_type"
            id="package_type"
            placeholder="Enter Package Type"
            defaultValue={packageDetails.title}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="package_name" class="form-label">
            Package Name
          </label>
          <input
            type="text"
            class="form-control"
            id="package_name"
            name='package_name'
            placeholder="Enter Package Name"
            defaultValue={packageDetails.description}
            onChange={handleInputChange}
          />
        </div> 

        <div class="form group">
          <label for="day_range" class="form-label">
            Day Range
          </label>
          <input
            type="text"
            class="form-control"
            id="day_range"
            name='day_range'
            placeholder="Enter Day Range"
            defaultValue={packageDetails.name}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="price_range" class="form-label">
            Price Range
          </label>
          <input
            type="text"
            class="form-control"
            id="price_range"
            name='price_range'
            placeholder="Enter Price Range"
            defaultValue={packageDetails.address}
            onChange={handleInputChange}
          />
        </div>

        <div class="form group">
          <label for="other_details" class="form-label">
            Other Details
          </label>
          <input
            type="text"
            class="form-control"
            id="other_details"
            name='other_details'
            placeholder="Enter Other Details"
            defaultValue={packageDetails.division}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit" class="btn btn-success" style={{ marginTop: '16px' }}   onClick={updatePackage}> <i className="far fa-check-square"></i>  &nbsp;update  </button>
        
      </form>
    </div>
  );
}
  
export default EditPackage;