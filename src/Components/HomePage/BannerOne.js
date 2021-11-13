import React from 'react';
import chair from '../../images/chair.png';
import dental from '../../images/dental.jpg';
import doctors from '../../images/doctors.jpg';

const BannerOne = () => {
    return (
        <div>
            <div className="banner-area">
            {/* <div className="">
                <div className="row d-flex justify-content-center align-items-center mt-3" >
                    <div className="col-md-6 col-sm-6 col-12 offset-sm-0">
                        <div className="banner-item">
                            <h1 style={{ color: '#3A4256' }}>Your New <span style={{ color: "#FF9800" }}>Smile</span> <br /> Starts Here</h1>
                            <p>
                                Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments
                            </p>
                            <Link to='/appointment'>
                                <button className="button-style">GET APPOINTMENT</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1 col-sm-6 col-12 offset-sm-0">
                        <div className="banner-img">
                            <img src={chair} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={dental} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={chair} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={doctors} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>
        </div>
    );
};

export default BannerOne;