import React from 'react';
import { useEffect, useState } from "react";
import ExploreCard from '../ExploreCard/ExploreCard'
import './ExploreCards.css'










const ExploreCards = () => {
     const [cards, setCards ] = useState([]);
      
   useEffect(() => {
       fetch('https://pure-headland-02528.herokuapp.com/watches')
       .then(res => res.json())
       .then(data => setCards(data))
       
      
  
   },[])
     
    return (
        <div className="watchesDiv1 ">
         <h1 className="watchesH1 mb-5 text-center mt-5"><span className="watchesH1Span1">Watch Collection</span></h1>




         <div className="watchesDiv2 container">

         
           {
              cards.map(card=> <ExploreCard
                key={card.key}
                card={card}
               
               ></ExploreCard>)
           } 


         </div>




        </div>
    );
};

export default ExploreCards;