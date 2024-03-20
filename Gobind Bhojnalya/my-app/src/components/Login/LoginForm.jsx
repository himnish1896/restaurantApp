import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const navigate = useNavigate();

  const signupHandler = () => {
    navigate('/signup');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", loginData)
      .then((res) => {
        if (res.data.message === "Login successful") {
          navigate("/");
          alert("User login successfully");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        alert("An error occurred during login. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
      
        <button type="submit" className="logins">Login</button>
        <button type="button" onClick={signupHandler} 
        className="signup">Create new account</button>
      </form>
    </div>
  );
};

export default LoginForm;
