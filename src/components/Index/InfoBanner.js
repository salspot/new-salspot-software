import React from "react";
import infoBannerDefaultImg from '../../assets/images/info-banner-default.jpg'

const InfoBanner = () => {
    return (
        <section className="module dark whatwecreate ">
            <div className="container">
                <div className="block text-left">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 left">
                            <div className="title">What we create</div>
                            <h3 className="">A full offering of creative services</h3>
                            <div className="blurb">Leverage the latest software design practices and level-up your
                                product. From gamification and UI/UX design to consumer insights and interactive
                                prototyping, we'll help you de-risk your product decisions and bring home the ROI.
                            </div>
                            <div className="cta-button">
                                <a className="btn action-btn row" aria-label="Our Contact Page" href="/contact">Let's
                                    Inspire</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right">
                            <div>&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-container">
                <div>
                    <div className="bg-overlay"></div>
                    <img className="hero-image" alt="Scalio Creative"
                         src={infoBannerDefaultImg}/>
                </div>
            </div>
        </section>
    )
}

export default InfoBanner

