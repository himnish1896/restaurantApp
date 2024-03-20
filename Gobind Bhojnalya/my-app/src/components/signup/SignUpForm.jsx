import React, { useState } from 'react';
import './SignUpForm.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    full_name: '',
    phone_number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/login');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    axios.post('http://localhost:8081/signup', formData)
    .then(res => {
      navigate('/login');
      alert("User signup successfully");
    })
    .catch(err => {
      console.log(err)
      alert("An error occurred during signup. Please try again.");
    });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>User Sign-Up</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="full_name">Full Name:</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
        />

        <label htmlFor="phone_number">Phone Number:</label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />

        <button type="submit" className='hello' onClick={handleSubmit}>Sign Up</button>
        <p className='login'>Already registered? <span  onClick={loginHandler}>Login</span></p>
      
      </form>
    </div>
  );
};

export default SignUpForm;
