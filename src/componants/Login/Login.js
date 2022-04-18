import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    
    
    const from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const getEmail = (e) =>{
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const resetPassword = async() => {        
        await sendPasswordResetEmail(email);
    }


    const handelLogin = (e) => {
        signInWithEmailAndPassword(email, password)
        .then(()=>{
            
            navigate(from)            
        })
        e.preventDefault();
    }
    return (                   
           <div className='text-center'>
               <h1 className='my-5'>Please login!</h1>
               <form className='w-50 mx-auto' onSubmit={handelLogin}>                   
                   <input placeholder="Your email" onBlur={getEmail} className='mb-2 form-control w-50 mx-auto' type="email" required /> <br />
                   <input placeholder="Your Secrete Password" onBlur={getPassword} className='mb-2 form-control w-50 mx-auto' type="password" required /> <br />
                   <button className='btn btn-primary mb-2' type='submit'>Login</button>
               </form>
               <p>Don't have account? <Link to="/signup" className='text-decoration-none'>Sign Up</Link></p>
               <p>Forget password? <button className='btn btn-link' onClick={resetPassword}>Reset Password</button></p>

               <SocialLogin></SocialLogin>               
           </div>     
        
    );
};

export default Login;