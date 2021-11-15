import React, {useState} from 'react';
import './Admin.css'
const Admin = () => {
    const [email,setEmail] = useState('');
    const [success, setSuccess] = useState(false);
const handleOnBlur = e =>{
    setEmail(e.target.value);
}



    const handleAdminSubmit = e => {
         const user = { email };
         fetch('http://localhost:5000/users/admin', {
             method: 'PUT',
             headers: {
                 'content-type' : 'application/json'
             },
             body: JSON.stringify(user)
         })
           .then(res => res.json())
           .then(data => {
               if ( data.modifiedCount ) {
                     console.log(data);
                     setEmail('');
                     setSuccess(true);
                     alert("Made Admin Successfully")
               }
               
           })
         e.preventDefault()
        
    }
    return (
        <div className="divAdmin d-flex justify-content-center align-items-center flex-column">
            <h2>Make Admin</h2>


           <form onSubmit={handleAdminSubmit} className="d-flex justify-content-center align-items-center" >
                      
                      
                 
                  <input type="email" onBlur={handleOnBlur}  className="form-control me-3" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
           
                     <button type="submit"className="btn btn-primary ">Admin</button>
                  
                  
                  
                  
                  
               
                       
           </form>


        </div>
    );
};

export default Admin;