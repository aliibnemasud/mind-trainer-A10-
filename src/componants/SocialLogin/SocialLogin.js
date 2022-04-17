import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    
    return (
        <div>
            <div>
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <button className='btn btn-primary mx-2' onClick={()=>signInWithGoogle()}>Googl</button>
            <button className='btn btn-primary mx-2' onClick={()=>signInWithFacebook()}>Facebook</button>
            <button className='btn btn-primary mx-2' onClick={()=>signInWithGithub()}>GitHub</button>
        </div>
    );
};

export default SocialLogin;