import React, { useState, useEffect } from "react";
import "../Css/Pages/VendorPage.css";
import VendorCategoryList from "../Component/Data/VendorCategoryList";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";
const VendorPage = () => {
    const [topPhotographers, setTopPhotographers] = useState([]);
    const [openItems, setOpenItems] = useState({});
    // Use useEffect to prevent infinite re-renders
    useEffect(() => {
        const weddingPhotographers = VendorCategoryList.filter((elem) => elem.vendorId === "11");
        setTopPhotographers(weddingPhotographers);
    }, []); // Empty dependency array ensures this runs only once


    const [allVendorsList, setallVendorsList] = useState([])

    const allVendorsListFetch = async () => {
        try {
            const response = await axios.get(`https://api.weddingzadda.com/api/vendorsalldata`);
            setallVendorsList(response.data.categories);
            console.log("response.data",response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        allVendorsListFetch()
    }, []);

    const toggleItem = (key) => {
        setOpenItems((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };
    

    return (
        <>
            <section className="vendor-page-main-section-1">
                <div className="vendor-page-section-1-banner">

                </div>
            </section>

            <section className="vendor-page-section-1">
                <div className="container">
                    <div className="vendor-page-section-1-head">
                        <h2 className="head-font">Wedding Categories</h2>
                    </div>

                    {/* <div className="vendor-page-section-1-details">
                        <div className="row">
                            {VendorData.map((elem, index) => {
                                const { vendorMainName, image, vendorCategoryMain } = elem;
                                return (
                                    <div className="col-md-4" key={index}>
                                        <div className="vendor-section-1-details-main-card-con">
                                            <div className="vendor-section-1-details-main-card">
                                                <img src={image} alt={vendorMainName} />
                                                <div className="side front">
                                                    <div className="vendor-section-1-details-main-card-font-text">
                                                        <h3>{vendorMainName}</h3>
                                                    </div>
                                                </div>
                                                <div className="side back">
                                                    <div className="vendor-section-1-details-main-card-font-back">
                                                        <ul>
                                                            {vendorCategoryMain.map((ele, idx) => (
                                                                <li key={idx}>{ele.vendorMainCategoryName}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div> */}


                    <div className="vendor-page-section-1-new-adding">
                            <div className="vendor-page-section-1-new-main-con">
                        <div className="row">
                                {
                                    allVendorsList?.map((elem) => {
                                        const { name, subcategories,image,slug } = elem
                                        console.log("Wedding Categories",image)
                                        return (
                                            <>
                                                <div className="col-md-6">
                                                    <div className="vendor-page-section-1-main-card-con">
                                                        <div
                                                            className="vendore-page-section-1-card-con-dropdown-con"
                                                            onClick={() => toggleItem(name)} // or use `id` if available
                                                            style={{ cursor: "pointer" }}
                                                        >
                                                            <div className="row">
                                                                <div className="col-lg-7 col-md-12 col-12 order-2 order-md-1">
                                                                    <div style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        height: "100%"
                                                                    }}>
                                                                        <div className="vendore-page-section-1-card-details-main-con">
                                                                            <div className="vendore-page-section-1-card-details-haed-icons">
                                                                                <h3>{name}</h3>
                                                                               {openItems[name] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                                            </div>
                                                                            <p>
                                                                                {
                                                                                    subcategories?.map((elem) => {
                                                                                        return (
                                                                                            <>
                                                                                                <span>
                                                                                                    {elem.name},
                                                                                                </span>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-5 col-md-12 col-12 order-1 order-md-2">
                                                                    <div className="vendor-page-section-1-card-image-main-con">
                                                                        <div className="vendor-page-section-1-card-image-con">
                                                                            <img src={`https://api.weddingzadda.com/${image}`}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vendor-page-section-1-card-details-dropdown-details-info"
                                                            style={{
                                                                maxHeight: openItems[name] ? "500px" : "0px",
                                                                overflow: "hidden",
                                                                transition: "max-height 0.4s ease",
                                                                // margin:isOpen ? "20px" : "0px"
                                                            }}
                                                        >
                                                            <div className="vendor-page-section-1-card-details-dropdoun-info">
                                                                <div className="row">

                                                                    <div className="col-md-6">
                                                                        <div className="vendor-page-section-1-card-details-dropdoun-info-item-con">
                                                                            <Link to={`${slug}/all`}>
                                                                            <h4>View All {name}</h4>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    {
                                                                        subcategories?.map((elem) => {

                                                                            return (
                                                                                <>
                                                                                    <div className="col-md-6">
                                                                                        <div className="vendor-page-section-1-card-details-dropdoun-info-item-con">
                                                                                            <Link to={`${slug}/${elem.slug}`}>
                                                                                                <h4>{elem.name}</h4>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="vendor-page-section-2">
                <div className="container">
                    <div className="vendor-section-2-head-con">
                        <div className="vendor-page-section-1-head">
                            <h2 className="head-font">Top Pre Wedding Photographers</h2>
                        </div>
                    </div>
                    <div className="vendor-section-2-details-main-con">
                        <div className="row">
                            {topPhotographers.map((photographer, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="vendor-section-2-details-main-con">
                                        <div className="vendor-section-2-details-card-main-con">
                                            <div className="venddor-section-2-details-card-image-con">
                                                <img src={photographer.image} alt={photographer.vendorName} />
                                            </div>
                                            <div className="vendor-section-2-details-text">
                                                <h3>{photographer.vendorName}</h3>
                                                <h5>₹ {photographer.StartingPrice} onwards</h5>
                                                <h4>
                                                    <span>
                                                        {photographer.vendorServiceLocation
                                                            .map((loc) => loc.ServiceLocation)
                                                            .join(", ")}
                                                    </span>
                                                </h4>
                                                <div className="vector-section-2-details-star-rating">
                                                    <IoIosStar />
                                                    <IoIosStar />
                                                    <IoIosStar />
                                                    <IoIosStar />
                                                    <IoIosStar />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="vendor-page-section-2">
                <div className="container">
                    <div className="vendor-section-2-head-con">
                        <div className="vendor-page-section-1-head">
                            <h2 className="head-font">Top Caterers</h2>
                        </div>
                    </div>
                    <div className="vendor-section-3-details-main-con">
                        <div className="row">
                            {
                                CateringServicesData.map((elem) => {
                                    const { CateringId, CateringName, image, CateringPrice, MaxCapacity, MinCapacity, CateringLoaction } = elem
                                    return (
                                        <>
                                            <div className="col-md-4">
                                                <div className="vendor-section-3-card-main-con">
                                                    <div className="vendor-section-3-card-image-main-con">
                                                        <div className="vendor-section-3-card-image">
                                                            <img src={image} />
                                                        </div>
                                                    </div>
                                                    <div className="vendor-section-3-details-main-text-con">
                                                        <div className="vendor-section-3-details-name-location">
                                                            <h3>{CateringName}</h3>
                                                            <h4><IoLocation />
                                                                {CateringLoaction?.map((elem, index) => (
                                                                    <span key={index}>{elem.Loaction}{index !== CateringLoaction.length - 1 ? ", " : ""}</span>
                                                                ))}
                                                            </h4>
                                                            <h5><span>₹</span> {CateringPrice} onwards</h5>
                                                        </div>
                                                        <div className="vendor-section-3-details-main-con">
                                                            <div className="vendor-section-3-details-main-con-div">
                                                                <span>
                                                                    Max {MaxCapacity}
                                                                </span>
                                                                <span>
                                                                    Min {MinCapacity}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default VendorPage;
