import React from 'react';
import "../../Css/NewHome/NewHomeCategory.css";
import demoimage from "../../Images/image.webp";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
const NewHomeCategory = () => {
    return (
        <div>
            <section className='new-home-section'>
                <div className='container'>
                    <div className='new-home-section-category-main-con'>
                        <div className='new-home-section'>
                            <div className="home-wedding-section-category-head-main-con">
                                <div className="head-common-image-con">
                                    <img src={demoimage} />
                                </div>
                                <h3>Wedding Categories</h3>
                            </div>

                        </div>
                        <div className='row'>
                            <div className="col-md-3">
                                <div className="new-home-category-card">
                                    <div className='new-home-category-section-image-main-con'>
                                        <div className='new-home-category-section-image-con'>

                                        </div>
                                    </div>
                                    <div className='new-home-category-section-details-main-con'>
                                        <h4>Venues</h4>
                                        <div className='new-home-categpry-section-btn'>
                                            <Link>
                                                Expoler Venues <IoIosArrowForward/>
                                            </Link>
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

export default NewHomeCategory
