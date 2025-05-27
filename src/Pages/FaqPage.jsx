import React, { useState } from "react";
import "../Css/FaqPage.css";



const FaqPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <>
            <section className="faq-us-page-main-section-1">
                <div className="faq-us-page-section-1-banner">
                    {/* <h1>{VenuesDetails.name} {VenuesDetails.city} {VenuesDetails.state}</h1> */}
                </div>
            </section>


            <section className="faq-page-section-1">
                <div className="container">
                    <div className="faq-page-section-1-main-con">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="faq-page-section-1-card-main-con">
                                    <h3>What is Check N Rest?</h3>
                                    <p className={isExpanded ? "" : "clamp-4-lines"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt corporis, quaerat voluptate nemo dolorem omnis perspiciatis, a quam voluptas cum. Accusantium voluptatem harum hic nemo, delectus temporibus magnam ut culpa enim repudiandae! Necessitatibus, laborum veritatis. Esse culpa atque error itaque aliquam id eligendi architecto asperiores exercitationem labore, quos at molestiae voluptas quas enim nam beatae nobis minus maiores repellat.
                                    </p>
                                    
                                    <h4>01</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="faq-page-section-1-card-main-con">
                                    <h3>What is Check N Rest?</h3>
                                    <p className={isExpanded ? "" : "clamp-4-lines"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt corporis, quaerat voluptate nemo dolorem omnis perspiciatis, a quam voluptas cum. Accusantium voluptatem harum hic nemo, delectus temporibus magnam ut culpa enim repudiandae! Necessitatibus, laborum veritatis. Esse culpa atque error itaque aliquam id eligendi architecto asperiores exercitationem labore, quos at molestiae voluptas quas enim nam beatae nobis minus maiores repellat.
                                    </p>
                                    
                                    <h4>02</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="faq-page-section-1-card-main-con">
                                    <h3>What is Check N Rest?</h3>
                                    <p className={isExpanded ? "" : "clamp-4-lines"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt corporis, quaerat voluptate nemo dolorem omnis perspiciatis, a quam voluptas cum. Accusantium voluptatem harum hic nemo, delectus temporibus magnam ut culpa enim repudiandae! Necessitatibus, laborum veritatis. Esse culpa atque error itaque aliquam id eligendi architecto asperiores exercitationem labore, quos at molestiae voluptas quas enim nam beatae nobis minus maiores repellat.
                                    </p>
                                    
                                    <h4>03</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="faq-page-section-1-card-main-con">
                                    <h3>What is Check N Rest?</h3>
                                    <p className={isExpanded ? "" : "clamp-4-lines"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt corporis, quaerat voluptate nemo dolorem omnis perspiciatis, a quam voluptas cum. Accusantium voluptatem harum hic nemo, delectus temporibus magnam ut culpa enim repudiandae! Necessitatibus, laborum veritatis. Esse culpa atque error itaque aliquam id eligendi architecto asperiores exercitationem labore, quos at molestiae voluptas quas enim nam beatae nobis minus maiores repellat.
                                    </p>
                                    
                                    <h4>04</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="faq-page-section-1-card-main-con">
                                    <h3>What is Check N Rest?</h3>
                                    <p className={isExpanded ? "" : "clamp-4-lines"}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt corporis, quaerat voluptate nemo dolorem omnis perspiciatis, a quam voluptas cum. Accusantium voluptatem harum hic nemo, delectus temporibus magnam ut culpa enim repudiandae! Necessitatibus, laborum veritatis. Esse culpa atque error itaque aliquam id eligendi architecto asperiores exercitationem labore, quos at molestiae voluptas quas enim nam beatae nobis minus maiores repellat.
                                    </p>
                                    
                                    <h4>05</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqPage;