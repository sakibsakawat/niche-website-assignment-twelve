import React from 'react';
import logo from '../../Images/BWlogo.png'
import './Footer.css'

const Footer = () => {
    return (
       <div className="divFooter1 bg-light">
      
       
        <div className="d-flex mb-3">
            <div className="mt-3 ms-5">
              <img src={logo} height="50" width="150" alt="" className="mb-2"/>
               <p>We believe that the modern watch represents more than<br/> just a functional mechanism to tell time. The watch is a<br/> unique form of art, design and personal expression. We've<br/> had a long-standing mission of providing unique and affordable <br/>timepieces to adventurous enthusiasts as yourself. As the number<br/> one selling independent online watch store, we plan to stay true <br/>to our core mission</p>
               <h3 className="text-primary"> Follow Us:</h3>
                <div className="d-flex divFooter3 ">
                      <h4><i className="fab fa-instagram "></i></h4>
                      <h4><i className="fab fa-facebook ms-3"></i></h4>
                      <h4><i className="fab fa-twitter ms-3"></i></h4>
                      <h4><i className="fab fa-linkedin ms-3"></i></h4>
                </div>
               
            </div>
              {/* ------------------ contact us ---------------------------- */}
             <div className="mt-3 ms-5 pt-2 ps-3">
               <h2 className="fw-5 text-primary">Contact Us</h2>
               <div className="d-flex flex-column">
               
              <div className="d-flex align-items-center">
                  <div><i className="fas fa-phone-alt fs-6 ms-2"></i></div>
                  <div className="ms-3"> +01852-1265122<br/>+01852-1265122</div>
               
               </div>
              
               <div className="d-flex align-items-center mt-3">
                  <div><i className="fas fa-at fs-6 ms-2"></i></div>
                  <div className="ms-3">info@example.com<br/>support@example.com</div>
               
               </div>
               
               
               
               
               <div className="d-flex align-items-center mt-3">
                  <div><i className="fas fa-map-marker-alt fs-6 ms-2"></i></div>
                  <div className="ms-3">2752 Willison Street <br/>Eagan, United State</div>
               
               </div>
               
               </div>
             
             
             
             </div>
         
         {/* ------------  Support ---------------- */}

             <div className="mt-3 ms-5 pt-2 ps-3">
             
             <h2 className="fw-5 text-primary"> Support</h2>
             <h6>Contact Us</h6>
             <h6>About US</h6>
             <h6>Services</h6>
             <h6>Our Blogs</h6>
             <h6>Terms And Conditions</h6>
             
             
             <div className="mt-3 ms-5 pt-2 ps-3">
             
             
             
             
             </div>
             
             
             
             
             
             </div>
        </div>
           <div className="text-center bg-secondary text-light py-2">Copyright 2021 BlueWatch | Inspired by Theme Forrest | Design By Sakawat H. </div>



        </div>
    );
};

export default Footer;