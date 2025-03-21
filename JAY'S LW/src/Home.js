import React from "react";
import Cards from './mainbody/Cards';
import Subfooter from "./mainbody/Subfooter";
import Footer from "./mainbody/Footer";
import Carousel from "./mainbody/Carousel";
const Home = () => {
  return (
    <>
    
 <Carousel/>


    {/* Carousel ends  */}

<Cards/>




      {/* cards ends here  */}

<Subfooter/>

     

{/* subfooter ends here  */}




<Footer/>
    </>

  )
}

export default Home;