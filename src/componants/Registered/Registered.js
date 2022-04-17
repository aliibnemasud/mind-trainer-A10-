import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Registered = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='my-4'>
            <img height="300px" className='rounded roundedCircle thumbnail' src={user?.photoURL} alt="" />
            <h5>Hey <span className='text-success fw-bold'>{user?.displayName}</span> Welcome back!</h5>
            <p>{user?.email}</p>
            
        </div>
    );
};

export default Registered;