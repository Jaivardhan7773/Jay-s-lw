import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminManagement = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [adminEmail, setAdminEmail] = useState(localStorage.getItem('adminEmail'));

  const [posts, setPosts] = useState([]);
  const [queries, setQueries] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
    imageUrl: "",
    date: "",
    level: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };


  // creating a new course
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://astra-ul2e.onrender.com/posts`, post);
      setMessage("Post added successfully!");
      setPost({ title: "", description: "", imageUrl: "", date: "", level: "" }); // Reset form
    } catch (error) {
      setMessage("Error adding post: " + error.response?.data?.message);
    }
  };


  // get all the courses from server
  useEffect(() => {
    axios
      .get(`https://astra-ul2e.onrender.com/posts`)
      .then((res) => setPosts(res.data))
      .catch((err) => {
        alert("Error fetching queries!");
        console.error(err);
      });
      
  }, []);

//  get all the users queries from the server
  useEffect(() => {
    axios.get(`https://astra-ul2e.onrender.com/GetQuery`).then((res) => setQueries(res.data))
    .catch((err) => alert("error fetching queries" , err))
  } ,[]);


  //change the course images
  const handleImageChange = async (id) => {
    const newImageUrl = prompt("Enter new image URL:");
    if (!newImageUrl) return;
      const res = await axios.put(`https://astra-ul2e.onrender.com/posts/${id}`, {
        imageUrl: newImageUrl,
      });
      setPosts(posts.map((post) => (post._id === id ? res.data : post)));
      alert("image updated ");
   
  }


 // admin authentication 
  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://astra-ul2e.onrender.com/admin/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          email: adminEmail
        }
      });

      if (response.status === 403) {
        setError('Access denied. Admins only.');
        navigate('/'); 
        return;
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

useEffect(() => {
  fetchUsers();
}, [adminEmail, navigate, fetchUsers]);


  useEffect(() => {
    const handleStorageChange = () => {
      setAdminEmail(localStorage.getItem('adminEmail'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  //deleting a user 
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`https://astra-ul2e.onrender.com/admin/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          email: adminEmail
        }
      });

      if (response.status === 403) {
        setError('Access denied. Admins only.');
        return;
      }

      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      setError('Failed to delete user');
    }
  };


  //making a another admin
  const makeAdmin = async (id) => {
    try {
      const response = await fetch(`https://astra-ul2e.onrender.com/admin/users/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          email: adminEmail
        },
        body: JSON.stringify({ isAdmin: true })
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(user => user._id === id ? updatedUser : user));
      } else {
        setError('Failed to make user admin');
      }
    } catch (err) {
      setError('Failed to make user admin');
    }
  };

  //removing an admin
  const removeAdmin = async (id) => {
    try {
      const response = await fetch(`https://astra-ul2e.onrender.com/admin/users/removeAdmin/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          email: localStorage.getItem('adminEmail')
        },
        body: JSON.stringify({ isAdmin: false })  
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(user => user._id === id ? updatedUser : user));
      } else {
        setError('Failed to remove admin status');
      }
    } catch (err) {
      setError('Failed to remove admin status');
    }
  };


   //this cancels a user subscription
  const cancelPlan = async (id) => {
    try {
      const response = await fetch(`https://astra-ul2e.onrender.com/admin/users/cancelPlan/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isPremium: false })  
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(user => user._id === id ? updatedUser : user));
      } else {
        setError('Failed to Cancel users Plan');
      }
    } catch (err) {
      setError('Failed to remove Plan status');
    }
  };


  // this delete a user's query
  const handleMarkAsRead = async (id) => {
      await axios.delete(`https://astra-ul2e.onrender.com/Query/${id}`);
      setQueries(queries.filter(query => query._id !== id));
      alert("Query marked as read and deleted successfully");
  
  };
  
  //this delete a course
  const handleDelete = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
  
    try {
      await axios.delete(`https://astra-ul2e.onrender.com/posts/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId)); // Remove from UI
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
 //this edits a course
  const handleEdit = async (post, field) => {
    let newValue = prompt(`Enter new ${field}:`, post[field]);
  
    if (newValue !== null && newValue.trim() !== "") {
      try {
        const updatedPost = { ...post, [field]: newValue };
        await axios.put(`https://astra-ul2e.onrender.com/posts/${post._id}`, updatedPost);
  
        setPosts(posts.map((p) => (p._id === post._id ? updatedPost : p)));
      } catch (error) {
        console.error(`Error updating ${field}:`, error);
      }
    }
  };
  


  return (
    <>






<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       User Management
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">      <div className="container mt-5">
      <h2 className="text-center mb-4">User Management</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped table-dark table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Admin Status</th>
            <th>Actions</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user._id)}
                    disabled={user.isAdmin}
                  >
                    Delete
                  </button>
                  <button className='btn btn-success mx-2'
                    onClick={() => makeAdmin(user._id)}
                    disabled={user.isAdmin}>
                    Make Admin
                  </button>
                  <button className='btn btn-warning mx-2'
                    onClick={() => removeAdmin(user._id)}
                    disabled={!user.isAdmin}>
                    Remove Admin
                  </button>
                  <button className='btn btn-warning mx-2'
                    onClick={() => cancelPlan(user._id)}
                    disabled={!user.isPremium}>
                    Cancel Plan
                  </button>

                </td>
                <td>{user.isPremium ? "Premium" : "User"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div></div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       User's Queries
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">      <div className='container'>
    {queries.length === 0 ? (
          <p>No queries found.</p>
        ) : (
          <table className="table table-striped table-dark table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query, index) => (
                <tr key={index}>
                  <td>{query.name}</td>
                  <td>{query.email}</td>
                  <td><a href=''>{query.website || "N/A"}</a></td>
                  <td style={{maxWidth:'400px'}}>{query.text}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleMarkAsRead(query._id)}>
                      Read and Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div></div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       Add a new course
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">      <div className="container mt-5">
      <h2 className="text-center mb-4">Create a New Course</h2>
      {message && <p className="alert alert-info">{message}</p>}
      <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={post.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={post.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            className="form-control"
            value={post.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={post.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Level</label>
          <select
            name="level"
            className="form-control"
            value={post.level}
            onChange={handleChange}
            required
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100 fw-bold">
          Add Post
        </button>
      </form>
    </div></div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Edit courses
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">      <div className="container">
  <h2 className="text-center my-4">Cards</h2>
  <div className="row">
    {posts.map((post, index) => (
      <div key={post._id} className="col-md-4 mb-4">
        <div className="card h-100 shadow-lg rounded overflow-hidden border-0">
          <img
            src={post.imageUrl}
            className="card-img-top p-3"
            style={{ maxHeight: "300px", objectFit: "cover" }}
            alt={post.title}
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{post.title}</h5>
            <p className="card-text text-muted">{post.description}</p>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary fw-bold">{post.date}</span>
              <span className="badge px-3 py-2 rounded-pill bg-success">{post.level}</span>
            </div>

            <button
              className="btn btn-warning w-100 fw-bold mb-2"
              onClick={() => handleImageChange(post._id)}
            >
              Change Image
            </button>
            {index >= 12 && (
                <>
                <button className="btn btn-info w-100 fw-bold mb-2" onClick={() => handleEdit(post, 'title')}>Edit Title</button>
                <button className="btn btn-secondary w-100 fw-bold mb-2" onClick={() => handleEdit(post, 'description')}>Edit Description</button>
                <button className="btn btn-primary w-100 fw-bold mb-2" onClick={() => handleEdit(post, 'date')}>Edit Date</button>
                <button className="btn btn-success w-100 fw-bold mb-2" onClick={() => handleEdit(post, 'level')}>Edit Level</button>
                <button className="btn btn-danger w-100 fw-bold" onClick={() => handleDelete(post._id)}>Delete</button>
              </>
              
              
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div></div>
    </div>
  </div>
</div>





    </>
  );
};

export default AdminManagement;
