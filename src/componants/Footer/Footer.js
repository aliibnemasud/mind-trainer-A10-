import React from 'react';
import logo from '../../img/Group 53.png';

const Footer = () => {


    return (
        <div className='bg-dark mt-5'>
            <div className='d-flex justify-content-between py-4 text-light container align-items-center flex-wrap'>
                <img src={logo} alt="" />
                <p className='mb-0'>Copyright 2022 - All right Reserved by Ali Ibne Masud</p>
            </div>
        </div>
    );
};

export default Footer;