

import MyNabvar from "./home/nabvar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyHome from "./home/home";
import StudentForm from "./home/student";
import CourseForm from "./home/course";
import AttendanceForm from "./home/attendance";

import Dashboard from "./home/dashboard";
import St from "./home/studentTable";
import Attendance from "./home/attendanceTable";
import Ct from "./home/courseTable";







function App() {


  return (
    <>
  
  <Router>
  <MyNabvar/>
  <Routes>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/home" element={<MyHome/>}/>
  <Route path="/student" element={<StudentForm/>}/>
  <Route path="/course" element={<CourseForm/>}/>
  <Route path="/attendance" element={<AttendanceForm/>}/>
  <Route path="/studentTable" element={<St/>}/>
  <Route path="/attendanceTable" element={<Attendance/>}/>
  <Route path="/courseTable" element={<Ct/>}/>

  </Routes>
  </Router>
    </>
  );
}

export default App;
