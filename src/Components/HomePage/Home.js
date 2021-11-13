import React from 'react';
import Banner from './Banner';
import Experiance from './Experiance';
import FeatureOfService from './FeatureOfService';
import MyServices from './MyServices';
import OurDoctorTeam from './OurDoctorTeam';
import OurService from './OurService';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className="container-fluid">
            <Banner />
            <FeatureOfService />
            <Experiance/>
            <OurService/>
            <MyServices/>
            <Welcome />
            <OurDoctorTeam/>
            
        </div>
    );
};

export default Home;