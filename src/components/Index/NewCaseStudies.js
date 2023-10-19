import React from 'react';
import NewCaseStudyDetails from './NewCaseStudyDetails';
import CallToActionBanner from './CallToActionBanner';

const NewCaseStudies = () => {
    return (
        <div className="services">
            <section className="approach ">
                <div className="container-fluid">
                    <div className="title-block">
                        <h6>Our work our pride</h6>
                        <h5>Industry case studies</h5>
                    </div>

                    <NewCaseStudyDetails/>
                    <NewCaseStudyDetails style={'right'}/>

                    <CallToActionBanner/>

                    <NewCaseStudyDetails/>
                    <NewCaseStudyDetails style={'right'}/>

                    <div className="block-cta-button">
                        <a className="btn action-btn row seemore"
                           href="https://scal.io/work/category/real-estate-construction">
                            See more of our work</a>
                    </div>


                </div>
            </section>
        </div>

    )
}

export default NewCaseStudies


