import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '800px' }} className='w-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Loading;