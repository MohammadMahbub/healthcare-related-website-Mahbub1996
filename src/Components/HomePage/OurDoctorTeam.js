import React from 'react';
import dr1 from '../../images/Images.1/doctor/team-member-01.png'
import dr2 from '../../images/Images.1/doctor/team-member-02.png'
import dr3 from '../../images/Images.1/doctor/team-member-03.png'
import dr4 from '../../images/Images.1/doctor/team-member-04.png'

const OurDoctorTeam = () => {
    return (
        <div class="my-5 container">
            <div>
            <h2 class="experiance ">| Meet Our Team</h2>
            <h6 class="">Description text here...</h6>
            </div>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card">
                        <img style={{width: ' 200px', margin: 'auto'}} src={dr1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">Dr. John</h4>
                            <p class="card-text">Dentist</p>
                        </div>
                        <div style={{fontSize : '20px', margin: ' auto', marginBottom: '10px'}}>
                            <i class="fab fa-facebook mx-2"></i>
                            <i class="fab fa-twitter-square mx-2"></i>
                            <i class="fab fa-instagram-square mx-2"></i>
                            <i class="fab fa-google-plus-square mx-2"></i>
                        </div>
                        <button style={{width : '120px', margin: 'auto', marginBottom : ' 10px'}} type="button" class="btn btn-outline-danger">View More</button>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                        <img style={{width: ' 200px', margin: 'auto'}} src={dr2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">Dr. Amelia</h4>
                            <p class="card-text">Gynecologist</p>
                        </div>
                        <div style={{fontSize : '20px', margin: ' auto', marginBottom: '10px'}}>
                            <i class="fab fa-facebook mx-2"></i>
                            <i class="fab fa-twitter-square mx-2"></i>
                            <i class="fab fa-instagram-square mx-2"></i>
                            <i class="fab fa-google-plus-square mx-2"></i>
                        </div>
                        <button style={{width : '120px', margin: 'auto', marginBottom : ' 10px'}} type="button" class="btn btn-outline-danger">View More</button>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                        <img style={{width: ' 200px', margin: 'auto'}} src={dr3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">Dr. Jack</h4>
                            <p class="card-text">Audiology</p>
                        </div>
                        <div style={{fontSize : '20px', margin: ' auto', marginBottom: '10px'}}>
                            <i class="fab fa-facebook mx-2"></i>
                            <i class="fab fa-twitter-square mx-2"></i>
                            <i class="fab fa-instagram-square mx-2"></i>
                            <i class="fab fa-google-plus-square mx-2"></i>
                        </div>
                        <button style={{width : '120px', margin: 'auto', marginBottom : ' 10px'}} type="button" class="btn btn-outline-danger">View More</button>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                        <img style={{width: ' 200px', margin: 'auto'}} src={dr4} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">Dr. Charlie</h4>
                            <p class="card-text">Dentist</p>
                        </div>
                        <div style={{fontSize : '20px', margin: ' auto', marginBottom : ' 10px'}}>
                            <i class="fab fa-facebook mx-2"></i>
                            <i class="fab fa-twitter-square mx-2"></i>
                            <i class="fab fa-instagram-square mx-2"></i>
                            <i class="fab fa-google-plus-square mx-2"></i>
                        </div>
                        <button style={{width : '120px', margin: 'auto', marginBottom : ' 10px'}} type="button" class="btn btn-outline-danger">View More</button>
                        </div>
                    </div>

                    
            </div>
        </div>
    );
};

export default OurDoctorTeam;