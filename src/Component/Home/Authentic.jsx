import React from "react";
import "../../Css/Home/Authentic.css";
import image01 from "../../Images/authentic_image_01.jpg";
import image02 from "../../Images/authentic_image_02.jpg";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Authentic = (() => {
    return (
        <>
            <section className="authentic-home-section-main-con">
                <div className="row authentic-row">
                    <div className="col-md-6">
                        <div className="authentic-home-section-images-main-con">
                            <div className="authentic-home-section-images-first-con">
                                <img src={image01} alt="image01" />
                            </div>
                            <div className="authentic-home-section-images-second-con">
                                <img src={image02} alt="image01" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="authentic-home-section-details-main-con">
                            <div className="authentic-home-section-details-con">
                                <h2>A Truly Authentic Experience</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores laboriosam aspernatur suscipit porro asperiores delectus doloribus, saepe rerum exercitationem consectetur, enim placeat? Voluptatum doloribus a blanditiis necessitatibus nihil nemo?
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat deserunt veniam corrupti? Libero, ad odit assumenda tempora amet aperiam laudantium aliquid, quaerat itaque provident consequuntur nihil ullam beatae corporis sint.
                                </p>
                                <div className="authentic-home-section-details-links-con">
                                    <Link>
                                        <h3>Service</h3>
                                        <LiaLongArrowAltRightSolid />
                                    </Link>
                                    <Link>
                                        <h3>Contact</h3>
                                        <LiaLongArrowAltRightSolid />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
});

export default Authentic;