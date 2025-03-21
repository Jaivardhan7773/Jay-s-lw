import React from "react";
import {NavLink , useNavigate} from "react-router-dom";
import { useEffect , useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {toast} from "react-toastify";

const Navbar=()=>{
const navigate = useNavigate();
const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
});
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
  
    window.addEventListener('localStorageChange', handleStorageChange);
  
    return () => {
      window.removeEventListener('localStorageChange', handleStorageChange);
    };
  }, []);
  
  
  const handleLogout = () => {
  
    setUser(null);
  
 
    localStorage.removeItem('user');
  
    toast.success("logged out successfully");
    window.location.reload();
   navigate('/');
  };

  const handlePayment = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.email) {
      toast.success('Login first.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/premium', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        user.isPremium = true; 
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('You are now a premium user.');
        window.location.reload();
     
      } else {
        toast.error(data.message || 'Payment failed. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Server error. Try again later.');
    }
  };
  

  
    return(
        <>


<nav className="navbar navbar-expand-lg bg-white shadow-sm  ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/3313/3313498.png"  alt="Logo" style={{maxHeight:"50px",maxWidth:"50px"}} className="rounded-circle img-fluid"/>
      </a>
<button 
  className="navbar-toggler bg-dark ms-auto" 
  type="button" 
  data-bs-toggle="collapse" 
  data-bs-target="#navbarNav" 
  aria-controls="navbarNav" 
  aria-expanded="false" 
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>


      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink
            className="nav-link active"
            aria-current="page"
            to="/"
          >
            HOME
          </NavLink>
        </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Free Courses
            </a>
            <ul className="dropdown-menu">
             
            <li>
            <NavLink className="dropdown-item" to="/course/html-5">
    HTML 5
  </NavLink>
            </li>
         <li>
  <NavLink className="dropdown-item" to="/course/css">
    CSS
  </NavLink>
</li>
<li>
  <NavLink className="dropdown-item" to="/course/javascript">
    JAVASCRIPT
  </NavLink>
</li>
<li>
  <NavLink className="dropdown-item" to="/course/react">
    REACT
  </NavLink>
</li>
<li>
  <NavLink className="dropdown-item" to="/course/node-js">
    NODE JS
  </NavLink>
</li>
<li>
  <NavLink className="dropdown-item" to="/course/express">
    EXPRESS
  </NavLink>
</li>
          
            </ul>
          </li>
       
          <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle "
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Our centers</a>
          <ul className="dropdown-menu ">
            <li>
              <NavLink className="dropdown-item " to="/center/chandigarh">
                CHANDIGARH
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item " to="/center/jaipur">
              JAIPUR
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item " to="/center/delhi">
                DELHI
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item " to="/center/banglour">
                BANGLOUR
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item " to="/center/mohali">
MOHALI              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item " to="/center/canada">
                CANADA
              </NavLink>
            </li>

          </ul>
        </li>
       
          <li className="nav-item">
          <NavLink className="nav-link " to="/Style">
            All courses
          </NavLink>
        </li>
        <li className="nav-item">
        <button className="nav-link" onClick={handlePayment}>Buy Premium Access</button>

        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/manage-users">
            Admin Panel
          </NavLink>
        </li>
        </ul>
     
        <div className="anyy">
        {user ? (
  <div className="dropdown dropyy me-5">
    <span
      className="btn btn-outline-dark rounded-pill mx-1 auth dropdown-toggle"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Hey, {user.name} <img src="https://cdn-icons-png.flaticon.com/128/9131/9131529.png" alt="logout" style={{maxHeight:"20px",maxWidth:"20px"}} className="rounded-circle img-fluid"/>
    </span>
    <ul className="dropdown-menu droppymenu">
    
      <li className="nav-item">
  <button className="btn btn-outline-dark ms-1 mb-1 rounded-pill" onClick={() => navigate('/profile')}>
  <img src="https://cdn-icons-gif.flaticon.com/14251/14251527.gif" alt="logout" style={{maxHeight:"20px",maxWidth:"20px"}} className="rounded-circle img-fluid"/>
    View Profile
  </button>
</li>

<li className="nav-item">
  <button className="btn btn-outline-dark ms-1 rounded-pill" onClick={() => navigate('/CourseDetails')}>
  <img src="https://cdn-icons-gif.flaticon.com/12743/12743770.gif" alt="logout" style={{maxHeight:"20px",maxWidth:"20px"}} className="rounded-circle img-fluid"/>
   My Courses
  </button>
</li>

<li>
        <button
          className="mt-1  btn btn-outline-danger ms-1 rounded-pill"
          onClick={handleLogout}
        >
          <img src="https://cdn-icons-png.flaticon.com/128/15181/15181112.png" alt="logout" style={{maxHeight:"20px",maxWidth:"20px"}} className="rounded-circle img-fluid"/>
          Logout
        </button>
      </li>
    </ul>
  </div>
) : (
  <div className="dropdown dropyy mx-3">
    <a
      className=" dropdown-toggle btn btn-outline-dark rounded-pill mx-1 auth toggle-btn"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Sign up/login
    </a>
    <ul className="dropdown-menu droppymenu">
      <li>
        <NavLink
          to="/Signin"
          className="dropdown-item  btn btn-outline-dark rounded-pill mx-1 "
        >
          SignUp
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Login"
          className="dropdown-item  btn btn-outline-dark rounded-pill mx-1  "
        >
          Login
        </NavLink>
      </li>
    </ul>
  </div>
)}

</div>


     
      </div>
    </div>
  </nav>




{/* Carousel starts */}





    {/* corousel ends here */}
        </>
        
    )
}

export default Navbar;