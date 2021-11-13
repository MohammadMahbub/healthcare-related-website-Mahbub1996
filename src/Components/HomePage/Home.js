import React from 'react';
import Banner from './Banner';
<<<<<<< HEAD
import Experiance from './Experiance';
=======
import BannerOne from './BannerOne';
>>>>>>> b1a3a56e8cbabf5fd85a1f8e495ebed519faa408
import FeatureOfService from './FeatureOfService';
import MyServices from './MyServices';
import OurDoctorTeam from './OurDoctorTeam';
import OurService from './OurService';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div className="container-fluid">
            <BannerOne />
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