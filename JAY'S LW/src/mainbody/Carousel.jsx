import React from 'react'

const Carousel = () => {
  return (
    <>
     <div id="carouselExampleCaptions" className="carousel slide   ">
  <div className="carousel-indicators mt-5">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/1c3a17c6-b3c4-4b28-a6af-f3c5602a06fa.webp" className="d-block w-100 carauselimg" alt="..."/>
      
      <div className=" d-none d-md-block position-absolute top-0 start-0">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/fc29e51e-07a8-48db-bc18-99c1ffcadc08.jpg" className="d-block w-100 carauselimg" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/d5a25fa6-4572-4b5e-8936-dccea03b4acb.webp" className="d-block w-100 carauselimg" alt="..." style={{maxHeight:"400px"}}/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel