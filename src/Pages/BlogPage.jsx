import React from "react";
import "../Css/BlogPage.css";
import demoimage from "../Images/image.webp";
import BlogData from "../Component/BlogData";


const BlogPage = (() => {
    return (
        <>
            <section className="about-us-page-main-section-1">
                <div className="about-us-page-section-1-banner">
                    {/* <h1>{VenuesDetails.name} {VenuesDetails.city} {VenuesDetails.state}</h1> */}
                </div>
            </section>

            <section className="blog-section-1">
                <div className="container">
                    <div className="blog-section-1-main-con">
                        <div className="home-wedding-section-category-head-main-con">
                            <div className="head-common-image-con">
                                <img src={demoimage} />
                            </div>
                            <h3>Reading Time</h3>
                        </div>
                        <div className="blog-section-1-details-main-con">
                        <div className="row">
                            {
                                    BlogData?.map((elem, index) => {
                                        return (
                                            <div className="col-md-4" key={index}> {/* Added key prop */}
                                                <div className="home-blog-card-main-con">
                                                    <div className="home-blog-card-image-main-con" style={{ backgroundImage: `url(${elem.blogImage})` }}> {/* Display the image */}
                                                        <div className="home-blog-card-image-overlay-date">
                                                            <span>{elem.blogDate}</span>
                                                        </div>
                                                    </div>
                                                    <div className="home-blog-card-image-details-main-con">
                                                        <h4>{elem.blogtitle}</h4> {/* Access the blogtitle property */}
                                                        <h5>{elem.blogName}</h5> {/* Access the blogName property */}
                                                        <p>{elem.blogshortDes}</p> {/* Access the blogshortDes property */}
                                                        <div className="home-blog-card-details-btn">
                                                            <button className="btn">
                                                                read more
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
});

export default BlogPage;