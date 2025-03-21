import React from "react";
import Subfooter from './Subfooter';
import Footer from './Footer';
import { NavLink } from "react-router-dom";
const Contact =()=>{
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [website, setWebsite] = React.useState('');
    const [text, setText] = React.useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      if( !name || !email || !text){
        alert("All fields are required")
        return;
      }
      const response = await fetch('https://jays-lw.onrender.com/Query' , {
        method:"POST" , 
        headers :{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name , email , website , text})
      });
      const data = await response.json();
      if(response.ok){
        alert("Message sent successfully")
        setName('');
        setEmail('');
        setWebsite('');
        setText('');
      }
      else{
        alert(data.error || "Something went wrong!");
      }
    }
    return(
        <>
       
       

       <div style={{ background: "linear-gradient(135deg, #74b9ff, #a29bfe)" }}>
  <h1 className=" mb-5 text-center  text-light pt-5">Feel Free To Contact Us</h1>
  <h1 className=" fs-3 mt-5 mb-5  text-light mx-auto" style={{maxWidth:"900px"}}>
    Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat
    Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt
    commodo ea enim ullamco non voluptate consectetur minim aliquip Ut
    incididunt amet ut cupidatat.
  </h1>
  <p className=" mb-5 fs-5 mx-auto  text-light"  style={{maxWidth:"900px"}}>
    Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
    cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
    adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor
    irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui
    labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua
    ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in
    sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat
    in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis
    nostrud sed sed.
  </p>
  <div className="row">
    <div className="col-lg-6 text-center  text-light mb-5">
      <h1 className="card-title mb-3">Where to Find Us</h1>
      <span>1600 Amphitheatre Parkway</span>
      <br />
      <span>Mountain View, CA</span>
      <p>94043 US</p>
    </div>
    <div className="col-lg-6 text-center text-light ">
      <h1 className="card-title mb-3">Contact Info</h1>
      <span>contact@philosophywebsite.com</span>
      <br />
      <span>info@philosophywebsite.com</span>
      <p>Phone: (+1) 123 456</p>
    </div>
  </div>
  </div>
  <div className="container" style={{maxWidth:"1100px"}}>
  <div className="container mt-5">
    <h1 className="card-title mb-5">Send Your Querry</h1>
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      className="form-control shadow-none border-0 bg-transparent"
      id="formGroupExampleInput"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="text"
      className="form-control border-0 shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="text"
      className="form-control shadow-none border-0 bg-transparent"
      id="formGroupExampleInput"
      placeholder="Website(optional)"
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <textarea
      className="form-control  shadow-none border-0 bg-transparent"
      id="exampleFormControlTextarea1"
      rows={3}
      placeholder="enter your text"
      defaultValue={""}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <div className="d-grid gap-2 mb-5">
      <button className="btn btn-dark mb-5" type="submit">
        Send 
      </button>
    </div>
    </form>
  </div>
</div>


<Subfooter/>
<Footer/>
        </>
    
    )
}
export default Contact