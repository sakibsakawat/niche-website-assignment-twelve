import React from 'react';
import bg1 from '../../Images/1.png'
import bg2 from '../../Images/2.png'
import bg3 from '../../Images/3.png'
import bg4 from '../../Images/4.png'
import bg5 from '../../Images/5.png'
import bg6 from '../../Images/6.png'
import bg7 from '../../Images/7.png'


const Slider = () => {
    return (
        <div>
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
    );
};

export default Slider;