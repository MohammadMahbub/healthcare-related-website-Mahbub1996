import React from 'react';
import './Home.css'
import image from '../../images/Images.1/about/about-img.jpg'

const FeatureOfService = () => {
    return (
        <div style={{background: '#88585817', borderRadius: '10px'}} className="container feature mb-5 mt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                <h3 style={{color: 'blue'}}> | About Us</h3>
                        <p style={{marginLeft: '20px'}}>Description text here...</p>
                    <div className="feature-img">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="feature-description mt-5">
                       
                        <h4 style={{color: '#605f5f', fontSize: '20px' }}  className="mb-3"> <span className="hospital-content">Oreo Hospital</span> isIt is a long established fact that a reader will be distracted by the readable content.</h4>
                        <p style={{ fontSize: "19px", textAlign: "justify", lineHeight: "29px",  }}>
                        Through a global pandemic, which heightened recognition of health inequities, a volatile election season, and an organizational leadership change and search, the National Health Council team rose to the challenge to deliver high-value resources, programming, and service to our members.
                        <br /> <br />
                        Founded in 1920, the National Health Council brings diverse organizations together to forge consensus and drive patient-centered health policy.
                        </p>
                        

                        <button className="button-style my-3">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureOfService;