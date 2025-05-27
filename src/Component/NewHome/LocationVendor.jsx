import React from 'react';
import "../../Css/NewHome/LocationVendor.css";
import demoimage from "../../Images/image.webp";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
const LocationVendor = () => {
    return (
        <div>

            <section className='new-home-loaction-vendor-section'>
                <div className='container'>
                    <div className='new-home-loaction-vendor-section-main-con'>
                        <div className='new-home-loaction-vendor-section-head-con'>
                            <div className="home-wedding-section-category-head-main-con">
                                <div className="head-common-image-con">
                                    <img src={demoimage} />
                                </div>
                                <h3>Wedding Categories</h3>
                            </div>
                        </div>

                        <div className='new-home-section-loaction-vendor-section-details-main-con'>
                            <div className='row'>
                                <div className="col-md-4">
                                    <div className='new-home-section-location-vendor-section-card-main-con'>
                                        <div className='new-home-section-location-vendor-section-image-main-con'>
                                            <div className='new-home-section-location-vendor-section-image-con'>

                                            </div>
                                        </div>
                                        <div className="new-home-section-location-vendor-section-details-main-con">
                                            <h3>Bloom & Petal Florists</h3>
                                            <h4>Florist</h4>
                                            <div className='new-home-section-location-vendor-section-details-star-con'>
                                                <FaStar />
                                                <h5>4.5</h5>
                                                <span>/</span>
                                                <h5>5</h5>
                                            </div>
                                            <div class="new-home-section-location-vendor-section-details-buttons">
                                                <button class="new-home-section-location-vendor-section-details-btn new-home-section-location-vendor-section-details-btn-3">Hover Me <IoIosArrowRoundForward/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default LocationVendor
