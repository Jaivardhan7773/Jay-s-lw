import React from 'react'
import { Navigate, NavLink , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {toast} from "react-toastify";
const Signin = () => {

const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !password || !number) {
      setErrorMessage('All fields are required');
      return;
    }
    setErrorMessage(''); // Clear previous error

    try {
      const response = await fetch('https://jays-lw.onrender.com/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password  , number})
      });
      
      const data = await response.json();
      
      if (response.ok) {
         toast.success('Sign-up successful! You can now log in.');
        setName('');
        setEmail('');
        setPassword('');
        setNumber('');
        navigate('/Login');
        
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
   
  };

  return (
<>
<div className="container mt-5">
    <div className='text-center'>
           <button className='btn btn-outline-dark rounded-pill mx-1 auth toggle-btn'>
         <NavLink to="/Login" className="text-decoration-none custom-hover" >Login</NavLink>
     </button>
     <button className='btn btn-outline-dark rounded-pill  mx-1 auth toggle-btn'>
         <NavLink to="/Signin" className="text-decoration-none  custom-hover">SignUp</NavLink>
     </button>
         </div>
         <form  onSubmit={handleSubmit}>
    <input
      type="text"
      className="form-control border-0  shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="text"
      className="form-control  border-0 shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="password"
      className="form-control border-0 shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

<hr className="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="number"
      className="form-control border-0 shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Mobile Number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
    />
  
    <hr className="border border-dark border-1 opacity-50 mb-5" />

    {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}


    <div className="d-grid gap-2 mb-5">
      <button className="btn btn-dark mb-5 rounded-pill    toggle-btn " type="submit">
        SignUp now
      </button>
    </div>
    </form>
  </div>
</>
  )
}

export default Signin;