import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {    
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);    
    const nevigate = useNavigate();
    // const [name, setName] = useState('');    
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');

    const location = useLocation();
    

    const from = location.state?.from?.pathname || "/";
    

    // const getName = (e) =>{
    //     setName(e.target.value);
    // }
    const getEmail = (e) =>{
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    const handelSignup = (e) => {        
        createUserWithEmailAndPassword(email, password)
        .then(()=> {
            nevigate(from)
        })       
        e.preventDefault();        
    }
   
    return (                   
           <div className='text-center'>
               <h1 className='my-5'>Sign Up</h1>
               <form className='w-50 mx-auto' onSubmit={handelSignup}>                   
                   {/* <input onBlur={getName} placeholder="Type your Name" className='mb-2 form-control w-50 mx-auto' type="text" /> <br /> */}
                   <input onBlur={getEmail} placeholder="Your Email" className='mb-2 form-control w-50 mx-auto' type="email" required/> <br />
                   <input placeholder="Your Secrete Password" onBlur={getPassword} className='mb-2 form-control w-50 mx-auto' type="password" required/> <br />
                   <button className='btn btn-primary mb-2' type='submit'>Register</button>
               </form>
               <p>Don't have account? <Link to="/login" className='text-decoration-none'>Sign Up</Link></p>
               <SocialLogin></SocialLogin>
           </div>
    );
};

export default SignUp;