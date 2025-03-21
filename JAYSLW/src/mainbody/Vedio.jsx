import React from "react";
import Subfooter from './Subfooter';
import Footer from './Footer';
import Comment from "./Comment";
const Vedio =() =>{
    return(
   <>
   <div class="container">
    <h1 class="card-title fs-1 text-center pt-5">This Is A Video Post Format.</h1><p class="mb-5 card-text  text-center">
    <span class="mb-5 card-text light text fw-lighter text-secondary text-center">December 16, 2017 in </span>&nbsp;&nbsp;
    <span class="mb-5 card-text  text-center fst-italic fw-medium pt-5"> Lifestyle Travel</span></p>
       </div>

       <div class="container text-center">
      <iframe src="https://player.vimeo.com/video/1030326832?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" width="1000" class="ratio" style={{maxWidth:"1000px"}} height="481" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="vimeo"></iframe>
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
   </>
    );
} 
export default Vedio;