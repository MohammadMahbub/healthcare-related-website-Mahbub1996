import React from 'react';
import './SingleService.css'

const SingleService = props => {
    const { title, image, description } = props.data;
    return (
        <div className="services">
            <div className="single-service">
                <h3> {title} </h3>
                <div className="row align-items-center mb-5">
                    <div className="col-md-4 ">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8">
                        <p style={{ fontSize: "19px", lineHeight: "31px" }}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;