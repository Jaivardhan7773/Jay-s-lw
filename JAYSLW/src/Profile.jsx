import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [userCity, setUserCity] = useState('-NA-');
  const [editMode, setEditMode] = useState({ name: false, email: false, number: false });
  const [updatedUser, setUpdatedUser] = useState({ 
    name: user?.name || 'NA',
    email: user?.email || 'NA',
    number: user?.number || '' // Keep it as a number or empty string for consistency
  });

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        setUserCity(response.data.city || '-NA-');
      } catch (error) {
        console.error('Error fetching user city:', error);
      }
    };

    fetchCity();
  }, []);

  const handleEdit = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleSave = async (field) => {
    setEditMode({ ...editMode, [field]: false });

    try {
      const response = await axios.put(
        `https://astra-ul2e.onrender.com/updateUser/${user._id}`,
        updatedUser
      );
      console.log(response.data);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (e, field) => {
    const value = field === 'number' ? e.target.value.replace(/\D/g, '') : e.target.value;
    setUpdatedUser({ ...updatedUser, [field]: value });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title">Profile Details</h3>
          
          {/* Name Field */}
          <p>
            <strong>Name:</strong>
            {editMode.name ? (
              <>
                <input 
                  type="text" 
                  value={updatedUser.name} 
                  onChange={(e) => handleChange(e, 'name')}
                />
                <button className="btn btn-success btn-sm ms-2" onClick={() => handleSave('name')}>Save</button>
              </>
            ) : (
              <>
                {updatedUser.name} 
                <img 
                  src='https://cdn-icons-png.flaticon.com/128/10336/10336582.png' 
                  className='mx-5' 
                  style={{maxHeight:"20px", maxWidth:"20px"}} 
                  onClick={() => handleEdit('name')}
                  alt="Edit"
                />
              </>
            )}
          </p>

          {/* Email Field */}
          <p>
            <strong>Email:</strong>
            {editMode.email ? (
              <>
                <input 
                  type="email" 
                  value={updatedUser.email} 
                  onChange={(e) => handleChange(e, 'email')}
                />
                <button className="btn btn-success btn-sm ms-2" onClick={() => handleSave('email')}>Save</button>
              </>
            ) : (
              <>
                {updatedUser.email} 
                <img 
                  src='https://cdn-icons-png.flaticon.com/128/10336/10336582.png' 
                  className='mx-5' 
                  style={{maxHeight:"20px", maxWidth:"20px"}} 
                  onClick={() => handleEdit('email')}
                  alt="Edit"
                />
              </>
            )}
          </p>

          {/* Mobile Number Field */}
          <p>
            <strong>Mobile No:</strong>
            {editMode.number ? (
              <>
                <input 
                  type="text" 
                  value={updatedUser.number} 
                  onChange={(e) => handleChange(e, 'number')}
                  maxLength={10} // Max length for phone number
                />
                <button className="btn btn-success btn-sm ms-2" onClick={() => handleSave('number')}>Save</button>
              </>
            ) : (
              <>
                {updatedUser.number || '-NA-'} 
                <img 
                  src='https://cdn-icons-png.flaticon.com/128/10336/10336582.png' 
                  className='mx-5' 
                  style={{maxHeight:"20px", maxWidth:"20px"}} 
                  onClick={() => handleEdit('number')}
                  alt="Edit"
                />
              </>
            )}
          </p>

          {/* City Field */}
          <p>
            <strong>Living City/Village/Town:</strong> {userCity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
