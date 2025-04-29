import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify"
const Car = () => {
  const [posts, setPosts] = useState([]);
  const handleBuy = async (courseId) => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user || !user.email) {
      alert('Please log in to buy premium courses');
      return;
    }
  
    const userEmail = user.email;
  
    try {
      await axios.post(`http://localhost:5000/saveSelectedCourses`, {
        email: userEmail,
        courseId: courseId, // Send only the new course
      });
  
      // Update local storage after a successful DB update
      const savedCourses = JSON.parse(localStorage.getItem(`selectedCourses_${userEmail}`)) || [];
      if (!savedCourses.includes(courseId)) {
        savedCourses.push(courseId);
        localStorage.setItem(`selectedCourses_${userEmail}`, JSON.stringify(savedCourses));
      }
  
      alert('Course added successfully!');
    } catch (error) {
      console.error('Error saving course:', error);
      toast.error('Failed to save course. Please try again.');
    }
  };
  
  
  
  

  useEffect(() => {
    AOS.init();

    // Fetching posts from the backend
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts`);
        setPosts(res.data);
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="containment">
        <div className="row mx-3 pt-5 cardmaincard">


          {/* First post */}
          {posts[0] && (
            <div className="col-lg-3 text-left childcol1 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[0].imageUrl} className="cardimg cardthree" alt="post" />
              </div>
              <p className="card-text">{posts[0].date}</p>
              <h1 className="card-title">{posts[0].title}</h1>
              <p className="card-text  text-dark">{posts[0].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[1].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <Link to={"/PremiumCourses"} className="btn btn-warning w-100 fw-bold">{posts[0].tags}</Link>
            </div>
          )}

{/* Second post */}
          <div className="col-lg-3   text-center  childcol2 cardchild ">
            <h1>,,</h1>
            <h1 className="card-title mb-3">
              "Success isn’t final, failure isn’t fatal.
              Keep pushing forward, learn, grow, and conquer your dreams."
            </h1>
            <p className="card-text">Dieter Rams</p>
          </div>

{/* Third post */}
          {posts[1] && (
            <div className="col-lg-3 text-left childcol3 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[1].imageUrl} className="  cardimg cardone" alt="post" />
              </div>
              <p className="card-text">{posts[1].date}</p>
              <h1 className="card-title">{posts[1].title}</h1>
              <p className="card-text text-dark">{posts[1].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[1].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[1]._id)}>
                  {posts[1].tags}
                </button>
            </div>
          )}


          {/*fourth post */}
          {posts[2] && (
            <div className="col-lg-3  childcol4 cardchild"><div style={{ overflow: "hidden" }}>
              <img src={posts[2].imageUrl} className="  cardimg cardtwo" /></div>
              <p className="card-text">{posts[2].date}</p>
              <h1 className="card-title mb-3">{posts[2].title}
              </h1>
              <p className="card-text  text-dark">{posts[2].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[2].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[2]._id)}>
                  {posts[2].tags}
                </button>
            </div>
          )}


          {/*fifth post */}
          {posts[3] && (
            <div className="col-lg-3 text-left childcol5 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[3].imageUrl} className="cardimg cardfour" alt="post" />
              </div>
              <p className="card-text">{posts[3].date}</p>
              <h1 className="card-title">{posts[3].title}</h1>
              <p className="card-text  text-dark">{posts[3].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[3].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[3]._id)}>
                  {posts[3].tags}
                </button>
            </div>
          )}


          {/*sixth post */}
          {posts[4] && (
            <div className="col-lg-3 text-left childcol6 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[4].imageUrl} className="cardimg cardfive" alt="post" />
              </div>
              <p className="card-text">{posts[4].date}</p>
              <h1 className="card-title">{posts[4].title}</h1>
              <p className="card-text  text-dark">{posts[4].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[4].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[4]._id)}>
                  {posts[4].tags}
                </button>
            </div>
          )}


          {/*seventh post */}
          {posts[5] && (
            <div className="col-lg-3 text-left childcol7 cardchild ">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[5].imageUrl} className="cardimg cardsix" alt="post" />
              </div>
              <p className="card-text">{posts[5].date}</p>
              <h1 className="card-title">{posts[5].title}</h1>
              <p className="card-text  text-dark">{posts[5].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[5].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[5]._id)}>
                  {posts[5].tags}
                </button>
            </div>
          )}


          {/*eighth post */}
          {posts[6] && (
            <div className="col-lg-3 text-left childcol8 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[6].imageUrl} className="card-img-top cardimg  cardseven" alt="post" />
              </div>
              <p className="card-text">{posts[6].date}</p>
              <h1 className="card-title">{posts[6].title}</h1>
              <p className="card-text  text-dark">{posts[6].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[6].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[6]._id)}>
                  {posts[6].tags}
                </button>
            </div>
          )}


          {/*ninth post */}
          {posts[7] && (
            <div className="col-lg-3 text-left childcol9 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[7].imageUrl} className="card-img-top cardimg cardeight" alt="post" />
              </div>
              <p className="card-text">{posts[7].date}</p>
              <h1 className="card-title">{posts[7].title}</h1>
              <p className="card-text text-dark">{posts[7].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[7].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[7]._id)}>
                  {posts[7].tags}
                </button>
            </div>
          )}


          {/*tenth post */}
                    {posts[8] && (
            <div className="col-lg-3 text-left  childcol10 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[8].imageUrl} className="card-img-top  cardimg cardeight" alt="post" />
              </div>
              <p className="card-text">{posts[8].date}</p>
              <h1 className="card-title">{posts[8].title}</h1>
              <p className="card-text text-dark">{posts[8].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[8].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[8]._id)}>
                  {posts[8].tags}
                </button>
            </div>
          )}


          {/*eleventh post */}
                    {posts[9] && (
            <div className="col-lg-3  childcol11 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[9].imageUrl} className="card-img-top  cardimg cardnine" alt="post" />
              </div>
              <p className="card-text">{posts[9].date}</p>
              <h1 className="card-title">{posts[9].title}</h1>
              <p className="card-text text-dark">{posts[9].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[9].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[9]._id)}>
                  {posts[9].tags}
                </button>
            </div>
          )}

           {/*twelth post */}
           {posts[10] && (
            <div className="col-lg-3 text-left childcol12 cardchild">
              <div style={{ overflow: "hidden" }}>
                <img src={posts[10].imageUrl} className="card-img-top  cardimg cardten" alt="post" />
              </div>
              <p className="card-text">{posts[10].date}</p>
              <h1 className="card-title">{posts[10].title}</h1>
              <p className="card-text text-dark">{posts[10].description}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{posts[10].date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">Category</span>
                </div>
              <button
                  className="btn btn-warning w-100 fw-bold"
                  onClick={() => handleBuy(posts[10]._id)}>
                  {posts[10].tags}
                </button>
            </div>
          )}

          {/* Repeat for other cards as needed */}
          <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center p-5">
    <li className="page-item">
      <a className="pagarrow" href="#" aria-label="Previous">
        <span aria-hidden="true">← </span>
      </a>
    </li>
    <li className="page-item"><a className=" paglink" href="#">1</a></li>
    <li className="page-item"><a className=" perpeg" href="#">2</a></li>
    <li className="page-item"><a className=" paglink hidepeg" href="#">3</a></li>
    <li className="page-item"><a className=" paglink hidepeg" href="#">4</a></li>
    <li className="page-item"><a className=" paglink hidepeg" href="#">5</a></li>
    <li className="page-item"><a className="paglink" href="#">...</a></li>
    <li className="page-item"><a className=" paglink" href="#">8</a></li>
    <li className="page-item">
      <a className="pagarrow" href="#" aria-label="next">
        <span aria-hidden="true">→</span>
      </a>
    </li>
  </ul>
</nav> 
        </div>
      </div>






    </>
  );
};

export default Car;
