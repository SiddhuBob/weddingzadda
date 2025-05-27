import React from "react";
import "../../Css/Home/WeddingCategory.css";
import demoimage from "../../Images/image.webp";
import venues from "../../Images/HomePage/category/venues.jpg";
import Planning_Decor from "../../Images/HomePage/category/Planning & Decor.jpeg";
import Bridal_Wear from "../../Images/HomePage/category/Bridal Wear.jpg";
import makeup from "../../Images/HomePage/category/makeup.jpeg";
import photographers from "../../Images/HomePage/category/Pre_Wedding_Shoot.jpg";
import Pre_Wedding_Shoot from "../../Images/HomePage/category/Pre Wedding Shoot.jpg";
const WeddingCategory = (() => {
    return (
        <>
            <section className="home-wedding-category-section">
                <div className="container">
                    <div className="home-wedding-section-category-main-con">
                        <div className="home-wedding-section-category-head-main-con">
                            <div className="head-common-image-con">
                                <img src={demoimage} />
                            </div>
                            <h3>Wedding Categories</h3>
                        </div>

                        <div className="home-wedding-section-category-details-main-con">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="home-wedding-section-category-details-first-main-con">
                                        <div className="home-wedding-section-category-details-first-con-card">
                                            <div className="home-wedding-section-category-details-first-card">
                                                <div className="home-wedding-section-category-details-first-image-con home-wedding-section-category-details-first-image-big">
                                                    <img src={venues} />
                                                </div>
                                            </div>
                                            <div className="home-wedding-section-category-details-first-text">
                                                <h3>Venues</h3>
                                            </div>
                                        </div>

                                        <div className="home-wedding-section-category-details-first-con-card">
                                            <div className="home-wedding-section-category-details-first-card">
                                                <div className="home-wedding-section-category-details-first-image-con home-wedding-section-category-details-first-image-small">
                                                    <img src={Planning_Decor} />
                                                </div>
                                            </div>
                                            <div className="home-wedding-section-category-details-first-text">
                                                <h3>Planning & Decor</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="home-wedding-section-category-details-first-main-con">
                                        <div className="home-wedding-section-category-details-first-con-card">
                                            <div className="home-wedding-section-category-details-first-card">
                                                <div className="home-wedding-section-category-details-first-image-con home-wedding-section-category-details-first-image-small">
                                                    <img src={Bridal_Wear} />
                                                </div>
                                            </div>
                                            <div className="home-wedding-section-category-details-first-text">
                                                <h3>Bridal Wear</h3>
                                            </div>
                                        </div>

                                        <div className="home-wedding-section-category-details-first-con-card">
                                            <div className="home-wedding-section-category-details-first-card">
                                                <div className="home-wedding-section-category-details-first-image-con home-wedding-section-category-details-first-image-small">
                                                    <img src={makeup} />
                                                </div>
                                            </div>
                                            <div className="home-wedding-section-category-details-first-text">
                                                <h3>makeup</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="home-wedding-section-category-details-first-main-con">
                                        <div className="home-wedding-section-category-details-first-con-card">
                                            <div className="home-wedding-section-category-details-first-card">
                                                <div className="home-wedding-section-category-details-first-image-con home-wedding-section-category-details-first-image-big">
                                                    <img src={photographers} />
                                                </div>
                                            </div>
                                            <div className="home-wedding-section-category-details-first-text">
                                                <h3>photographers</h3>
                                            </div>
                                        </div>

                                        <div className="home-wedding-section-category-details-first-con-card">
                                            <div className="home-wedding-section-category-details-first-card">
                                                <div className="home-wedding-section-category-details-first-image-con home-wedding-section-category-details-first-image-small">
                                                    <img src={Pre_Wedding_Shoot} />
                                                </div>
                                            </div>
                                            <div className="home-wedding-section-category-details-first-text">
                                                <h3>Pre Wedding Shoot</h3>
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

export default WeddingCategory;