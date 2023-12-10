
import React from 'react';

function Ct() {
  return (
<>
<div className="container-fluid">
      <div className="row">
        {/* <div className="col-md-4">
          <Dashboard.sidebar />
        </div> */}
        
        <div className="col-md-8"> 
        <h1 style={{textAlign: 'center' , color:'#576bce'}}>Course Table</h1>
        <table class="table">
        
  <thead>
    <tr>
      <th scope="col">Course Name</th>
      <th scope="col">Course Code</th>
      <th scope="col">Description</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      {/* <td><button>edit</button> <button>delete</button></td> */}
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

  </div>
      </div>
    </div>
    </>
  )
    };
    export default Ct;
