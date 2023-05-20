import React, {Component}  from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'


export default class Accounts extends Component {

  constructor(props){
  super(props);

  this.state={
    posts:[],
  };
  

}

componentDidMount(){
  this.retrievePosts();
}


//get
retrievePosts() {
  axios.get("http://localhost:8060/getall").then(res => {
    console.log(res.data); // Check the value of res.data

    if (res.data.success) {
      this.setState({
        posts: res.data.existingPosts
      });

      console.log(this.state.posts); // Check the value of this.state.posts
    }
  });
}


//search
handleTextSearch = (e) => {
  const searchTerm = e.currentTarget.value;
  const { posts } = this.state;
  this.filterContent(posts, searchTerm);
};

filterContent(posts, searchTerm) {
  const result = posts.filter(
    (post) =>
      post.status.toLowerCase().includes(searchTerm.toLowerCase())||
      post.purpose.toLowerCase().includes(searchTerm.toLowerCase())||
      post.reason.toLowerCase().includes(searchTerm.toLowerCase())||
      post.date.toLowerCase().includes(searchTerm.toLowerCase())
  );
  this.setState({ posts: result });
}


//report genetate
repotGen=()=>{

  const reportData = this.state.posts;

  const reportContent =`
   <html>
   <table class="table">
   <thead>
     <tr>
       <th scope="col">Project ID</th>
       
       <th scope="col">Date</th>

       <th scope="col">Purpose</th>
       <th scope="col">Status</th>
       <th scope="col">Reason</th>
       <th scope="col">Actual Monetary Value</th>
       <th scope="col">Received Money Amount</th>
     </tr>
   </thead>
   <tbody>
    ${this.state.posts.map((posts,index) =>(
       `<tr>
         <th scope="row">${index+1}</th>
         
         <td>${posts.date}</td>
         <td>${posts.purpose}</td>
         <td>${posts.status}</td>
         <td>${posts.reason}</td>
         <td>${posts.actualMonetaryValue}</td>
         <td>${posts.recivedMoneyAmount}</td>
         
         

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


//delete
deleteItem = async (postsID) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value === true) {
        axios.delete(`http://localhost:8060/delete/${postsID}`).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Your file has been deleted",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.href = "/";
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  } catch (err) {
    console.log(err.data.msg);
  }
}



  render() {
    
    return(
      <>
      <div className="container" style={{ marginTop:'20px' }}>
                <form class="form-inline my-2 my-lg-0">
                    <div className="row ">
                        <input class="form-control mr-sm-2 inputSearch" type="text" name='searchTerm' placeholder='Search Here ' onChange={this.handleTextSearch}/>&nbsp;
                        <a type="a" class="btn btn-primary inputSearch" href="/createPost">Add Projects</a>
                    </div>
                </form>
            </div>

       <div className='container' style={{ marginTop:'20px' }}>
        <h6>Devision ID: Kaduwela</h6>
        <h6>Account No: D00129</h6>
        <h1>All Projects</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Project ID</th>
              
              <th scope="col">Date</th>

              <th scope="col">Purpose</th>
              <th scope="col">Status</th>
              <th scope="col">Reason</th>
              <th scope="col">Actual Monetary Value</th>
              <th scope="col">Received Money Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr>
                <th scope="row">{index+1}</th>
                
                <td>{posts.date}</td>
                <td>{posts.purpose}</td>
                <td>{posts.status}</td>
                <td>{posts.reason}</td>
                <td>{posts.actualMonetaryValue}</td>
                <td>{posts.recivedMoneyAmount}</td>
                <td>
                <a href={`/updatePost/${posts._id}`} >
                <button type="button" class="btn btn-primary" style={{ margin:'5px' }}>Update</button>
                  </a>
                  &nbsp;
                  <button type="button" class="btn btn-danger"onClick={()=>this.deleteItem(posts._id)} >Delete</button>

                </td>

              </tr>


            ))}
           </tbody>
        </table>

        <button onClick={this.repotGen}  className="btn-report">Print</button>
      </div>
      
      </>
     
    )
  }
}

