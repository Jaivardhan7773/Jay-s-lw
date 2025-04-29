import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Moved outside for better scope management
  const fetchUserCourses = async (userEmail) => {
    try {
      const res = await axios.get(`http://localhost:5000/getSelectedCourses/${userEmail}`);
      localStorage.setItem(`selectedCourses_${userEmail}`, JSON.stringify(res.data.selectedCourses));
    } catch (error) {
      console.error('Error fetching user courses:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Both email and password are required');
      return;
    }
    setErrorMessage('');

    try {
      const response = await axios.post(`http://localhost:5000/auth`, {
        email,
        password
      });
    
      const data = response.data;
    
      localStorage.setItem('user', JSON.stringify({
        _id: data.user._id,
        name: data.user.name,
        email: data.user.email,
        number: data.user.number,
        isLoggedIn: true,
        isAdmin: data.user.isAdmin
      }));
    
      fetchUserCourses(data.user.email);
    
      if (data.user.isAdmin) {
        localStorage.setItem('adminEmail', data.user.email);
      }
    
      window.dispatchEvent(new Event("localStorageChange"));
      toast.success('Login successful!');
      navigate('/');
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className='text-center'>
          <button className='btn btn-outline-dark rounded-pill mx-1 auth toggle-btn'>
            <NavLink to="/Login" className="text-decoration-none custom-hover">Login</NavLink>
          </button>
          <button className='btn btn-outline-dark rounded-pill  mx-1 auth toggle-btn'>
            <NavLink to="/Signin" className="text-decoration-none custom-hover">SignUp</NavLink>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control border-0 shadow-none bg-transparent"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <hr className="border border-dark border-1 opacity-50 mb-5" />
          <input
            type="password"
            className="form-control shadow-none border-0 bg-transparent"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr className="border border-dark border-1 opacity-50 mb-5" />
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="d-grid gap-2 mb-5">
            <button className="btn btn-dark mb-5 rounded-pill mx-1 toggle-btn" type="submit">
              Login now
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;
