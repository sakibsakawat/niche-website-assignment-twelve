import React from 'react';
// import {Link,} from "react-router-dom";
import './Review.css'
import Rating from 'react-rating'
const Review = (props) => {
     const {name, description, image, star} = props.review
     
    return (
        <div className="mb-5">
           
           
           
           
           
           
           <div className="card h-100" >
  <img src={image} className="card-img-top reviewimg mt-4" alt="..."/>
  <div className="card-body">
    <h3 className="card-title text-center mt-4">{name}</h3>
    <p className="card-text text-center mt-4">{description}</p>
    <Rating 
        className="icon-star"
        initialRating={star}
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star "
    readonly></Rating>
    {/* <p className="card-text fs-4"> {price}</p> */}
  </div>
   


   
</div>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            
        </div>
    );
};

export default Review;