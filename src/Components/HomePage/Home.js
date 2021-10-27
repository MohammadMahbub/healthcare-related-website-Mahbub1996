import React from 'react';
import Banner from './Banner';
import BannerOne from './BannerOne';
import FeatureOfService from './FeatureOfService';
import Testimonial from './Testimonial';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className="container-fluid">
            <BannerOne />
            <Banner />
            <Welcome />
            <FeatureOfService />
            <Testimonial />
        </div>
    );
};

export default Home;