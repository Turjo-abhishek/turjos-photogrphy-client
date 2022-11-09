import React from 'react';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Features></Features>
        </div>
    );
};

export default Home;