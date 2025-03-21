import React from "react";
import Cards from './Cards';
import Subfooter from './Subfooter';
import Footer from './Footer';
import { NavLink } from "react-router-dom";
const Category = () =>{
    return(
<>
<div style={{backgroundColor:"#dcdde1"}}>
<div class="container  mx-auto d-block text-center" style={{maxWidth:"600px"}} >
    <h1 class="card-title fs-1 pt-5">Category:Lifestyle</h1>
    <p class="pb-5 pt-2 card-text fs-5 text-center lighttext fw-lighter text-secondary">
    Dolor similique vitae. Exercitationem quidem occaecati iusto. Id non vitae enim quas error dolor maiores ut.
     Exercitationem earum ut repudiandae optio veritatis animi nulla qui dolores.
    </p>
</div></div>


<Cards/>
<Subfooter/>
<Footer/>
</>
    )
}
export default Category;