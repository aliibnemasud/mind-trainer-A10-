import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Registered = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='text-center my-5'>            
            <h1 >Hey <span className='text-success fw-bold'>{user?.displayName}</span> Welcome back!</h1>
            <p>{user?.email}</p>            
        </div>
    );
};

export default Registered;