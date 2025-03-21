import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseDetails = () => {
  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem('user'));
  const userEmail = user ? user.email : null;
  const courseIds = Array.isArray(JSON.parse(localStorage.getItem(`selectedCourses_${userEmail}`)))
    ? JSON.parse(localStorage.getItem(`selectedCourses_${userEmail}`))
    : [];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await Promise.all(
          courseIds.map(async (courseId) => {
            const response = await axios.get(`http://localhost:5000/courses/${courseId}`);
            return response.status === 200 ? response.data : null;
          })
        );
        setCourses(fetchedCourses.filter(course => course !== null));
      } catch (error) {
        console.error('Error:', error);
        alert('Server error. Try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (courseIds.length > 0) {
      fetchCourses();
    } else {
      setLoading(false);
    }
  }, [courseIds]);

  const handleDelete = async (courseId) => {
    if (!courseId) {
      console.error('No course ID found for deletion.');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/getSelectedCourses/${userEmail}/${courseId}`);
      if (response.status === 200) {
        const updatedCourseIds = courseIds.filter((id) => id.toString() !== courseId.toString());
        localStorage.setItem(`selectedCourses_${userEmail}`, JSON.stringify(updatedCourseIds));
        setCourses(courses.filter((course) => course._id.toString() !== courseId.toString()));
      } else {
        console.error('Failed to delete course:', response.data.message);
      }
    } catch (error) {
      console.error('Failed to delete course:', error);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (courses.length === 0) {
    return <h2>No courses selected yet.</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {courses.map((item, index) => (
          // <div className="col-md-4 mb-4" key={index}>
          //   <div className="card h-100">
          //     <img src={item.imageUrl} className="card-img-top" alt={item.title} />
          //     <div className="card-body">
          //       <h2 className="card-title">{item.title}</h2>
          //       <p className="card-text">{item.description}</p>
          //       <button 
          //         className="btn btn-danger"
          //         onClick={() => handleDelete(item._id)}
          //       >
          //         Delete this
          //       </button>
          //     </div>
          //   </div>
          // </div>

<div className="col-md-4 mb-4">
<div className="card h-100 shadow-lg rounded overflow-hidden border-0">
  <img src={item.imageUrl} className="card-img-top p-3" style={{maxHeight:"300px"}} alt={item.title} />
  <div className="card-body text-center">
    <h5 className="card-title fw-bold">{item.title}</h5>
    <p className="card-text text-muted">{item.description}</p>
    <div className="d-flex justify-content-between align-items-center d-flex mb-3">
      <span className="text-primary fw-bold"> 6 hours</span>

      <span className={`badge px-3 py-2 rounded-pill ${item.difficulty === 'Beginner' ? 'bg-success' : item.difficulty === 'Intermediate' ? 'bg-warning text-dark' : 'bg-danger'}`}>Beginner</span>
    </div>
    <button className="btn btn-dark w-100 fw-bold"   onClick={() => handleDelete(item._id)}>Delete this course</button>
  </div>
</div>
</div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
