import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(()=> {
            navigate(from)
        })
    }
    const handleFacebook = () => {
        signInWithFacebook()
        .then(()=> {
            navigate(from)
        })
    }
    const handleGithub = () => {
        signInWithGithub()
        .then(()=> {
            navigate(from)
        })
        .catch(error=> {
            console.log(error);
        })
    }
    
    return (
        <div>
            <div>
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <button className='btn btn-warning mx-2' onClick={handleGoogleLogin}>Google</button>
            <button className='btn btn-primary mx-2' onClick={handleFacebook}>Facebook</button>
            <button className='btn btn-dark mx-2' onClick={handleGithub}>GitHub</button>
        </div>
    );
};

export default SocialLogin;