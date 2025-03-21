import React from "react";
const Footer = () => {
  return (
    <>
    <div className="footerbackground ">
    <footer className='text-light pt-5 pb-4'>
      <div className='container text-md-start'>
        <div className='row'>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold'>Astra jay</h6>
            <p>We understand that every student has unique needs and abilities, that’s why our curriculum is designed to adapt to your needs and help you grow!</p>
            <div className='d-flex gap-2'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' alt='Google Play' style={{maxHeight:'40px'}} className='img-fluid' />
              <img src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg' alt='App Store' className='img-fluid' />
            </div>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold'>Company</h6>
            <ul className='list-unstyled '>
              <li><a href='#' className='text-decoration-none text-light'>About Us</a></li>
              <li><a href='#' className='text-decoration-none text-light'>Contact Us</a></li>
              <li><a href='#' className='text-decoration-none text-light'>Careers</a></li>
              <li><a href='#' className='text-decoration-none text-light'>Blogs</a></li>
            </ul>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold'>Our Centres</h6>
            <ul className='list-unstyled'>
              <li><a href='#' className='text-decoration-none text-light'>New Delhi</a></li>
              <li><a href='#' className='text-decoration-none text-light'>Patna</a></li>
              <li><a href='#' className='text-decoration-none text-light'>Kota</a></li>
              <li><a href='#' className='text-decoration-none text-light'>View All</a></li>
            </ul>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold'>Popular Exams</h6>
            <ul className='list-unstyled'>
              <li><a href='#' className='text-decoration-none text-light'>IIT JEE</a></li>
              <li><a href='#' className='text-decoration-none text-light'>NEET</a></li>
              <li><a href='#' className='text-decoration-none text-light'>GATE</a></li>
              <li><a href='#' className='text-decoration-none text-light'>UPSC</a></li>
            </ul>
          </div>

          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold'>Let's get social:</h6>
            <div className='d-flex gap-3'>
              <a href='#'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' alt='Facebook' className='img-fluid' style={{maxHeight:"25px",maxWidth:"25px"}} /></a>
              <a href='#'><img src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' alt='Instagram' className='img-fluid'  style={{maxHeight:"25px",maxWidth:"25px"}}/></a>
              <a href='#'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968852.png' alt='YouTube' className='img-fluid'  style={{maxHeight:"30px",maxWidth:"30px"}}/></a>
              <a href='#'><img src='https://cdn-icons-png.flaticon.com/128/145/145807.png' alt='LinkedIn' className='img-fluid'  style={{maxHeight:"30px",maxWidth:"30px"}}/></a>
            
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div className="container-fluid bg-dark text-light py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12">
                        <h4>Know about Astra jay</h4>
                        <p>
                            Astra jay is an Indian online education platform, that provides accessible & comprehensive learning experiences to students of classes 6 to 12 and those preparing for JEE and NEET exams. We also provide extensive NCERT solutions, sample papers, NEET, JEE Mains, BITSAT previous year papers, which makes us a one-stop solution for all resources. Astra jay also caters to over 3.5 million registered students and over 78 lakh+ YouTube subscribers with 4.8 rating on its app.
                        </p>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <h4>We Stand Out because</h4>
                        <p>
                            We successfully provide students with intensive courses by India's qualified & experienced faculties. AJ strives to make the learning experience comprehensive and accessible for students of all sections of society. We believe in empowering every single student who couldn't dream of a good career in engineering and medical field earlier.
                        </p>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <h4>Our Key Focus Areas</h4>
                        <p>
                            Astra jay’s main focus is to create accessible learning experiences for students all over India. With courses like Lakshya, Udaan, Arjuna & many others, we have been able to provide a ready solution for lakhs of aspirants. From providing Chemistry, Maths, Physics formulae to giving e-books of eminent authors, AJ aims to provide reliable solutions for student prep.
                        </p>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <h4>What Makes Us Different</h4>
                        <p>
                            Astra jay strives to develop a comprehensive pedagogical structure for students, where they get a state-of-the-art learning experience with study material and resources. Apart from catering students preparing for JEE Mains and NEET, AJ also provides study material for each state board like Uttar Pradesh, Bihar, and others.
                        </p>
                    </div>
                </div>
                <hr className="bg-light" />
                <div className="row">
                    <div className="col-md-6">
                        <a href="#" className="text-light">Privacy Policy</a> | 
                        <a href="#" className="text-light">Terms of use</a>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0">Copyright © 2025 Jayvardhan Rathore Limited All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    </>)
}
export default Footer;