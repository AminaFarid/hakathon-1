
import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Contact: '',
    Address: '',
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
    // Add additional logic here (e.g., API request to save data)
  };




  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formHeading}>Student Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Id:
          <input
            type="text"
            name=" Student Id"
            placeholder='Studend Id'
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="Name"
            placeholder='Name'
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
            Contact:
          <input
            type="Number"
            name="contact"
            placeholder='Phone #'
            value={formData.contact}
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
    backgroundColor: "#576bce",
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
    color:'white',
    marginBottom: '10px',
    width: '100%',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
    
  },
  submitButton: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};



export default StudentForm;
