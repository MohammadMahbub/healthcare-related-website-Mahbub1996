import React from 'react';
import Banner from './Banner';
import Experiance from './Experiance';
import BannerOne from './BannerOne';

import FeatureOfService from './FeatureOfService';
import MyServices from './MyServices';
import OurDoctorTeam from './OurDoctorTeam';
import OurService from './OurService';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className="container-fluid">
            
            <Banner />
            <OurService/>
            <MyServices/>
            <OurDoctorTeam/>
            <Experiance/>
            <Welcome />
            <FeatureOfService />
        </div>
    );
};

export default Home;