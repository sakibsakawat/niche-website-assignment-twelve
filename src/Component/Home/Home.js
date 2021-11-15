import React from 'react';
import Slider from '../Slider/Slider';
import Watches from '../Watches/Watches';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Feature from '../Feature/Feature'; 
const Home = () => {
    return (
        <div>
          <Slider></Slider>  
           
          <Feature></Feature>

          <Watches></Watches>
           
           <Reviews></Reviews>

           <Brands></Brands>
          
        </div>
    );
};

export default Home;