
import React, { useState } from 'react';


const CourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add additional logic here (e.g., save to database)
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formHeading}>Course Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Course Name:
          <input
            type="text"
            name="courseName"
            placeholder='Course Name'
            value={formData.courseName}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Course Code:
          <input
            type="text"
            name="Course Code"
            placeholder='Course Code'
            value={formData.instructorName}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Description:
          <input
            type="text"
            name="Description"
            placeholder='Description'
            value={formData.duration}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: '#576bce',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    
    borderRadius: '8px',
    marginTop: '50px',
  },
  formHeading: {
    textAlign: 'center',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '10px',
    width: '100%',
    textAlign: 'left',
    fontWeight: 'bold',
    color:'white'
  },
  input: {
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid black',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: 'white',
   
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};



export default CourseForm;
