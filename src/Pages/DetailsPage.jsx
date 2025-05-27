import React, { useEffect, useState } from "react";
import "../Css/DetailsPage.css";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMailUnread } from "react-icons/io5";
import { Button, DatePicker, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useParams } from "react-router-dom";
import venues_demo_image from "../Images/venues/venues_demo_image.jpg";
import axios from "axios";

const DetailsPage = (() => {
    const [isOpen, setIsOpen] = useState(false);
    const { vendorSlug } = useParams()

    const [VenuesDetails, setDetailsList] = useState([])

    const venuesDetailsFetch = async () => {
        try {
            const response = await axios.get(`https://api.weddingzadda.com/api/vendor/${vendorSlug}`);
            setDetailsList(response.data.vendor);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        venuesDetailsFetch()
    }, [vendorSlug]);

    console.log("VenuesDetails", VenuesDetails)
    return (
        <>

            <section className="Details-page-main-section-1">
                <div className="Details-page-section-1-banner">
                    <h1>{VenuesDetails.name} {VenuesDetails.city} {VenuesDetails.state}</h1>
                </div>
            </section>
            <div className="venues-details-page-navigation">

            </div>

            <section className="venues-service-details-page-section">
                <div className="container">
                    <div className="venues-service-details-page-section-main-con">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="venues-service-details-page-section-left-side-con">
                                    <div className="venues-service-details-page-image-con">
                                        <img
                                            src={`https://api.weddingzadda.com/storage/${VenuesDetails?.cover_image}` || venues_demo_image}
                                            alt={VenuesDetails?.name}
                                            onError={(e) => { e.target.onerror = null; e.target.src = venues_demo_image; }}
                                        />
                                    </div>
                                    <div className="venues-service-details-div-2-details-con-main">
                                        <div className="venues-service-details-div-2-name-review">
                                            <h3>{VenuesDetails?.name}</h3>
                                            <div className="venues-service-details-div-2-name-location-main-con">
                                                <div className="venues-service-details-div-2-name-location">
                                                    <IoLocation />
                                                    <p>{VenuesDetails?.city} , {VenuesDetails?.state}</p>

                                                </div>
                                                <h4><span>{VenuesDetails?.address1}</span></h4>
                                            </div>
                                            <div className="venues-service-details-div-2-call-con">
                                                <IoCall />
                                                <h5>Contact</h5>
                                            </div>
                                        </div>
                                        <div className="venues-service-details-div-2-points-4-con">
                                            <div className="row">
                                                <div className="col-md-3 venues-service-details-col">
                                                    <div className="venues-service-details-page-4-points-name-icons">
                                                        <FaImage />
                                                        <span>{VenuesDetails?.images?.length}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 venues-service-details-col">
                                                    <div className="venues-service-details-page-4-points-name-icons">
                                                        <FaRegHeart />
                                                        <span>Shortlisted</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 venues-service-details-col">
                                                    <div className="venues-service-details-page-4-points-name-icons">
                                                        <MdOutlineRateReview />
                                                        <span>Write a Review</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 venues-service-details-col">
                                                    <div className="venues-service-details-page-4-points-name-icons">
                                                        <FaShare />
                                                        <span>Share</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="venues-service-page-tabs-main-con">
                                        <div className="venues-service-page-tabs-con">
                                            <h6>banquits</h6>
                                        </div>
                                        <div className="venues-service-page-tabs-con">
                                            <h6>Projects</h6>
                                        </div>
                                        <div className="venues-service-page-tabs-con">
                                            <h6>About</h6>
                                        </div>
                                        <div className="venues-service-page-tabs-con">
                                            <h6>Reviews</h6>
                                        </div>
                                    </div> */}

                                    {/* <div className="venues-details-page-section-3-area">
                                        <div className="venues-details-page-section-3-area-head-con">
                                            <h3>Areas Available (4)</h3>
                                        </div>

                                        <div className="venues-details-page-section-3-area-details-con">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="venues-details-page-section-3-area-card-main-con">
                                                        <div className="venues-details-page-section-3-area-image-con">

                                                        </div>
                                                        <div className="venues-details-page-section-3-area-info-con">
                                                            <h4>1000 Seating | 2000 Floating</h4>
                                                            <p>Lawn</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="venues-details-page-section-3-area-card-main-con">
                                                        <div className="venues-details-page-section-3-area-image-con">

                                                        </div>
                                                        <div className="venues-details-page-section-3-area-info-con">
                                                            <h4>1000 Seating | 2000 Floating</h4>
                                                            <p>Lawn</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="venues-details-page-section-3-area-card-main-con">
                                                        <div className="venues-details-page-section-3-area-image-con">

                                                        </div>
                                                        <div className="venues-details-page-section-3-area-info-con">
                                                            <h4>1000 Seating | 2000 Floating</h4>
                                                            <p>Lawn</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="venues-details-page-section-3-area-card-main-con">
                                                        <div className="venues-details-page-section-3-area-image-con">

                                                        </div>
                                                        <div className="venues-details-page-section-3-area-info-con">
                                                            <h4>1000 Seating | 2000 Floating</h4>
                                                            <p>Lawn</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="venues-details-page-section-4-menu">
                                            <div className="venues-deteils-page-section-4-head-con">
                                                <h3>Menu</h3>
                                            </div>
                                            <div className="venues-details-page-section-4-menu-pdf-main-con">

                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="venues-details-page-section-5-gallery">
                                        <div className="venues-details-page-section-5-gallery-head">
                                            <div className="venues-details-page-section-5-gallery-tabs-con">
                                                <h3>Portfolio <span>({VenuesDetails?.images?.length})</span></h3>
                                            </div>
                                            {/* <div className="venues-details-page-section-5-gallery-tabs-con">
                                                <h3>Albums <span>(4)</span></h3>
                                            </div>
                                            <div className="venues-details-page-section-5-gallery-tabs-con">
                                                <h3>Videos <span>(1)</span></h3>
                                            </div> */}
                                        </div>

                                        <div className="venues-details-page-section-5-gallery-tabs-details-con">
                                            <div className="row">
                                                {
                                                    VenuesDetails?.images?.map((elem) => {
                                                        const { image } = elem
                                                        return (
                                                            <>
                                                                <div className="col-md-4">
                                                                    <div className="venues-details-page-section-5-tabs-main-card">
                                                                        <img
                                                                            src={`https://api.weddingzadda.com/storage/${image}` || venues_demo_image}
                                                                            // alt={VenuesDetails?.name}
                                                                            onError={(e) => { e.target.onerror = null; e.target.src = venues_demo_image; }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }

                                                {/* <div className="col-md-4">
                                                    <div className="venues-details-page-section-5-tabs-main-card">

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="venues-details-page-section-5-tabs-main-card">

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="venues-details-page-section-5-tabs-main-card">

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="venues-details-page-section-5-tabs-main-card">

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="venues-details-page-section-5-tabs-main-card">

                                                    </div>
                                                </div> */}
                                            </div>

                                            <div className="venues-details-page-section-5-tabs-more-btn">
                                                <button>
                                                    More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="venues-details-page-section-right-side-main-con">
                                    <div className="venues-details-page-section-right-side-price-main-con"
                                        onClick={() => setIsOpen(!isOpen)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div className="venues-details-page-section-right-side-head">
                                            <h3>Starting Price</h3>
                                            <div className="venues-details-page-section-right-side-head-dropdown">
                                                <h4>Pricing Info <IoIosArrowDown /></h4>
                                            </div>
                                        </div>
                                        {/* Dropdown Content */}
                                        {isOpen && (
                                            <div className="venues-details-page-section-right-side-drop-details-main-con">
                                                <div className="venues-details-page-section-right-side-drop-details-room">
                                                    <div className="venues-details-page-section-right-side-drop-details-room-con">
                                                        <h5>Room Price</h5>
                                                        <p>₹ 4,500 per room</p>
                                                    </div>
                                                    <div className="venues-details-page-section-right-side-drop-details-room-con">
                                                        <h5>Starting Price of Decor</h5>
                                                        <p>₹ 700,000 per room</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="venues-details-page-section-right-side-food">
                                            {
                                                VenuesDetails?.pricing?.map((elem) => {
                                                    const { price, price_category, price_name, price_type } = elem
                                                    return (
                                                        <>
                                                            <div className="venues-details-page-section-right-side-food-con">
                                                                <h6>₹ {price} <span>({price_name})</span></h6>
                                                                <p>{price_category}</p>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                            {/* <div className="venues-details-page-section-right-side-food-con">
                                                <h6>₹ 4,000 <span>per plate</span> <p>(taxes extra)</p></h6>
                                                <p>non veg price</p>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="venues-details-page-section-form-con">
                                        <div className="venues-details-page-section-call-whatsapp-con">
                                            <div class="box-1">
                                                <div class="btn btn-one">
                                                    <span><IoMailUnread /> Send Message</span>
                                                </div>
                                            </div>
                                            <div class="box-1">
                                                <div class="btn btn-one">
                                                    <span><IoCall /> Contact Now</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sc-eilVRo eQdQde"></div>

                                        <div className="venues-details-page-right-side-main-details-section-form">
                                            <Form>
                                                <div className="venues-details-page-form-right-side-inputs">
                                                    <Form.Item>
                                                        <Input placeholder="Full Name" />
                                                    </Form.Item>
                                                </div>
                                                <div className="venues-details-page-form-right-side-inputs">
                                                    <Form.Item>
                                                        <Input placeholder="Contact Number" />
                                                    </Form.Item>
                                                </div>
                                                <div className="venues-details-page-form-right-side-inputs">
                                                    <Form.Item>
                                                        <Input placeholder="Email id" />
                                                    </Form.Item>
                                                </div>
                                                <div className="venues-details-page-form-right-side-inputs">
                                                    <Form.Item>
                                                        <DatePicker style={{ width: "100%" }} />
                                                    </Form.Item>
                                                </div>
                                                <div className="venues-details-page-form-right-side-inputs">
                                                    <Form.Item>
                                                        <TextArea placeholder="Message" rows={6} />
                                                    </Form.Item>
                                                </div>
                                                <div className="venues-details-page-form-right-side-inputs">
                                                    <Form.Item>
                                                        <Button>
                                                            Submit
                                                        </Button>
                                                    </Form.Item>
                                                </div>
                                            </Form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="venues-details-page-section-8-about-info">
                            <div className="venues-details-page-section-8-about-head-main-con">
                                <h3>about <span>{VenuesDetails?.name}</span> - <span>Wedding Venues,</span> <span>{VenuesDetails?.city},</span> <span>{VenuesDetails?.state}</span></h3>
                            </div>

                            <div className="venues-details-page-section-8-about-details-info-con">
                                {VenuesDetails?.text_editor && (
                                    <div dangerouslySetInnerHTML={{ __html: VenuesDetails.text_editor }} />
                                )}
                                {/* <p>Located in North Bangalore, The Kalanivasthi is a popular wedding resort. This magnificent venue has indoor, outdoor, and poolside spacing for guests that can accommodate 100 to 300 people. The staff at The Kalanivasthi is dedicated and hardworking in their field of work and will make sure to make your stay comfortable and memorable. </p>
                                <h3>Space and Availability at The Kalanivasthi</h3>
                                <p>The Kalanivasthi offers indoor, outdoor, and poolside spacing that can accommodate 100 to 300 guests. 12 rooms are also available for the outstation guests to stay. Sufficient parking space is also available at the venue. </p>
                                <br></br>
                                <h3>Facilities Offered by The Kalanivasthi</h3>
                                <p>The team at The Kalanivasthi offers a wide range of services for all its clients. </p>
                                <ul>
                                    <li>Outside decorators permitted </li>
                                    <li>In-house and outside catering allowed</li>
                                    <li>Inhouse alcohol is not available </li>
                                    <li>Outside alcohol is permitted </li>
                                    <li>Inhouse DJ available</li>
                                    <li>Outside DJ is permitted </li>
                                    <li>Bridal Room</li>
                                </ul>
                                <h3>Catering & Cuisines</h3>
                                <p>The Kalanivasthi offers in-house catering services and outside catering for its guests. The place offers a wide range of delicacies for their guests.</p>
                                <h3>Location of The Kalanivasthi</h3>
                                <p>The Kalanivasthi is located in Lakshmipura, Bengaluru, Karnataka, India. </p> */}
                            </div>

                            <div className="venues-details-page-section-9-info-points">
                                <div className="row">
                                    {
                                        VenuesDetails?.features?.map((elem) => {
                                            const { title, description } = elem
                                            return (
                                                <>
                                                    <div className="col-md-3">
                                                        <div className="venues-details-page-section-9-info-points-con">
                                                            <h3>{title}</h3>
                                                            <p>{description}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                    {/* <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Room Count</h3>
                                            <p>22 Rooms</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Catering policy</h3>
                                            <p>Outside caterering only</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Decor Policy</h3>
                                            <p>Outside decorators permitted</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Space</h3>
                                            <p>Indoor, Outdoor, Poolside, Terrace / Rooftop</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Room Price</h3>
                                            <p>4,500 per room</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Features</h3>
                                            <p>Outside Decorator Allowed, Outside Caterer Allowed, Outside Alcohol Allowed</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Start of Venue</h3>
                                            <p>2022</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Parking</h3>
                                            <p>There is sufficient parking available</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="venues-details-page-section-9-info-points-con">
                                            <h3>Outside Alcohol</h3>
                                            <p>In house alcohol not available, Outside alcohol  permitted</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
});

export default DetailsPage;