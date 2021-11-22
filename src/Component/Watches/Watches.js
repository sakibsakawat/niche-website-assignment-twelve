import React from 'react';
import { useEffect, useState } from "react";
import Watch from '../Watch/Watch'
import './Watches.css'










const Watches = () => {
     const [watches, setWatches ] = useState([]);
      
   useEffect(() => {
       fetch('https://pure-headland-02528.herokuapp.com/watches')
       .then(res => res.json())
       .then(data => setWatches(data))
       
      
  
   },[])
     
    return (
        <div className="watchesDiv1 ">
         <h1 className="watchesH1 mb-5 text-primary text-center mt-5"><span className="text-primary mt-5">Watch Collection</span></h1>




         <div className="watchesDiv2 container">

         
           {
              watches.slice(0,6).map(watch => <Watch
                key={watch._id}
                watch={watch}
               
               ></Watch>)
           } 


         </div>




        </div>
    );
};

export default Watches;