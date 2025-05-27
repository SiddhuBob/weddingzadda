import React, { useEffect, useState } from "react";
import "../../Css/Home/HomeSearches.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import wedding_photographers from "../../Images/HomePage/Searches/wedding-photography.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeSearches = (() => {
    const [VenuesList, setVenuesList] = useState([])
console.log("VenuesList",VenuesList)
    const venuesListFetch = async () => {
        try {
            const response = await axios.get(`https://api.weddingzadda.com/api/categories`);
            setVenuesList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        venuesListFetch()
    }, []);


    console.log("home cate")
    return (
        <>
            <section className="home-search-section">
                <div className="container">
                    <div className="home-searches-main-con">
                        <div className="home-venues-section-head-main-con">
                            <h2>Weddings Tailored to Your Dreams</h2>
                        </div>
                        <div className="home-searches-main-details-con">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    VenuesList?.map((elem) => {
                                        return (
                                            <>
                                                <SwiperSlide>
                                                    <div className="home-searches-main-details-card-con">
                                                        <Link to={`/vengor-page/${elem.slug}/${elem?.subcategories[0]?.slug}`}>
                                                            <div className="home-searches-details-con-image-con">
                                                                <img src={elem.image} />
                                                                <div className="home-seraches-image-overlay-text">
                                                                    <h3> {elem.name} </h3>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })

                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
});


export default HomeSearches;