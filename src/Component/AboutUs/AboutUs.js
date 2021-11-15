import React from 'react';
import './AboutUs.css'
import bg1 from '../../Images/1.png'
import bg2 from '../../Images/2.png'
import bg3 from '../../Images/3.png'
import bg4 from '../../Images/4.png'
import bg5 from '../../Images/5.png'
import bg6 from '../../Images/6.png'
import bg7 from '../../Images/7.png'
const AboutUs = () => {
    return (
        <div className="aboutUsdiv1">
            
            <div className="d-flex justify-content-between ms-5 ">
                 <div className="aboutUsDiv2 w-50 m-5 text-start fontGoogle p-5 ">
                 <h5>
                        That's the motto at <span className="text-primary">BlueWatch</span> Founded by brothers Mitch and Andrew Greenblatt who are modern horological enthusiasts with a passion for unique timepieces. They've been scouring the globe since 1999 discovering obscure, unusual brands that you've probably never heard of as well as carefully curating the brands you love. Purveyors of wrist-borne time machines, <span className="text-primary">BlueWatch</span>  is a singular source for unusual modern watches from around the world. A watch says a lot about you and helps you stand out. It's time for YOU to be different.<br/>

We believe that the modern watch represents more than just a functional mechanism to tell time. The watch is a unique form of art, design and personal expression. We've had a long-standing mission of providing unique and affordable timepieces to adventurous enthusiasts as yourself. As the number one selling independent online watch store, we plan to stay true to our core mission</h5>
                 
                 </div>
            
                 <div className="aboutUsDiv3 w-50 m-5 mt-5">
                 
                 <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bg1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bg2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bg3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bg4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bg5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bg6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bg7} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                 
                 </div>
            
            
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
        </div>
    );
};

export default AboutUs;