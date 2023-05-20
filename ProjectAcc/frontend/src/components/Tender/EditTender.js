import React, { Component } from 'react';
import axios from 'axios';

export default class EditTender extends Component {

    constructor(props){
        super(props);
        this.state={
            tenderId:"",
            tName:"",
            tValue:"",
            email:"",
            number:""
        }
    }

    handleInputchange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }

    onSubmit = (e) =>{


        e.preventDefault();
        const id = this.props.match.params.id;
        const {tenderId,tName,tValue,email,number} = this.state;

        const data ={
            tenderId:tenderId,
            tName:tName,
            tValue:tValue,
            email:email,
            number:number

        }
        console.log(data)

        axios.put(`/post/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Post Updated Successfully")
                this.setState(
                    {
                        tenderId:"",
                        tName:"",
                        tValue:"",
                        email:"",
                        number:""

                    }
                )
             }    
        })



    }


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    tenderId:res.data.post.tenderId,
                    tName:res.data.post.tName,
                    tValue:res.data.post.tValue,
                    email:res.data.post.email,
                    number:res.data.post.number,
                });

                console.log(this.state.post);
            }

        });
    }


    render() {
        return (
          <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3  font-weight-normal">Edit Tender</h1> 
            <form className="needs-validation" noValidate>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Tender Number</label>
                    <input type="text"
                    className="form-control"
                    name="tenderId"
                    placeholder="Enter Tender Number"
                    value={this.state.tenderId}
                    onChange={this.handleInputchange}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Tender Name</label>
                    <input type="text"
                    className="form-control"
                    name="tName"
                    placeholder="Enter Tender Name"
                    value={this.state.tName}
                    onChange={this.handleInputchange}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Tender Value</label>
                    <input type="text"
                    className="form-control"
                    name="tValue"
                    placeholder="Enter Tender Value"
                    value={this.state.tValue}
                    onChange={this.handleInputchange}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Email Address</label>
                    <input type="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email Address"
                    value={this.state.email}
                    onChange={this.handleInputchange}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >contact Number</label>
                    <input type="text"
                    className="form-control"
                    name="number"
                    placeholder="Enter Contact Number"
                    value={this.state.number}
                    onChange={this.handleInputchange}/>
                </div>
    
    
    
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Update
                </button>
    
    
            </form>         
    
           
            </div>
        )
      }
}
