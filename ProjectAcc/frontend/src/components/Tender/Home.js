import React, { Component } from 'react';
import axios from 'axios';



export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };


  }

  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });

}


//report genetate
repotGen=()=>{

  const reportData = this.state.posts;

  const reportContent =`
   <html>
   <table class="table">
   <thead>
     <tr>
       <th scope="col">Tender ID</th>
       
       <th scope="col">Tender Name</th>

       <th scope="col">Tender Value</th>
       <th scope="col">Email</th>
       <th scope="col">Number</th>
       
     </tr>
   </thead>
   <tbody>
    ${this.state.posts.map((posts,index) =>(
       `<tr>
         <th scope="row">${index+1}</th>
         
         <td>${posts.tenderId}</td>
         <td>${posts.tName}</td>
         <td>${posts.tValue}</td>
         <td>${posts.email}</td>
         <td>${posts.number}</td>
        
         

       </tr>`


     ))}
    </tbody>
 </table>
   </html>
  
  `

  const printWindow = window.open("", "_blank");
  printWindow.document.write(reportContent);
  printWindow.document.close();
  printWindow.print();

}

onDelete = (id) =>{

    axios.delete(`/post/delete/${id}`).then((res) =>{
        alert("Deleted Successfully");
        this.retrievePosts();
    })
}


filterData(posts,searchKey){

const result = posts.filter((post) =>
post.tenderId.includes(searchKey) ||
post.tName.toLowerCase().includes(searchKey) ||
post.email.toLowerCase().includes(searchKey) ||
post.number.toLowerCase().includes(searchKey)

)

this.setState({posts:result})
}

handleSearchArea = (e) =>{

    const searchKey= e.currentTarget.value;

    axios.get("/posts").then(res =>{
        if(res.data.success){
         
            this.filterData(res.data.existingPosts,searchKey)
          }
        
      });
  
}

  render() {
    return (
      <div className="container" style={{backgroundColor: "#e6f2fa",height:'600px'}}>
        <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
                <h4>All Tenders</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
                <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}>

                </input>
            </div>
        </div>
        

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Tender</a></button>


        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tender Number</th>
              <th scope="col">Tender Name</th>
              <th scope="col">Tender Value</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.tenderId} 
                    </a>
                    </td>
                  <td>{posts.tName}</td>
                  <td>{posts.tValue}</td>
                  <td>{posts.email}</td>
                  <td>{posts.number}</td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

              </tr>

             )) }

          </tbody>

        </table>

        <button onClick={this.repotGen}  className="btn-report">Print</button>
      </div>
    )
  }
}
