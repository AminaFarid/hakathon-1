import React from 'react'

function Attendance() {
  return (
<>


<div className="container-fluid">
      <div className="row">
        {/* <div className="col-md-4">
          <Dashboard.sidebar />
        </div> */}
        
        <div className="col-md-8"> 
        <h1 style={{textAlign: 'center' , color:'#576bce'}}>Attendance Table</h1>
        <table class="table">
        
  <thead>
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">Course Id</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
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
export default Attendance;