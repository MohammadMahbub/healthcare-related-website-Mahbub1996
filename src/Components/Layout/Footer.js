import { faFacebookF, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterCol from './FooterCol';
import './Layout.css';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const services = [
        { name: "About Us", link: "/emergency" },
        { name: "Consultants", link: "/checkup" },
        { name: "Working Hours", link: "/personal-treatment" },
        { name: "Procedures", link: "/tooth-extract" },
        { name: "Special Offers", link: "/checkup" }
        
    ]
    const oralHealth = [
        { name: "Services", link: "/emergency" },
        { name: "Healthy Foods", link: "/personal-treatment" },
        { name: "Appointments", link: "/tooth-extract"},
        { name: "Latest News", link: "/checkup" },
        { name: "Certificates", link: "/checkup" }
    ]
    const ourAddress = [
        { name: "Park Drive, Varick Str NY 10012, USA", link: "https://www.google.com/maps" },
        { name: "Getwell@Hospitals.com", link: "https://www.google.com/maps" },
        { name: "(123) 0200 12345 & 7890        ", link: "https://www.google.com/maps" },
        { name: "Mon-Friday: 9am to 18pm", link: "https://www.google.com/maps" },
        { name: "Sat-Sunday: 10am to 16pm", link: "https://www.google.com/maps" },

    ]

    return (
        <footer className="footer-area clear-both">
            <div className="container">
                <div className="row py-3">
                    <FooterCol key={1} menuItems={noNamed}></FooterCol>
                    <FooterCol key={2} menuTitle={'Usefull Links'} menuItems={services}></FooterCol>
                    <FooterCol key={3} menuTitle={"Services"} menuItems={oralHealth}></FooterCol>
                    <FooterCol key={4} menuTitle={'Contact Details'} menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a href="//facebook.com">
                                    <FontAwesomeIcon className='icon active-icon' icon={faFacebookF} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//google.com">
                                    <FontAwesomeIcon className='icon' icon={faGooglePlus} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="mb-5">Call Now</h6>
                            <a className="button-style" href="tel:01771225965">+123522455424 </a>
                        </div>
                    </FooterCol>
                    <div className="text-center  pt-5">
                        <p>&copy; {(new Date()).getFullYear()} All rights reserved</p>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="copyRight text-center">
                    <p>&copy; {(new Date()).getFullYear()} All rights reserved by Mahbub</p>
                </div>
=======

>>>>>>> b1a3a56e8cbabf5fd85a1f8e495ebed519faa408
            </div>
        </footer>
    );
};

export default Footer;