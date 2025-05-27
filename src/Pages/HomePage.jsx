import React, { useEffect, useState,useRef } from "react";
import "../Css/HomePage.css";
import Authentic from "../Component/Home/Authentic";
import HomeVenue from "../Component/Home/HomeVenue";
import HomeSearches from "../Component/Home/HomeSearches";
import WeddingCategory from "../Component/Home/WeddingCategory";
import AppDownload from "../Component/Home/AppDownload";
import { Button, Select } from "antd";
import HomeBlog from "../Component/Home/HomeBlog";
import Footer from "../Component/FooterCom/Footer";
import axios from "axios";
import Typewriter from 'typewriter-effect/dist/core';
const HomePage = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [loadingSubCategory, setLoadingSubCategory] = useState(false);
    console.log("setSelectedCategory", selectedCategory)
    console.log("categoryList", categoryList)
    // Fetch categories
    const categoryFetch = async () => {
        try {
            const response = await axios.get("https://api.weddingzadda.com/api/categories");
            setCategoryList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        categoryFetch();
    }, []);

    // Fetch subcategories when a category is selected
    useEffect(() => {
        const subCategoryFetch = async () => {
            if (!selectedCategory) return;

            setLoadingSubCategory(true);
            try {
                const response = await axios.get(`https://api.weddingzadda.com/api/vendor/category/${selectedCategory}`);
                setSubCategoryList(response?.data?.category?.sub_categories);
                console.log(response?.data?.category)
            } catch (error) {
                console.error('Error Fetching Sub Category List:', error);
            }
            setLoadingSubCategory(false);
        };

        subCategoryFetch();
    }, [selectedCategory]);



    // animation 

    const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
    });

    typewriter
      .typeString('Web Developer')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Web Designer')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<strong>FrontEnd Developer</strong>')
      .pauseFor(2500)
      .start();
  }, []);


    return (
        <>
            <section className="home-page-main-section-1">
                <div className="home-page-section-1-banner">
                    <div className="home-banner-overlay-main-con">
                        <div className="home-banner-overlay-main-taglines-con">
                            <h3 id="app">Dream Weddings, Designed by You</h3>
                            <p>Handpicked Wedding Vendors, Loved by Couples Like You</p>
                        </div>
                        <div className="container">
                            <div className="home-banner-overlay-main-search-option">
                                <div className="home-banner-overlay-main-con-search-option">
                                    {/* Category Select */}
                                    <div className="home-banner-overlay-con-select-vendor">
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Select Category"
                                            optionFilterProp="label"
                                            onChange={(value) => {
                                                const selected = categoryList.find(cat => cat.id === value);
                                                setSelectedCategory(selected?.name || "");
                                            }}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={categoryList.map(category => ({
                                                value: category.id,
                                                label: category.name
                                            }))}
                                        />

                                    </div>

                                    {/* Subcategory Select */}
                                    <div className="home-banner-overlay-con-select-vendor">
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Select Sub Category"
                                            disabled={!selectedCategory || loadingSubCategory}
                                            loading={loadingSubCategory}
                                            optionFilterProp="label"
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={subCategoryList.map(subcategory => ({
                                                value: subcategory.id,
                                                label: subcategory.name
                                            }))}
                                        />
                                    </div>

                                    <div className="home-banner-overlay-con-search-btn">
                                        <Button>
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Authentic /> */}
            <HomeSearches />
            <HomeVenue />
            <WeddingCategory />
            <AppDownload />
            <HomeBlog />
        </>
    );
};

export default HomePage;
