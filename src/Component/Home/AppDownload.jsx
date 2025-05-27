import React, { useState } from "react";
import "../../Css/Home/AppDownload.css";
import { FcIdea } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
const AppDownload = (() => {
    const [phone, setPhone] = useState('');
    return (
        <>
            <section className="home-page-app-download-con">
                <div className="container">
                    <div className="home-page-app-download-main-con">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="home-page-app-download-main-div">
                                    <div className="home-page-app-main-details-con">
                                        <h3>Download The WedMeGood Mobile App Today!</h3>
                                        <div className="home-page-main-details-main-points-con">
                                            <div className="home-page-main-details-main-points-icons-text-con">
                                                <FcIdea />
                                                <h4>Save Wedding Ideas</h4>
                                            </div>
                                            <div className="home-page-main-details-main-points-icons-text-con">
                                                <FaHeart />
                                                <h4>Shortlist Vendors</h4>
                                            </div>
                                            <div className="home-page-main-details-main-points-icons-text-con">
                                                <IoIosListBox />
                                                <h4>Get Free Wedding Checklist</h4>
                                            </div>
                                        </div>

                                        <div className="home-page-app-download-main-details-inputs-con">
                                            <h5>You will receive an SMS with a link to download the App</h5>
                                            <div>
                                                <PhoneInput
                                                    defaultCountry="ua"
                                                    value={phone}
                                                    onChange={(phone) => setPhone(phone)}
                                                    className="home-page-app-download-inputs"
                                                />
                                            </div>
                                            <div className="home-page-app-download-main-inputs-btn">
                                                <button>
                                                    download now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="home-page-app-download-details-image-main-con">
                                    <div className="home-page-app-download-details-image-con">

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


export default AppDownload;