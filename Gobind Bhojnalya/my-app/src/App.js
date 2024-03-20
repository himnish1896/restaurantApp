import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./components/Home";
import SignUpForm from "./components/signup/SignUpForm";
import LoginForm from "./components/Login/LoginForm";
import "./App.css";
import BookingForm from "./components/Book_table/BookingForm";

const App = () => (
  <div>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<SignUpForm />}></Route>
        <Route exact path="/login" element={<LoginForm />}></Route>
        <Route exact path="/bookTable" element={<BookingForm/>}></Route>
      </Routes>
    </Router>
  </div>
);

export default App;
