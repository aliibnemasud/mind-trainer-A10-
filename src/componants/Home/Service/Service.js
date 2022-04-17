import React from 'react';

const Service = ({service}) => {
    const {name, description, imgUrl, price} = service;    
    return (
        <div className='bg-light px-5 pt-5 pb-2'>
            <img src={imgUrl} alt="" />
            <h4 className='my-3'>{name}</h4>
            <p>{description.slice(0, 200)}...</p>
            <h3>${price}</h3>
            <button className='btn btn-success'>Check Out</button>
        </div>
    );
};

export default Service;