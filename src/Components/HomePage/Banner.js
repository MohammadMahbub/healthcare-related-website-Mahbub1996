import React from 'react';
import './Home.css'
import {
    Link
} from "react-router-dom";


const Banner = () => {
    return (
        <div className="banner-area">
            <div className="body">
                <div className="row d-flex justify-content-center align-items-center mt-3" >
                    <div className="col-md-6 col-sm-6 col-12 offset-sm-0">
                        <div className="banner-item">
                            <h1 style={{ color: '#3A4256' }}>Welcome to <br /> <span style={{ fontFamily: 'serif', fontSize: '55px' }}> Oreo</span> <span style={{ color: 'black', fontFamily: 'arial black', fontSize: '58px' }}>Hospital</span> </h1>
                            <p>
                            Welcome to Oreo Hospital. Oreo Hospital is a leading multi-speciality hospital offering best in class medical services. The 100 beded multi speciality 
                            </p>
                            <Link to='/appointment'>
                                <button className="button-style"> <i class="fas fa-hand-point-right"></i>  APPOINTMENT Here</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1 col-sm-6 col-12 offset-sm-0">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;