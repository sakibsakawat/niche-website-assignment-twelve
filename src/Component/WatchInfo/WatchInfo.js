import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const WatchInfo = () => {
    const [product, setProduct] = useState({});
    const {watchId} = useParams();


    
    useEffect( () => {
        fetch(`http://localhost:5000/singleProduct/${watchId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []) ;






    return (
        <div className="">

            


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
    
     </div>
      <div className="modal-body">
       Product Added to Cart Successfully
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button to=""type="button" className="btn btn-primary" data-bs-dismiss="modal">Go to Cart</button>
        
      </div>
    </div>
  </div>
</div>


<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
    
     </div>
      <div className="modal-body">
      Order Placed Successfully 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>












                  <div className="d-flex align-items-center me-5">
                  
                            <div className="p-5"> 
                                   <img src={product.image} alt="" ></img>
            
                            </div>
             
             
             
                             <div className="p-5">
             
                     <div className="border  p-5 me-5">
                           <table >
                           <tr>
                               <td> <h2 className="text-primary mb-4"> {product.name} </h2></td>
                           </tr>
                           
                           <tr>
                               <td> <p> {product.description} </p></td>
                           </tr>
                           
                           <tr>
                               <td> <h4 className="text-primary"> $ <span className="text-dark mb-4">{product.price}</span>  </h4></td>
                           </tr>
                           
                            <div className="d-flex ">
                                   <tr>
                               <td> <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Add To Cart</button></td>
                           </tr>
                           
                            <tr>
                               <td> <button type="button" className="btn btn-primary mt-4 ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal2">Buy Now</button></td>
                           </tr>
                            
                            </div>
                           
                           
                           </table>
                     
                     
                     
                     </div>
             
             </div>    
                  
                  
                  
                  
                  
                  </div>        
        </div>
    );
};

export default WatchInfo;