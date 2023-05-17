import React,{Component} from "react";
import axios from "axios";



export default class Viewpacks extends Component{


   constructor(props){

       super(props);

       this.state={

        packages:[] //initialize array
       };

   }

  componentDidMount(){ 

   this.retrivePackages();
  }
  retrivePackages(){

   axios.get("http://localhost:8060/package/package").then(res=>{

      if(res.data.success){
          this.setState({

            packages:res.data.existingPackage

          });

          console.log(this.state.packages)

      }


      
  
   });
 

  }

 


  onDelete = (id) =>{
    axios.delete(`http://localhost:8060/package/package/delete/${id}`).then((res)=>{
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
   axios.get("http://localhost:8060/package/package").then(res=>{

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
      
      <div className="container">
<div style={myStyle}>
<div className="row" style={{marginTop:-60, marginBottom:50, marginLeft:'200px'}}>
         <div className="col-lg-9 mt-2 mb-2 text-secondary" style={{marginLeft:'190px'}}>
            <h1><strong>Search your Package type here</strong>-</h1>
            
  
         </div>
         
         <div className="col-lg-3 mt-2 mb-2" class="text-center">
            
          
               <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchTerm"
                onChange={this.handleTextSearch}
                style={{width:'600px', marginLeft:'200px'}}
               
               ></input>
</div>
</div>
</div>
      <div>

      <h3 aligh="center" style={{marginTop:30}}>Tour Package List</h3>
      <table className="table  table-hover table-dark " style={{marginTop:37}}>
      <thead className=" thead-dark" >
      <tr >
           <th scope="col" style={{width:'90px'}}>Package ID</th>
           <th scope="col"style={{width:'120px'}}>Package Type</th>
           <th scope="col">Package Name</th>
           <th scope="col">Day_Range</th>
           <th scope="col" style={{width:'120px'}}>Price_Range</th>
           <th scope="col" >Other_Details</th>
           
           <th colSpan="1" style={{width:'135px'}}> Action</th>
           <th scope="col"style={{width:'50px'}}></th>  
  
  
      </tr>
     </thead>
     <tbody style={{height:'65px'}}>
     {this.state.packages.map((packages) =>(
                      
                      <tr className="table-secondary"> {/*key={index}>
     <th scope="row">{index+1}</th>*/}


                        <td> 
                            <a href={`/package/${packages._id}`} style={{textDecoration:'none'}}>
                             {packages.package_id}
                             </a>
                             </td>
                        <td>{packages.package_type}</td>
                        <td>{packages.package_name}</td>
                        <td>{packages.day_range}</td>
                        <td>{packages.price_range}</td>
                        <td>{packages.other_details}</td>
                      

                      <td>
                        <a className="btn btn-warning" href={`/update/${packages._id}`}>
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a></td>
                        <td></td>
                        <td>
                       &nbsp;
                        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(packages._id)} style={{margin:'8px 0px 0px -100px'}}>
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </td><br></br>
                      
                       

                      </tr>

                     ))}
                    

                     
                     

          
                     </tbody>

     
  
      
  
     
     </table>
      </div>

      <button className="btn btn-success"><a href="/addPackage" style={{textDecoration:'none' , color:'white'}}>Create New Package</a></button>

    </div>


    )


 }


}