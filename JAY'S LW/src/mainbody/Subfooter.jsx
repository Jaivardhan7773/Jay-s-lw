import React from "react";
const  Subfooter = () =>{
    return(
        <>
       <div className="row" style={{width:"100%"}}>
<div className="col-lg-8 subrowchild">
<div className="row  justify-content-center"><h1 className="card-title mt-3 mb-5 text-center">Popular Posts</h1>
<div className="card mb-3  border-0" style={{maxWidth:"400px"}}>
  <div className="row g-0 d-flex">
    <div className="col">
      <img src="https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid subfooterimages" alt="..."/>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title">
          Mongoose db is the best database for your code 
        </h5>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3  border-0" style={{maxWidth:"400px"}}>
  <div className="row g-0">
    <div className="col">
      <img src="https://plus.unsplash.com/premium_vector-1682310979404-d8b3a7789482?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid subfooterimages" alt="..."/>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title">C++ is one of the best language.</h5>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3  border-0" style={{maxWidth:" 400px"}}>
  <div className="row g-0">
    <div className="col">
      <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid  subfooterimages" alt="..."/>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title">the best designer in world "CSS".</h5>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3  border-0" style={{maxWidth:" 400px"}}>
  <div className="row g-0">
    <div className="col">
      <img src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid  subfooterimages" alt="..."/>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title">JavaScript the most function.</h5>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3 hidesubfooter  border-0" style={{maxWidth:" 400px"}}>
  <div className="row g-0">
    <div className="col">
      <img src="https://www.creativefabrica.com/wp-content/uploads/2022/12/03/SQL-Structured-Query-Language-icon-Graphics-50104174-1.jpg" className="img-fluid  subfooterimages" alt="..."/>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title">10 Interesting Facts About SQL.</h5>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 hidesubfooter  border-0" style={{maxWidth:" 400px"}}>
  <div className="row g-0">
    <div className="col">
      <img src="https://s3.amazonaws.com/media-p.slid.es/thumbnails/davissilverman/b74f41/the-rust-programming-language.jpg" className="img-fluid  subfooterimages" alt="..."/>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title">10 Interesting Facts About RUST.</h5>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
</div>


<div className="col-lg-3 text-center">
    <h1 className="card-title mt-3 subrowchild1"> About Astra</h1>
    <p className="card-title mt-5  fs-4">Unlock your potential with our e-learning platform. Designed for dedicated learners,
       we provide comprehensive courses, expert guidance, and real-world practice.
        Whether you're preparing for exams or mastering new skills, our resources empower you to succeed.
         Learn at your own pace, track progress, and achieve your dreams. Start today and transform your future

</p>
</div>

       </div>

       <h1 className="card-title text-center mt-5 mb-3">Find aur institute in your city</h1>
       <h6 className="text-center subtags">
       <button type="button" className="btn">CHANDIGARH</button>
<button type="button" className="btn ">JAIUR</button>
<button type="button" className="btn ">DELHI</button>
<button type="button" className="btn ">UDAIPUR</button>
<button type="button" className="btn ">KOLKATA</button>
<button type="button" className="btn ">SHIMLA</button>
<button type="button" className="btn ">SIKAR</button>
       </h6>
       <h6 className="text-center subtags mb-5">
       <button type="button" className="btn">MOHALI</button>
<button type="button" className="btn">KOTA</button>
<button type="button" className="btn">BANGLORE</button>
<button type="button" className="btn">CHENNAI</button></h6>

        </>
    );
}
export default Subfooter;