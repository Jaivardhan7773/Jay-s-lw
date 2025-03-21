// src/pages/PaymentPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
   
    localStorage.setItem('hasPaid', true);

    
    navigate(-1); 
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Payment Required</h2>
      <p>Please complete the payment to access this page.</p>
      <button className="btn btn-primary" onClick={handlePayment}>
        Pay Now (Fake Payment)
      </button>
    </div>
  );
};

export default PaymentPage;
