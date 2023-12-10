import React from 'react';


function St() {
  return (
    
   
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-md-4">
          <Dashboard.sidebar />
        </div> */}
        
        <div className="col-md-8"> 
        <h1 style={{textAlign: 'center' , color:'#576bce'}}>Student Table</h1>
        <table class="table">
        
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>1, DEC 2023</td>
      <td><button>edit</button> <button>delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>2, DEC 2023</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>3, DEC 2023</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
}

export default St;