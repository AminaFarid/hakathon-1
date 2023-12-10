import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function MyNabvar() {
  return (
    <>
     <Navbar bg="light" data-bs-theme="light">
        <Container>
        
          <Nav className="nabvar" style={{textAlign:'flex'}}>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link  as={Link} to="/student">Student</Nav.Link>
          <Nav.Link  as={Link} to="/course">Course</Nav.Link>
          <Nav.Link  as={Link} to="/attendance">Attendance</Nav.Link>
          <Nav.Link  as={Link} to="/dashboard">Dashboard</Nav.Link>
           
         

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNabvar;