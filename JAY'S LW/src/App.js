import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AdminManagement from "./AdminManagement";
import Audio from './mainbody/Audio';
import Contact from './mainbody/Contact';
import Aboutus from "./mainbody/Aboutus";
import Category from "./mainbody/Category";
import Vedio from "./mainbody/Vedio";
import Gallery from "./mainbody/Gallery";
import Standard from "./mainbody/Standard";
import Style from "./mainbody/Style";
import Login from "./auth/Login";
import Signin from "./auth/Signin";
import Profile from './Profile';
import CourseVideo from "./mainbody/CourseVedio";
import PaymentPage from "./PaymentPage";
import CenterLocation from "./mainbody/CenterLocation";
import PremiumCouse from "./PremiumCouse";
import CourseDetails from "./CourseDetails";
import { ToastContainer } from "react-toastify";

function App() {
  const [statusMessage, setStatusMessage] = useState("Checking server status...");
  const [loading, setLoading] = useState(true);

  //this checks if the server is live or not
  const checkServerStatus = async () => {
    try {
      const response = await fetch('http://localhost:5000/ping');
      if (response.ok) {
        setStatusMessage("Server is up and running!");
        setLoading(false);
      } else {
        startCountdown();
      }
    } catch (error) {
      startCountdown();
    }
  };

  const startCountdown = () => {
    let countdown = 3;
    const countdownInterval = setInterval(() => {
      setStatusMessage(`Retrying in ${countdown}...`);
      countdown--;
      if (countdown < 1) {
        clearInterval(countdownInterval);
        checkServerStatus();
      }
    }, 1000);
  };


  useEffect(() => {
    checkServerStatus();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="text-center text-muted">
          {statusMessage}
        </div>
      </div>
    );
  }
  return (
    <>
    <ToastContainer autoClose={3000} position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path="/Category" element={<Category></Category>}></Route>
        <Route path="/Vedio" element={<Vedio></Vedio>}></Route>
        <Route path="/Audio" element={<Audio></Audio>}></Route>

        <Route path="/Standard" element={<Standard></Standard>}></Route>
        <Route path="/Style" element={<Style></Style>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signin" element={<Signin></Signin>}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/:title" element={<CourseVideo />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/center/:title" element={<CenterLocation />} />
        <Route
          path="/dashboard"
          element={
            <PaymentPage>
              <Gallery />
            </PaymentPage>
          }
        />
        <Route
          path="/admin/manage-users"
          element={
            JSON.parse(localStorage.getItem('user'))?.isAdmin
              ? <AdminManagement/>
              : <Login/>
          }
        />
        <Route path="/PremiumCourses" element={<PremiumCouse />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />

      </Routes>


    </>
  );
}
export default App;
