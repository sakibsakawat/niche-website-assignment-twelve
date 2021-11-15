import React from 'react';
import './ContactUs.css'
import {Link } from 'react-router-dom'
const Social = () => {
    return (
        <div className="contactDiv1">

                 <div className="d-flex align-items-center flex-column">
                 
                          <h4>For Any Help Please Contact Us via Social Media</h4>

            <div>
              
             
             
             
             <Link to="/facebook.com" ><i class="fab fa-facebook-square"></i></Link>
             <Link to="/twitter.com" ><i class="fab fa-twitter-square"></i></Link>
             <Link to="/youtube.com" ><i class="fab fa-youtube-square"></i></Link>
             <Link to="/instagram.com" ><i class="fab fa-instagram-square"></i></Link>
             <Link to="/mail.google.com" ><i class="fas fa-comment"></i></Link>
             
             
             
             
             

            </div>
                 
                 
                 </div>
          
        </div>
    );
};

export default Social;