import React from 'react';
import { Accordion } from 'react-bootstrap';
import coach from '../../img/Group 13.png';

const Faq = () => {
    return (
        <div className="container mx-auto my-5">
            <h1 className='text-center my-4'>Faq Section</h1>
            <div className='d-flex justify-content-between align-items-center flex-wrap'>                
            <img className='col-sm-12 col-lg-6' src={coach} alt="" />            
            <Accordion className='align-items-center col-sm-12 col-lg-6 my-2'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What should I expect from an online coach?</Accordion.Header>
                    <Accordion.Body>
                        You'll get the opportunity to talk about your goals and challenges, working with your coach to find a way to get to where you want to be. Just like an in-person session, your coach may ask you to outline the action points you've gained from your session, ready to take them forward and review next time you speak.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are online fitness coaches worth it?</Accordion.Header>
                    <Accordion.Body>
                        Pros. Working with an online coach is less expensive than an in-person coach. They can support you and help you stay on track with your fitness goals. Online training is more flexible.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What questions should I ask an online fitness coach?</Accordion.Header>
                    <Accordion.Body>
                        <ol>
                            <li>How many days per week do I need to work out? ...</li>
                            <li>What should I eat before a workout? ...</li>
                            <li>What should I eat after a workout? ...</li>
                            <li>What are the best exercises for getting rid of muffin tops/bat wings/inner thigh bulge?</li>
                        </ol>



                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
    );
};

export default Faq;