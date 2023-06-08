import React, { useState } from 'react';
import axios from 'axios';
function AddUser({onClose}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    eyeColor: '',
  });
  const [submittedData, setSubmittedData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData",formData)
    axios
    .post('https://dummyjson.com/users/add', formData)
    .then((response) => {
      console.log('Data successfully submitted:', response.data);
      onClose()
      setSubmittedData((prevSubmittedData) => [...prevSubmittedData, response.data]);
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        eyeColor: '',
      });
    })
    .catch((error) => {
      console.error('Error submitting data:', error);
    });
  };

  return (
    <div className='adduser'>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Eye Color:
          <input
            type="text"
            name="eyeColor"
            value={formData.eyeColor}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" className='addbutton'>Submit</button>
      </form>
    </div>
  );
}

export default AddUser;

