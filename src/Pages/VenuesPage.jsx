import React, { useEffect, useState } from "react";
import "../Css/Pages/VenuesPage.css";
import { IoSearch } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { BsExclamationDiamond } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import LocationData from "../Component/Data/LocationData";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const VenuesPage = (() => {
    const { category, subcategory } = useParams();
    console.log("category", category);
    console.log("subcategory", subcategory);
    const [venuesDetails, setVenuesDetails] = useState([]);

    const venuesDetailsFetch = async () => {
        try {
            const response = await axios.get(`https://api.weddingzadda.com/api/${category}/${subcategory}`);
            console.log('response', response);
            let vendorData;
            if (subcategory === "all") {
                vendorData = response?.data?.category?.subcategories?.flatMap(sub => sub.vendors);
            } else {
                vendorData = response?.data?.subcategory?.vendors;
            }
            setVenuesDetails(vendorData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        venuesDetailsFetch();
    }, [subcategory, category]);


    return (
        <>
            <section className="vendor-page-main-section-1">
                <div className="vendor-page-section-1-banner"></div>
            </section>

            <section className="venues-page-section-1">
                <div className="container">
                    {/* <div className="venues-page-section-1search-and-name">
                        <div className="venues-section-1-page--name">
                            <h3>Wedding Venues</h3>
                            <h4>Showing {VenuesDetails?.length} results as per your search criteria</h4>
                        </div>
                        <div className="venues-section-1-page-search">
                            <div class="search-box">
                                <input class="search-txt" type="text" name="" placeholder="Type to Search" />
                                <a class="search-btn" href="#">
                                    <IoSearch />
                                </a>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="venues-section-1-location-main-con">
                        <div className="venues-section-1-location-con">
                            {
                                LocationData.map((elem) => {
                                    return (
                                        <>
                                            <div className="venues-section-1-location-card-con">
                                                <div className="venues-section-1-location-card-image-con">
                                                    <img src={elem.LoactionImage} alt="" />
                                                </div>
                                                <h3>{elem.LocationName}</h3>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div> */}
                </div>
            </section>


            <section className="venues-section-2-card-main-con">
                <div className="container">
                    <div className="row">
                        {
                            venuesDetails?.map((elem) => {
                                const { cover_image, name, based_area, city, pricing,slug } = elem
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="venues-section-2-main-card-con">
                                                <Link to={`${slug}`}>
                                                    <div className="venues-section-2-main-image-con">
                                                        <div className="venues-section-2-image-con">
                                                            <img src={`https://api.weddingzadda.com/storage/${cover_image}`} alt={name} />
                                                        </div>
                                                        <div className="venues-section-2-image-overlay-rating-main-con">
                                                            <IoStar />
                                                            <h3>4.9</h3>
                                                        </div>
                                                        <div className="venues-section-2-image-overlay-info-main-con">
                                                            <BsExclamationDiamond />
                                                        </div>
                                                    </div>

                                                    <div className="venues-section-2-main-card-details-con">
                                                        <h4>{name}</h4>
                                                        <div className="venues-section-2-card-location-and-category">
                                                            <div className="venues-section-2-card-location">
                                                                <MdLocationPin />
                                                                <p>
                                                                    <span>{based_area},</span>
                                                                    <span>{city}</span>
                                                                </p>
                                                            </div>
                                                            <div className="venues-section-2-card-location">
                                                                <FaHotel />
                                                                <h5>4 Star & Above Wedding Hotels, Banquet Halls</h5>
                                                            </div>
                                                        </div>
                                                        <div className="venues-section-2-card-food-details-main-con">
                                                            {
                                                                pricing?.map((elem) => {
                                                                    return (
                                                                        <>
                                                                            <div className="venues-section-2-card-food-details-con">
                                                                                <h6>{elem.price_category}</h6>
                                                                                <p>{elem.price} <span>{elem.price_name}</span></p>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
});

export default VenuesPage;