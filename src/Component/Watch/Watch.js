import React from 'react';
import {Link,} from "react-router-dom";
import './Watch.css'

const Watch = (props) => {
     const {name, description, _id, image, price} = props.watch
     
    return (
        <div className="mb-5">
           
           
           
           
           
           
           <div className="card h-100" >
  <img src={image} className="card-img-top img-fluid p-2" alt="..."/>
  <div className="card-body">
    <h3 className="card-title text-primary">{name}</h3>
    <p className="card-text ">{description}</p>
    <p className="card-text fs-4">$ {price}</p>
  </div>
   <div class="card-footer">
      <small class=""><Link to={`/watchinfo/${_id} `}><button className="container-fluid detailsBtn bg-primary" >Buy Now</button></Link></small>
    </div>


   
</div>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            
        </div>
    );
};

export default Watch;