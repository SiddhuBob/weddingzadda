import React, { useEffect, useState } from 'react';
import "../../Css/NewHome/NewHomeCategory.css";
import demoimage from "../../Images/image.webp";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
const NewHomeCategory = () => {
    const [VenuesList, setVenuesList] = useState([])
    console.log("VenuesList", VenuesList)
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
                            {
                                VenuesList?.map((elem) => {
                                    console.log("VenuesList",elem)
                                    return (
                                        <>
                                            <div className="col-md-3">
                                                <div className="new-home-category-card">
                                                    <div className='new-home-category-section-image-main-con'>
                                                        <div className='new-home-category-section-image-con'>
<img src={elem.image}/>
                                                        </div>
                                                    </div>
                                                    <div className='new-home-category-section-details-main-con'>
                                                        <h4>{elem.name}</h4>
                                                        <div className='new-home-categpry-section-btn'>
                                                            <Link to={`${elem.slug}`}>
                                                                Expoler {elem.name} <IoIosArrowForward />
                                                            </Link>
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
            </section>
        </div>
    )
}

export default NewHomeCategory
