import React from 'react';
import { Link } from 'react-router-dom';
import bannerimg from '../../img/bannerimg.png'
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className="container d-flex justify-content-between align-items-center my-5 flex-wrap">
                <div className="info w-50 col-sm-12 col-lg-6">
                    <p className='fw-bold text-success'>Ready to unlock your true potential?</p>
                    <h1 className='heading'>Take Control of your life
                        Train Your Mind</h1>
                    <p>As New Zealand's top resilience coach, I will help you release the future you know you deserve. With <Link to="/">MindTrainor</Link></p>
                    <button className='btn btn-success mt-5 btn-cta'>Get Started</button>
                </div>
                <div className='col-sm-12 col-lg-4'>
                    <img src={bannerimg}  alt="" />
                </div>
                
            </section>
            <Services></Services>
            <Faq></Faq>
            <Footer></Footer>            
        </div>
    );
};

export default Home;