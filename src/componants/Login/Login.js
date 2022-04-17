import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const getEmail = (e) =>{
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }
    const handelLogin = (e) => {
        console.log(email, password);
        e.preventDefault();
    }
    return (                   
           <div>
               <h1 className='my-5'>Please login!</h1>
               <form className='w-50 mx-auto' onSubmit={handelLogin}>                   
                   <input placeholder="Your email" onBlur={getEmail} className='mb-2 form-control w-50 mx-auto' type="email" /> <br />
                   <input placeholder="Your Secrete Password" onBlur={getPassword} className='mb-2 form-control w-50 mx-auto' type="password" /> <br />
                   <button className='btn btn-primary mb-2' type='submit'>Login</button>
               </form>
               <p>Don't have account? <Link to="/signup" className='text-decoration-none'>Sign Up</Link></p>

               <SocialLogin></SocialLogin>               
           </div>     
        
    );
};

export default Login;