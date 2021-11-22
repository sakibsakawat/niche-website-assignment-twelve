import React from 'react';
import { useEffect, useState } from "react";
import Review from '../Review/Review'
import './Reviews.css'
import { Link } from 'react-router-dom';









const Reviews = () => {
     const [reviews, setReviews ] = useState([]);
      
   useEffect(() => {
       fetch('https://pure-headland-02528.herokuapp.com/reviews')
       .then(res => res.json())
       .then(data => setReviews(data))
       
      
  
   },[])
     
    return (
        <div className="reviewsDiv1 ">
         <h1 className="reviewsH1 mb-5 text-primary text-center mt-5"><span className="text-primary mt-5">What People Say About Us</span></h1>




         <div className="reviewsDiv2 container">

         
           {
              reviews.slice(0,3).map(review => <Review
                key={review._id}
                review={review}
               
               ></Review>)
           } 


         </div>


                

        </div>
    );
};

export default Reviews;