import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Component/Login/Firebase/firebase.init";
import { useHistory, useLocation } from 'react-router-dom';

initializeAuthentication();


const useFirebase = () => {

     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const [ email, setEmail] = useState('');

    const [password, setPassword] = useState ('');

    const auth = getAuth();
   

   

    

  const signInUsingGoogle =() => {

        setIsLoading(true);

     const googleProvider = new GoogleAuthProvider();
           signInWithPopup(auth, googleProvider)
           .then (result =>{
            setUser(result.user);
                
           })
           .finally(() => setIsLoading(false));
     }
// user state observer 
   
   
   
   
   
   
   
   
   
   
    useEffect( () => {
      const unsubscribed =  onAuthStateChanged(auth,user => {
            if(user) {
                setUser(user);
                  
            } else{
                setUser( {} );
            }
        })
        return () => unsubscribed;
    }, [])


  const logOut =() =>{
        signOut(auth)
        .then( () => {});
  }
     
   




   return {
       user,
       isLoading,
    signInUsingGoogle,
       logOut
   }

}

export default useFirebase;