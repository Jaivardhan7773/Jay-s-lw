import React  from "react";
import Subfooter from "./Subfooter";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Style = () => {
    const [posts, setPosts] = React.useState([]);
    useEffect(() => {
        axios
          .get("https://jays-lw.onrender.com/posts")
          .then((res) => setPosts(res.data))
          .catch((err) => {
            alert("Error fetching queries!");
            console.error(err);
          });
          
      }, []);
    return (
        <>
            <div style={{ backgroundColor: "#dcdde1" }}>
                <div class="container  mx-auto d-block text-center" style={{ maxWidth: "600px" }} >
                    <h1 class="card-title fs-1 pt-5 pb-2">All courses .</h1>
                    <h5 class="card-text aboutpara pb-5">
                        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
                        incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla
                        ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.
                    </h5>
                </div></div>

          
                <div className="container">
      <h2 className="text-center my-4">Cards</h2>
      <div className="row">
        {posts.map((post) => (
          <div key={post._id} className="col-md-4 mb-4" >
            <div className="card h-100 shadow-lg rounded overflow-hidden border-0">
              <img
                src={post.imageUrl}
                className="card-img-top p-3"
                style={{ maxHeight: "300px", objectFit: "cover" }}
                alt={post.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{post.title}</h5>
                <p className="card-text text-dark fs-5">{post.description}</p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary fw-bold">{post.date}</span>
                  <span className="badge px-3 py-2 rounded-pill bg-success">{post.level}</span>
                </div>
                
   
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

            <Subfooter/>
            <Footer/>
        </>
    )
}
export default Style;