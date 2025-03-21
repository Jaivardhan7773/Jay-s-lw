import React from "react";
import { NavLink } from "react-router-dom";
const Comment = () =>{
    return(
<>
<div className="text-center">
        <img src="https://images.unsplash.com/photo-1511737749656-8a5678336670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:"1000px",maxHeight:"400px"}} className="img-fluid pb-5"/>
      </div>
      <div className="container" style={{maxWidth:"800px"}}>
        <h1 className="card-title mb-3">Larger Headings</h1>
        <p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
         minus omnis voluptas assumenda est id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut 
         officiis debitis aut rerum necessitatibus saepe eveniet ut et.
        </p>
        <h5 className="card-text aboutpara mb-5"><span className="fs-1 fw-bold">"</span>
        Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation 
        incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla 
        ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.
        </h5>
        <p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi 
        sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
        venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim 
        veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </p>
        <h3 className="card-title mb-3 fs-4 fw-bold">Smaller Headings</h3>
        <p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
         minus omnis voluptas assumenda est id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut 
         officiis debitis aut rerum necessitatibus saepe eveniet ut et.
        </p>
        <div className="container"  style={{backgroundColor:"#dcdde1",maxHeight:"600px",maxWidth:"800px"}}>
        <p className="fw-lighter py-5 px-5">
        code <br/>
        <p className="px-5 card-text">font-size: 1.4rem;<br/>
        margin: 0 .2rem;<br/>
        padding: .2rem .6rem;<br/>
        white-space: nowrap;<br/>
        background: #F1F1F1;<br/>
        border: 1px solid #E1E1E1;<br/>
        border-radius: 3px;<br/></p>
    
        </p>
        </div>
        <p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias
         excepturi sint occaecati cupiditate non provident, similique sunt in culpa.
        </p>
        <p className="card-text mb-5 lighttext fw-lighter text-secondary">
            <ul>
                <li>Donec nulla non metus auctor fringilla</li>
                <li>Donec nulla non metus auctor fringilla</li>
                <li>Donec nulla non metus auctor fringilla</li>
                <li>Donec nulla non metus auctor fringilla</li>
                <li>Donec nulla non metus auctor fringilla</li>
            </ul>
        </p>
        <p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
         minus omnis voluptas assumenda est id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut 
         officiis debitis aut rerum necessitatibus saepe eveniet ut et.
        </p>

        <h6 className="subtags">
        <button type="button" className="btn">NEXT</button>
<button type="button" className="btn ">HOKAGE</button>
<button type="button" className="btn ">MIZUKAGE</button>
        </h6>
      </div>
      <div  style={{backgroundColor:"#dcdde1"}}>
      <div className="container py-5 " style={{maxWidth:"800px"}}>
        <h1 className="card-title pb-5">4 Comments</h1>
        <div className="container pb-5">
            <div style={{display:"flex"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/1507/1507155.png" className="ps-2" style={{height:"30px",width:"30px"}}/>
        <h5 className="card-text aboutpara px-5">Sasuke Uchicha</h5>
        </div>
        &emsp;&emsp;<span className="mb-5 card-text light text fw-lighter text-secondary text-center px-5">November 16, 2024   </span>
        &emsp;&emsp;<p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus omnis voluptas assumenda est id quod maxime placeat facere possimus,
        </p>
        </div>

        <div className="container pb-5">
            <div style={{display:"flex"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/1881/1881121.png" className="ps-2" style={{height:"30px",width:"30px"}}/>
        <h5 className="card-text aboutpara px-5">Itachi Uchicha</h5>
        </div>
        &emsp;&emsp;<span className="mb-5 card-text light text fw-lighter text-secondary text-center px-5">November 16, 2024  </span>
        &emsp;&emsp;<p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus omnis voluptas assumenda est id quod maxime placeat facere possimus,
        </p>
        </div>

        <div className="container pb-5">
            <div style={{display:"flex"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/3891/3891372.png" className="ps-2" style={{height:"30px",width:"30px"}}/>
        <h5 className="card-text aboutpara px-5">Monkey D Zoro</h5>
        </div>
        &emsp;&emsp;<span className="mb-5 card-text light text fw-lighter text-secondary text-center px-5">November 16, 2024  </span>
        &emsp;&emsp;<p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus omnis voluptas assumenda est id quod maxime placeat facere possimus,
        </p>
        </div>

        <div className="container ">
            <div style={{display:"flex"}}>
        <img src="https://cdn-icons-png.flaticon.com/128/949/949531.png" className="ps-2" style={{height:"30px",width:"30px"}}/>
        <h5 className="card-text aboutpara px-5">Sa D bo</h5>
        </div>
        &emsp;&emsp;<span className="mb-5 card-text light text fw-lighter text-secondary text-center px-5">November 16, 2024   </span>
        &emsp;&emsp;<p className="card-text mb-5 lighttext fw-lighter text-secondary">
        Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus omnis voluptas assumenda est id quod maxime placeat facere possimus,
        </p>
        </div>


        <div classNameName="container mt-5">
    <h2 classNameName="card-title mb-5">Add Comment</h2>
    <input
      type="text"
      classNameName="form-control shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Your Name"
    />
    <hr classNameName="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="text"
      classNameName="form-control shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Your Email"
    />
    <hr classNameName="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="text"
      classNameName="form-control shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Website"
    />
    <hr classNameName="border border-dark border-1 opacity-50 mb-5" />
    <textarea
      classNameName="form-control  shadow-none bg-transparent"
      id="exampleFormControlTextarea1"
      rows={3}
      placeholder="enter your text"
      defaultValue={""}
    />
    <hr classNameName="border border-dark border-1 opacity-50 mb-5" />
    <div classNameName="d-grid gap-2 mb-5">
      <button classNameName="btn btn-dark mb-5" type="button">
        Submit
      </button>
    </div>
  </div>

      </div>
      </div>
</>
    )
}
export default Comment;