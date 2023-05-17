import React,{Component} from "react";
import axios from "axios";



export default class AllRequest extends Component{


   constructor(props){

       super(props);

       this.state={

        requests:[] //initialize array
       };

   }

  componentDidMount(){ 

   this.retrivePackages();
  }
  retrivePackages(){

   axios.get("http://localhost:8060/request/request").then(res=>{

      if(res.data.success){
          this.setState({

            requests:res.data.existingPackage

          });

          console.log(this.state.requests)

      }


      
  
   });
 

  }

 


  onDelete = (id) =>{
    axios.delete(`http://localhost:8060/request/delete/${id}`).then((res)=>{
      alert("Delete Successfull");
      this.retrivePackages();
      
    })
  }

///Filter /Search Mechod
filterContent(packages,searchTerm){

  const results=packages.filter((Package)=>Package.package_type.toLowerCase().includes(searchTerm));
  this.setState({packages:results});

}



handleTextSearch=(e)=>{

   const searchTerm=e.currentTarget.value;
   axios.get("http://localhost:8060/request/request").then(res=>{

    if(res.data.success){
       this.filterContent(res.data.existingPackage,searchTerm)
    }
});

};

  
 render(){

  const myStyle={
    backgroundImage: 
"url('./hd1.jpg')",
    height:'30vh',
    width:'2850px',
    marginTop:'-130px',
    marginLeft:'-50PX',
    fontSize:'50px',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
};

    return(
      
      <div className='container'>
      <p style={mystyle}>ALl REQUEST</p>
      <div style={{border:"4px solid Azure",padding: "40px",margin: "20px"}}>


      <MDBCol md="6">
    <div className="input-group md-form form-sm form-1 pl-0" style={{margin:"-32px 0px 20px 80px", padding:"5px 15px 0px 10px"}}>
      <div className="input-group-prepend">
        <span className="input-group-text purple lighten-3" id="basic-text1">
          <MDBIcon className="text-black" icon="search" />
        </span>
      </div>
      <input
        className="form-control my-0 py-1"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  </MDBCol>


    <button className='btn btn-info'>
      <a  href='/add' style={{textDecoration:'none', color:'black', margin:"0px 0px 0px 20px", padding:"0px 15px 0px 10px"}}>
                  <i className='fa fa-plus-circle'></i> &nbsp;Make New Request 
                </a> 
       </button>     

      <table className=" table table-light table-hover table-striped-columns table-sm" style={{margin:"60px 0px 0px 0px"}}> 
      
        <thead className="table table-dark "> 
          <tr>
          <th scope='col'> # </th>
            <th scope='col'> Division ID </th>
            <th scope='col'> Request Title </th>
            <th scope='col'> Action </th>
          </tr>
        </thead>

        <tbody className="table-success">
          {this.state.posts.map((posts, index)=>(
            <tr key={index}>

              <th scope='row'> {index+1} </th>

              <td> {posts.devisionID} </td>
              <td> {posts.title} </td>
              <td>

                  <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                  <i> view more</i> &nbsp; 
                </a>

                &nbsp;&nbsp;&nbsp;

                <a className='btn btn-warning' href={`/update/${posts._id}`}>
                  <i className='fas fa-edit'></i> &nbsp; 
                </a> 
                &nbsp;
                <a className='btn btn-danger' href='#'>
                  <i className='fas fa-trash-alt'></i> &nbsp;
                </a>

              </td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>

    </div>


    )


 }


}