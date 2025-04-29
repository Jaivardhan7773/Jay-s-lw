import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumCourse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPremium = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || !user.email) {
        alert('Login first.');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/premium`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'email': user.email
          }
        });

        if (response.status === 403) {
          alert('Access denied. This content is for premium users only.');
          navigate('/');
        } else if (!response.ok) {
          alert('Something went wrong.');
          navigate('/');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Server error. Try again later.');
        navigate('/');
      }
    };

    checkPremium();
  }, [navigate]);

  return (
    <>
      <div>
        <h1>Course Content</h1>
        <p>Only premium users can see this.</p>
      </div>
    </>
  );
};

export default PremiumCourse;
