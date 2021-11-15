import React from 'react';
import {Link,} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { useState } from "react";
const Ragistration = () => {

       const location = useLocation();
    const history = useHistory();
    const redirect_uri =  location.state?.from || '/home'
    console.log('came from', location.state?.from);
       
       
       const {user, } = useAuth;
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [error, setError] = useState('');
       const auth = getAuth();
       const handleEmailChange = e => {
           console.log(e.target.value);
           setEmail(e.target.value);
       }

       const handlePasswordChange = e => {
           console.log(e.target.value);
           setPassword(e.target.value);
       }


     const handleRagistration = e => {
           console.log(email, password);
           e.preventDefault();
           if (password.length < 6) {
               setError('Password Must Be At least Six character long')
               return;
           }
           createUserWithEmailAndPassword(auth, email, password)
           .then(result => {
               saveUser(email);
               history.push(redirect_uri)
               const user = result.user;
               console.log(user);
               setError('');
           })
           .catch(error => {
               setError(error.message)
           })
       }
            const saveUser = (email) => {
         const user = {email};
         fetch('http://localhost:5000/users', {
             method:'POST',
             headers: {
                 'content-type' : 'application/json' 
                 },
                 body:JSON.stringify(user) 
         })
         .then()     
    } 

             
     


    return (
        <div className="logindiv">
            <div className="d-flex align-items-center justify-content-center mt-5">
            
                   
             <h1 className="loginh1 text-center">Sign Up </h1>
             <div className="mt-4 ms-5" >
       
       
           <form onSubmit={handleRagistration}>
           
           
            <div className="input-group mb-3 loginDiv3 w-100">
                     
                      <input type="text" 
                      onBlur={handleEmailChange}
                      className="form-control inputcss" placeholder="Email" aria-label="Username"                     aria-describedby="basic-addon1"/>
        </div>
                  
             
       <div className="input-group mb-3">
                     
                      <input type="password"
                      onBlur={handlePasswordChange}
                       className="form-control" placeholder="Password" aria-label="Username"                     aria-describedby="basic-addon1"/>
        </div>
                  <div className="row mb-3 text-danger">{error}</div>
            <button type="submit" class="btn btn-primary d-flex justify-content-center w-100"> Sign Up</button> 
           
           
           
           </form>


           <h5 className="mt-5">Already Created Account? &nbsp;<Link to="/login" className="text-decoration-none">Log in</Link></h5>


             </div>
            
           
           
            
            
            </div>
        </div>
    );
};

export default Ragistration;