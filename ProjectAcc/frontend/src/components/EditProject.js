
import React, { useEffect, useState } from 'react'
import { NavLink,Link,useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'

const EditProject = () => {

  
    const [posts, setPosts] = React.useState([]);
    const params=useParams();
    const postsID=params.id;
    const history = useNavigate();

    useEffect(()=>{
        const getOnePosts = async () => {
          await axios.get(`http://localhost:8060/posts/${postsID}`).then((res) => {
            setPosts(res.data);
          }).catch((err) => {
              console.log(err.massage);
          }) 
      }
      getOnePosts();
      },[])

      const sendRequest = async() =>{

        await axios.put(`http://localhost:8060/update/${postsID}` , {
      

        date:String(posts.date),
        purpose:String(posts.purpose),
        status:String(posts.status),
        reason:String(posts.reason),
        actualMonetaryValue:String(posts.actualMonetaryValue),
        recivedMoneyAmount:String(posts.recivedMoneyAmount),

            
      
        }).then(()=>{
      
            Swal.fire({
                title: "Success!",
                text: "Place Details Updated Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              });
            
        })
      
      
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history(`/`));
    };

    const handleChange =(e)=>{

        setPosts((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
      }

      



  return (
    <div>
      <div class="container-fluid" >
        <div class="row">

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                
            </div>
            <div className='container-sm'>
            <section className="vh-100 gradient-custom">
                <div className="container py-5">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">New Project </h3>
                        <form>
                        <div class="mb-3">
                                <label class="form-label">Purpose</label>
                                <input type="text" class="form-control" id='purpose' name='purpose' value={posts.purpose} onChange={handleChange} required/>
                        </div>
                        <div class="mb-3">
                                <label class="form-label">Date</label>
                                <input className="form-control" type="Date" id="date"
                                    name="date"
                                    value={posts.date}
                                    onChange={handleChange}
                                    required />
                            </div>
                        <div class="mb-3">
                                <label class="form-label">Status</label>
                                <input type="text" class="form-control" id='status' name='status' value={posts.status} onChange={handleChange} required/>
                        </div>
                        <div class="mb-3">
                                <label class="form-label">Reason</label>
                                <input type="text" class="form-control" id='reason' name='reason' value={posts.reason} onChange={handleChange}  required/>
                        </div>
                        <div class="mb-3">
                                <label class="form-label">Actual Monetary Value</label>
                                <input type="text" class="form-control" id='actualMonetaryValue' name='actualMonetaryValue' value={posts.actualMonetaryValue} onChange={handleChange} required/>
                        </div>
                        <div class="mb-3">
                                <label class="form-label">Recived Money Amount</label>
                                <input type="text" class="form-control" id='recivedMoneyAmount' name='recivedMoneyAmount' value={posts.recivedMoneyAmount}  onChange={handleChange} required/>
                        </div>

                           
                            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Update</button>
                        </form>
                        </div>
                    </div>  
                    </div>
                </div>
                </div>
            </section>      
            
            </div>
            </main>
        </div>
    </div>
    </div>
  )
}

export default EditProject