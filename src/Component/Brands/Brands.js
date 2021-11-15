import React from 'react';
import l1 from '../../Images/l1.jpg'
import l2 from '../../Images/l2.jpg'
import l3 from '../../Images/l3.jpg'
import l4 from '../../Images/l4.jpg'
import l5 from '../../Images/l5.jpg'
import l6 from '../../Images/l6.jpg'
import l7 from '../../Images/l7.jpg'
import './Brands.css'
const Brands = () => {
    return (
        <div className="ms-5 mb-5 brandH d-flex align-items-center flex-column">
                  <h1 className="text-primary mt-5 mb-5 text-center"> World Class Top Brands Watches  </h1>
             <div className="container mb-5">
                 <img src={l1} width="150" className="ms-2" height="70"  alt=""/>
                 <img src={l2} width="150" className="ms-2" height="70" alt=""/>
                 <img src={l3} width="150" className="ms-2" height="70" alt=""/>
                 <img src={l4} width="150" className="ms-2" height="70" alt=""/>
                 <img src={l5} width="150" className="ms-2" height="70" alt=""/>
                 <img src={l6} width="150" className="ms-2" height="70" alt=""/>
                 <img src={l7} width="150" className="ms-2" height="70" alt=""/>
             
             
             
             
             </div>




        </div>
    );
};

export default Brands;