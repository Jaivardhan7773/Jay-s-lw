import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import axios from 'axios';

const CourseVideo = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  // Redirect if not logged in
  useEffect(() => {
    if (!user || !user.isLoggedIn) {
      alert('You must be logged in to access this page.');
      navigate('/login');
    }
  }, [user, navigate]);

  const videoUrls = {
    "html-5": "https://www.youtube.com/watch?v=k2DSi1zGEc8",
    "css": "https://www.youtube.com/embed/ESnrn1kAD4E",
    "javascript": "https://www.youtube.com/embed/rfObCuGLSek",
    "react": "https://www.youtube.com/embed/CgkZ7MvWUAA",
    "node-js": "https://www.youtube.com/embed/BLl32FvcdVM",
    "express": "https://www.youtube.com/embed/7H_QH9nipNs"
  };

  const videoUrl = videoUrls[title] || videoUrls["html-5"];

  const fetchComments = async () => {
    try {
      const res = await axios.get(`https://jays-lw.onrender.com/comments/${title}`);
      setComments(res.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You need to be logged in to comment.");
      return;
    }
    try {
      await axios.post('http://localhost:5000/comments', {
        courseTitle: title,
        name: user.name,
        comment: comment
      });
      setComment('');
      fetchComments();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{title.toUpperCase()} Course</h1>
      <p className="text-center">
        Here you can watch the best video available on the internet related to the {title} course.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactPlayer url={videoUrl} controls width="80%" playing={false} />
      </div>
      
      <div className="mt-4">
        <h4>Comments:</h4>

        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3 d-flex">
            <textarea
              className="form-control fs-5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              required
            />
            <hr className="border border-dark border-1 opacity-50 mb-5" />
            <button type="submit" className="btn btn-primary">Comment</button>
          </div>
        </form>
        
        <ul className="list-unstyled">
          {comments.map((com, index) => (
            <li key={index} className="mb-5">
              <h4 className='mb-3'>
                <img 
                  src="https://cdn-icons-png.flaticon.com/128/9131/9131529.png" 
                  alt="logout" 
                  style={{maxHeight:"30px",maxWidth:"30px"}} 
                  className="rounded-circle img-fluid"
                /> 
                {com.name}:
              </h4>
              {com.comment}
              <hr className="border border-dark border-1 opacity-50 mb-5" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseVideo;
