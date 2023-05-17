import React, { useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";


const AddPackage = () => {
  const params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  const [packageDetails, setPackageDetails] = React.useState({});
  const [addedPackageDetails, setAddedPackageDetails] = React.useState({});

  useEffect(() => {
    fetchPackage();
  }, [])

  const fetchPackage = async () => {
    const response = await fetch(`http://localhost:8060/adminpackage/pack/${params.id}`);
    const data = await response.json();
    setPackageDetails(data.package);
  } 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddedPackageDetails({ ...addedPackageDetails, [name]: value });
  }
 
  


  const addPackage = (e) => {
    e.preventDefault();
    console.log(addedPackageDetails);
    axios.put("http://localhost:8060/package/addPackage}", addedPackageDetails).then((res) => {
      if (res.data.success) {
        alert("package save succesfully");
        navigate("/admin/*" + location.search);
        

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
            defaultValue={packageDetails.package_id}
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
            defaultValue={packageDetails.package_type}
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
            defaultValue={packageDetails.package_name}
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
            defaultValue={packageDetails.day_range}
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
            defaultValue={packageDetails.price_range}
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
            defaultValue={packageDetails.other_details}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit" class="btn btn-success" style={{ marginTop: '16px' }}   onClick={addPackage}> <i className="far fa-check-square"></i>  &nbsp;Confirm  </button>
        
      </form>
    </div>
  );
}
  
export default AddPackage;