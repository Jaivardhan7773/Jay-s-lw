import React from "react";
import Subfooter from "./Subfooter";
import Footer from './Footer';
import { NavLink } from "react-router-dom";
const Aboutus = ()=>{
    return(
        <><div  style={{backgroundColor:"#dcdde1"}}>
        <h1 class="card-title text-center pt-5 mb-5 fs-1">Learn More About Us.</h1>
        <div class="container pb-5">
            <img src="https://images.unsplash.com/photo-1562169819-9f9031fedd3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid  mx-auto d-block mb-5" style={{maxHeight:"400px",width:"1000px"}}/>
       <div class="container" style={{maxWidth:"800px"}}>
        <h5 class="card-text aboutpara mb-5">
        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation 
        incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla 
        ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.
        </h5>
        <p class="card-text mb-5 lighttext fw-lighter text-secondary">
        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation 
        incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla 
        ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi
         sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam
          consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </p>
        <p class="mb-5 card-text lighttext fw-lighter text-secondary">
        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu
         exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit
          commodo cillum sit nulla ullamco.
          </p>
      
       <div class="row">
        <div class="col-lg-6">
            <h1 class="card-title fs-2 mb-3"> Who We Are.</h1>
            <p class="mb-5 card-text lighttext fw-lighter text-secondary">
            Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi 
            pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad 
            non pariatur sit.
            </p>
        </div>
        <div class="col-lg-6">
        <h1 class="card-title fs-2 mb-3">Our Mission</h1>
        <p class="mb-5 card-text lighttext fw-lighter text-secondary">
        Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi 
            pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad 
            non pariatur sit.
        </p>
        </div>
       </div>

       <div class="row">
        <div class="col-lg-6">
            <h1 class="card-title fs-2 mb-3">Our Values</h1>
            <p class="mb-5 card-text lighttext fw-lighter text-secondary">
            Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi 
            pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad 
            non pariatur sit.
            </p>
        </div>
        <div class="col-lg-6">
        <h1 class="card-title fs-2 mb-3">Our Values</h1>
        <p class="mb-5 card-text lighttext fw-lighter text-secondary">
        Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi 
            pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad 
            non pariatur sit.
        </p>
        </div>
       </div>
       </div>
        </div></div>

<Subfooter/>
<Footer/>
      



        </>
    );
}
export default Aboutus;