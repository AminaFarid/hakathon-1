import './dashboard.css'
import { PiStudentFill } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaClipboardCheck } from "react-icons/fa";


function Dashboard(){
   
 
    return(
    <div>
       
  <div class="dashboard">
    <nav class="sidebar">
      <div class="logo"><FaClipboardCheck /> Student Management System</div>
      <ul>
        <li>  <PiStudentFill /> <a href="/studentTable" >Student</a> </li>
      
        <li><SiBookstack /> <a href="/courseTable">Course</a></li>
        <li><RiAccountBoxFill /> <a href="/attendanceTable">Attendance</a></li>
        <li><a href="/home">Home</a></li>
      
      </ul>
    </nav>

    <div class="main-content">
      <header>
        <h1 style={{color:"#576bce"}}>Dashboard</h1>
        
      </header>

      <div class="content">
      
       <div class='row'>
        
       <div class="card">
         <div class="header">
            <h2>Student</h2>
        </div>
            <div class="container">
            <h4><br/>Total Students<br/><PiStudentFill /></h4>
            
         </div>
       </div>&nbsp;&nbsp;&nbsp;
       <div class="card">
         <div class="header">
            <h2>Course</h2>
        </div>
            <div class="container">
            <h4><br/>Total Courses<br/><SiBookstack /></h4>
            
         </div>
       </div>&nbsp;&nbsp;&nbsp;
       <div class="card">
         <div class="header">
            <h2>Attendance</h2>
        </div>
            <div class="container">
            <h4><br/>Total Record<br/><RiAccountBoxFill /></h4>
            
         </div>
       </div>
       
       </div>
       
    
     </div>
     </div>

    

    {/* ****chart****************** */} 



  

  
    
  </div>
    </div>
    )};
export default Dashboard;