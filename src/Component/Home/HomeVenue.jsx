
import React, { useEffect, useState } from 'react';
import "../../Css/Home/HomeVenue.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import HomeVenuData from '../HomeVenuData';
import axios from 'axios';
import venues_demo_image from "../../Images/venues/venues_demo_image.jpg";
import { Link } from 'react-router-dom';
const HomeVenue = (() => {
    const [VenuesList, setVenuesList] = useState([])

    const venuesListFetch = async () => {
        try {
            const response = await axios.get(`https://api.weddingzadda.com/api/subcategoriesfetchAll`);
            setVenuesList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        venuesListFetch()
    }, []);

    return (
        <>
            <section className="home-venues-section-main-con">
                <div className="container">
                    <div className="home-venues-section-head-main-con">
                        <h2>Popular Wedding Venues</h2>
                    </div>
                    <div className="home-venues-section-details-main-con">
                        <Swiper
                            slidesPerView={3}
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
                                    slidesPerView: 3,
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
                                VenuesList && VenuesList?.map((elem) => {
                                    console.log("HomeVenue",elem)
                                    const { cover_image, name, short_description,slug,id,image,vendors } = elem
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div className="home-venues-section-details-main-card-con">
                                                    <Link to={`/vengor-page/venues/${slug}`}>
                                                        <div className='home-venues-section-details-image-con'>
                                                            <img
                                                                src={image || venues_demo_image}
                                                                alt={name}
                                                                onError={(e) => { e.target.onerror = null; e.target.src = venues_demo_image; }}
                                                            />
                                                        </div>
                                                        <div className='home-venues-section-details-text-con'>
                                                            <h3>{name}</h3>
                                                            <p>
                                                                {
                                                                vendors?.map((ele) => {
                                                                    return (
                                                                        <>
                                                                            <span>
                                                                                {ele?.city}
                                                                            </span>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                            <span style={{color:"red"}}>
                                                                More
                                                            </span>
                                                                {/* {short_description} */}
                                                            </p>
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
            </section>
        </>
    )
});

export default HomeVenue;