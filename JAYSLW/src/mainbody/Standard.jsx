import React from "react";
import Subfooter from './Subfooter';
import Footer from './Footer';
import Comment from "./Comment";

const Standard =()=>{
    return(
        <>
       <div class="container">
    <h1 class="card-title fs-1 text-center pt-5">This Is An Standard Post Format.</h1><p class="mb-5 card-text  text-center">
    <span class="mb-5 card-text light text fw-lighter text-secondary text-center">December 16, 2017 in </span>&nbsp;&nbsp;
    <span class="mb-5 card-text  text-center fst-italic fw-medium pt-5"> Lifestyle Travel</span></p>
       </div>

       <div class="container text-center">
       <img src="https://images.unsplash.com/photo-1496150590317-f8d952453f93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:"1000px",maxHeight:"400px"}} class="img-fluid pb-5"/>
       <div class="container pt-lg-5" style={{maxWidth:"800px"}}>
        <h5 class="card-text aboutpara mb-5">
        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation 
        incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla 
        ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.
        </h5>
        <p class="card-text mb-5 lighttext fw-lighter  text-secondary">
        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation 
        incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla 
        ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi
         sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam
          consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </p></div>
      </div>
      <Comment/>
      <Subfooter/>
      <Footer/>
        </>)
    
}
export default Standard;
