import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

const CreateProject = () => {


    const [postPlayload , setPostPlayloads] = React.useState({
        
        purpose : "",
        date: "",
        status: "",
        reason: "",
        actualMonetaryValue: "",
        recivedMoneyAmount: "",

    });

    const onChangeInput = (e) => {
        setPostPlayloads({
            ...postPlayload,
            [e.target.id]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(postPlayload)
            const res = await axios.post("http://localhost:8060/add", postPlayload);
            console.log(res);
            Swal.fire({
                title: "Success!",
                text: "Job added successfully",
                icon: 'success',
                timer: 2000,
                button: false,
            }).then(()=>{
                window.location.href = "/";
            })
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: "ob added unsuccessfully",
                icon: 'warning',
                timer: 2000,
                button: false,
            })
        }
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
                                <input type="text" class="form-control" id='purpose' name='purpose' onChange={(e) => onChangeInput(e)}  required/>
                        </div>
                        <div class="mb-3">
                                <label class="form-label">Date</label>
                                <input className="form-control" type="Date" id="date"
                                    name="date"
                                    onChange={(e) => onChangeInput(e)}
                                    required />
                            </div>
                        <div class="mb-3">
                                <label class="form-label">Status</label>
                                <input type="text" class="form-control" id='status' name='status' onChange={(e) => onChangeInput(e)} required/>
                        </div>
                        <div class="mb-3">
                                <label class="form-label">Reason</label>
                                <input type="text" class="form-control" id='reason' name='reason' onChange={(e) => onChangeInput(e)} required/>
                        </div>
                        <div class="mb-3">
                                <label class="form-label">Actual Monetary Value</label>
                                <input type="text" class="form-control" id='actualMonetaryValue' name='actualMonetaryValue' onChange={(e) => onChangeInput(e)} required/>
                        </div>
                        <div class="mb-3">
                                <label class="form-label">Recived Money Amount</label>
                                <input type="text" class="form-control" id='recivedMoneyAmount' name='recivedMoneyAmount' onChange={(e) => onChangeInput(e)} required/>
                        </div>

                           
                            <button type="submit" class="btn btn-primary" onClick={(e)=> onSubmit(e)}>Create</button>
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

export default CreateProject
