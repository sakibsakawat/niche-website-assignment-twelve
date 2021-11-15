import React from 'react';
import f1 from '../../Images/f1.jpg'
import f2 from '../../Images/f2.jpg'
import f3 from '../../Images/f3.jpg'
const Feature = () => {
    return (
        <div>
            <h1 className="text-center mt-5 text-primary">The Leading Website for Luxury Watches</h1>
             <div className="d-flex align-items-center justify-content-around container mt-5 mb-5">
               <div className="text-center">
                        <img src={f1 } alt=""/>
                         <h3>4.8 out of 5 stars</h3>
                         <p>from 20,000 reviews worldwide<br/>who love BlueWatch</p>               
              </div>
               <div className="text-center mt-5 mb-5">
                       <img src={f2 } alt=""/>
                        <h3>9 million</h3>
                        <p >watch enthusiasts use BlueWatch<br/> each month</p> 
                       
               
               
               </div>
               <div className="text-center">
               
                       <img src={f3 } alt=""/>
                        <h3>Over 200,000</h3>
                        <p>customers choose Buyer<br/> Protection annually</p> 
                       
               
               
               </div>
             
             
             
             
             </div>
        </div>
    );
};

export default Feature;