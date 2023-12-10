
import React, { useState } from 'react';

const AttendanceForm = () => {
  const [formData, setFormData] = useState({
    student: '',
    course: '',
    date: '',
    status: 'present',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Attendance Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="student">
         Student Id:
          </label>
          <br />
          <select
            style={styles.select}
            name="student"
            id="student"
            value={formData.student}
            onChange={handleChange}
          >
            
            {/* Populate with your list of students */}
          
            <option value="Select">Select Student</option>
            <option value="Amina">Amina</option>
            <option value="Ayesha">Ayesha</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="course">
           Course Id:
          </label>
          <br />
          <select
            style={styles.select}
            name="course"
            id="course"
            value={formData.course}
            onChange={handleChange}
          >
            {/* Populate with your list of courses */}
            <option value="select">Select</option>
            <option value="course1">Web Development</option>
            <option value="course2">Graphic Designer</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="date">
            Date:
          </label>
          <br />
          <input
            style={styles.input}
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="status">
            Status:
          </label>
          <br />
          <select
            style={styles.select}
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <div>
          <button style={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
  
   backgroundColor: '#576bce',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '50px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {

    color:'white',
    marginBottom: '5px',
   
    fontWeight: 'bold'
    
  },
  select: {
    padding: '8px',
    borderRadius: '4px',
    // border: '1px solid #ccc',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    
    padding: '10px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  
    
  }
};

export default AttendanceForm;


