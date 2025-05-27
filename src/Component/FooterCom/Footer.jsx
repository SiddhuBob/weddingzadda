import React from "react";
import "../FooterCom/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import playstoreapp from "../../Images/download-play-store.png";
import appstore from "../../Images/download-app-store.png";
import logo from "../../Images/Logo new.png";
const Footer = (() => {
    return (
        <>
            <section className="main-footer-section">
                <div className="container">
                    <div className="footer-logo">
                        <img src={logo}/>

                    </div>
                    <div className="footer-section-details-main-con">
                        <h2>Wedding Adda - <span>Your Personal Wedding Planner</span></h2>
                        <p>Plan your wedding with Us</p>
                        <p>Get best quote from Kanha Banquet & Lawn and book your date! Send enquiry to your selected list of Wedding Venues at WedMeGood and choose the best. Browse for more Wedding Venues in your city and more wedding vendors in your city at WedMeGood and plan your wedding hassle free.</p>
                    </div>

                    <div className="footer-mid-main-con">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="footer-mid-main-addres-main-con">
                                    <div className="footer-mid-main-addres">
                                        <h3>Registered Address</h3>
                                        <p>Number 102/B, Office, MOHID HEIGHTS सुरेश नगर, अंधेरी पश्चिम 1st, Mumbai, Maharashtra 400053</p>
                                    </div>
                                    <div className="footer-mid-main-contact-details">
                                        <div className="footer-mid-main-contact-info-main-con">
                                            <h4>For Vendors</h4>
                                            <a>vendors@wedmegood.com</a>
                                            <a>0124-6812346</a>
                                        </div>
                                        <div className="footer-mid-main-contact-info-main-con">
                                            <h4>For Users</h4>
                                            <a>info@wedmegood.com</a>
                                            <a>0124-6812345</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <div className="footer-main-social-media-mink-main-com">
                                    <h3>Follow us on:</h3>
                                    <div className="footer-main-social-media-con">
                                        <FaFacebookF />
                                        <span>facebook</span>
                                    </div>
                                    <div className="footer-main-social-media-con">
                                        <FaInstagram />
                                        <span>instagram</span>
                                    </div>
                                    <div className="footer-main-social-media-con">
                                        <FaXTwitter />
                                        <span>twitter</span>
                                    </div>
                                    <div className="footer-main-social-media-con">
                                        <FaPinterest />
                                        <span>pinterest</span>
                                    </div>
                                    <div className="footer-main-social-media-con">
                                        <FaYoutube />
                                        <span>youtube</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-4">
                                <div className="Footer-section-app-download">
                                    <h3>Get The <span>Wedding Adda</span> App</h3>
                                    <div className="footer-section-app-download-app-store-main-con">
                                        <div className="footer-section-app-download-app-store-con">
                                            <div className="footer-section-app-download-app-store">
                                                <img src={playstoreapp} alt="play store app"/>
                                            </div>
                                            <div className="footer-section-app-download-app-store">
                                                <img src={appstore} alt="app store"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
});


export default Footer;

