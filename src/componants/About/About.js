import React from 'react';
import myimage from '../../img/ali.png';

const About = () => {
    return (
        <div className='text-center my-5 container'>
            <img src={myimage} alt="" />
            <h3>AssalamoWalaikum</h3>
            <h1>It's me, Ali Ibne Masud</h1>
            <p>My goal is from now is to be a good full-stack web developer. I want to learn more about React and javascript by developing real word projects. I am working hard to know deeply about the programming fundamental and make things easy. I want to solve problem by doing real world project. Pray for me. Thanks</p>
        </div>
    );
};

export default About;