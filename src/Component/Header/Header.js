import React from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import { Link } from 'react-router-dom';

import logo from '../../Images/BWlogo.png'
import { Offcanvas, Button } from 'react-bootstrap';
const Header = () => {
  const {user, logOut} = useAuth();
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  
    return (
        <div>
       
             <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container">
    <Link class="navbar-brand" to="#">
      <img src={logo} alt="" width="160" height="50" class="d-inline-block align-text-top"/>
      
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="feature">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/explorecards">Explore</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="#" onClick={handleShow}>Dashboard</Link>
        </li> */}
         
        {user?.email?
         <Link className="nav-link" to="#" onClick={handleShow}>Dashboard</Link>:
        <Link className="nav-link" to="#" ></Link> }

        
         
        {user?.email?
         <Link onClick={logOut} to="" > <Button > Log Out </Button> </Link>:
        <Link classname="custom" to="/login"> <Button > Log In </Button> </Link> }
        
      </ul>
    </div>
  </div>
</nav>    
       <Offcanvas show={show} onHide={handleClose} className="canvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ul className="list-group list-group-flush ">
         
        
         <li className="list-group-item "><Link to="/addservice" className="text-decoration-none">Add Product</Link></li><br/>
         <li className="list-group-item "><Link to="admin" className="text-decoration-none">Make Admin</Link></li><br/>
         <li className="list-group-item "><Link to="/manageorders" className="text-decoration-none">Manage All Orders</Link></li><br/>
         <li className="list-group-item "><Link to="/cart" className="text-decoration-none">My Order</Link></li><br/>
         <li className="list-group-item "><Link to="/addreviews" className="text-decoration-none">Review</Link></li><br/>
         <li className="list-group-item "><Link to="/pay" className="text-decoration-none">Make Payment</Link></li><br/>
         <li className="list-group-item "><Link onClick={logOut} to="" className="text-decoration-none">Logout</Link></li><br/>
         
        
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    );
};

export default Header;