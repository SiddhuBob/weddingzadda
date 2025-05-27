import React from "react";
import "../Css/AboutUs.css";
import demoimage from "../Images/image.webp";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import aboutImage from "../Images/about_image.webp";
const AboutPage = (() => {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <>
            <section className="about-us-page-main-section-1">
                <div className="about-us-page-section-1-banner">
                    {/* <h1>{VenuesDetails.name} {VenuesDetails.city} {VenuesDetails.state}</h1> */}
                </div>
            </section>


            <section className="about-page-section-1">
                <div className="container">
                    <div className="home-wedding-section-category-head-main-con">
                        <div className="head-common-image-con">
                            <img src={demoimage} />
                        </div>
                        <h3>About Wedding Adda</h3>
                    </div>

                    <div className="about-section-para-main-con">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum consequatur aliquid, cum magni perspiciatis? Nisi, obcaecati eos quibusdam eius id, beatae numquam corporis autem quos unde, quod praesentium repudiandae?</p>
                    </div>
                    <div className="about-section-1-image-details-con">
                        <div className="about-section-1-image-details-main-con">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="about-section-1-image-main-con">
<img src={aboutImage}/>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="about-section-1-image-info-main-con">

                                        <div className="about-section-1-image-details-info-main-con">
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non numquam officiis iusto. Autem repudiandae voluptatum magnam vel. Amet ducimus minima, placeat impedit libero mollitia, dolorum sapiente porro corrupti blanditiis facilis.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate voluptatum expedita consequatur, repellendus ut illo ipsam consectetur provident delectus inventore perferendis magni? Sequi enim laudantium, quos natus ratione rerum.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate voluptatum expedita consequatur, repellendus ut illo ipsam consectetur provident delectus inventore perferendis magni? Sequi enim laudantium, quos natus ratione rerum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section-2" ref={ref}>
                <div className="container">
                    <div className="about-section-2-main-con">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="about-section-2-counter-main-con">
                                    <h3>
                                        {inView && <CountUp end={500} duration={2} />}
                                        +
                                    </h3>
                                    <p>Weddings Planned</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="about-section-2-counter-main-con">
                                    <h3>
                                        {inView && <CountUp end={120} duration={2} />}
                                        +
                                    </h3>
                                    <p>Venues Partnered</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="about-section-2-counter-main-con">
                                    <h3>
                                        {inView && <CountUp end={450} duration={2} />}
                                        +
                                    </h3>
                                    <p>Happy Couples</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="about-section-2-counter-main-con">
                                    <h3>
                                        {inView && <CountUp end={10} duration={2} />}
                                        +
                                    </h3>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-section-3">
                <div className="container">
                    <div className="about-section-3-main-heaad-con">
                        <div className="home-wedding-section-category-head-main-con">
                            <div className="head-common-image-con">
                                <img src={demoimage} />
                            </div>
                            <h3>About Us</h3>
                        </div>

                        <div className="about-section-3-details-main-con">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consequuntur, unde, blanditiis quas reprehenderit laboriosam doloremque ullam consectetur tenetur eos, fuga odio nihil. Expedita itaque pariatur eveniet dolorum aspernatur excepturi?</p>
                            <h3>Make Planning decisions</h3>


                            <div className="about-section-3-details-info-main-con">
                                <h4>Vendors</h4>
                                <p>From photographers to wedding priests, WedMeGood has 80,000+ active vendors for you to choose from. Browse their portfolio, prices, genuine client reviews & much more to do your research and book just about any wedding vendor you might require.</p>
                            </div>
                            <div className="about-section-3-details-info-main-con">
                                <h4>WA Bridal Gallery / Shop</h4>
                                <p>The WA Bridal Gallery is your one-stop wedding shop. Choose from 2000+ outfits and chat with the designer's team directly to find the outfit of your dreams. Kick-start your wedding shopping here from the comfort of your home!</p>
                            </div>
                            <div className="about-section-3-details-info-main-con">
                                <h4>Genie</h4>
                                <p>WA Genie services can help you find the right vendor to fit your budget & style! Our Genie expert saves you the time & hassle of browsing through hundreds of profiles by suggesting only the most relevant vendors for your specific requirements.</p>
                            </div>
                            <div className="about-section-3-details-info-main-con">
                                <h4>WedMeGood Mynt</h4>
                                <p>An exclusive loyalty program by WedMeGood for our brides-to-be and grooms-to-be, this allows access to special offers and benefits from 100+ premium brands across various categories like bridal wear, travel, jewellery, beauty and more!</p>
                            </div>


                            <h3>Still early stages in your journey? Get inspired and discover your own wedding style</h3>

                            <div className="about-section-3-details-info-main-con">
                                <h4>Photos</h4>
                                <p>With over 4 million photos, we just enough to have your wedding mood board in place! Right from trending bridal lehenga designs to fascinating decor details and stunning pre-wedding shoots, WMG’s Photo Gallery serves you a collection of the most dreamy wedding photos that perfectly sum up 'All Things Weddings'.</p>
                                <p>P.S- Don't blame us if you're spoilt for choices</p>
                            </div>
                            <div className="about-section-3-details-info-main-con">
                                <h4>Real Weddings</h4>
                                <p>Every couple has a tale to tell. Whether it is a wedding thriller or a magical fairytale, we have immortalised tons of real couples' stories on our Real Weddings section. With over 1,000 stories to cherish and bonus inspiration for us!</p>
                            </div>
                            <div className="about-section-3-details-info-main-con">
                                <h4>Blog</h4>
                                <p>That would be your chock-a-block for all your wedding "wows"!</p>
                                <p>5000+ blogs dedicated to a mixed-platter of the latest wedding trends & ideas to serve you with just the right amount of wedding inspiration you need to kickstart your wedding planning.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
});


export default AboutPage;