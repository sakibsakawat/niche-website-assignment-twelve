import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notFoundDiv1 ">
    <h1 className="text-center">404 - Not Found!</h1>
    
    <br/><br/>
    <div className="d-flex justify-content-center"><Link to="/home" className="btn btn-outline-success mb-5 ">Go Home...!</Link></div>
  </div>
    );
};

export default NotFound;