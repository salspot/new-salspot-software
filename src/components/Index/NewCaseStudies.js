import React from 'react';
import NewCaseStudyDetails from './NewCaseStudyDetails';
import CallToActionBanner from './CallToActionBanner';

const NewCaseStudies = () => {
    return (
        <div className="services">
            <section className="approach ">
                <div className="study-cases">
                    <div className="title-block">
                        <h6>Our work our pride</h6>
                        <h5>Industry case studies</h5>
                    </div>

                    <NewCaseStudyDetails style={'right'}/>
                    <NewCaseStudyDetails style={'right'}/>
                    <NewCaseStudyDetails style={'right'}/>
                    <NewCaseStudyDetails style={'right'}/>
                    <NewCaseStudyDetails style={'left'}/>
                    <NewCaseStudyDetails style={'left'}/>
                    <NewCaseStudyDetails style={'left'}/>
                    <NewCaseStudyDetails style={'left'}/>


                    <NewCaseStudyDetails style={'right'}/>
                    <NewCaseStudyDetails style={'left'}/>
                    <NewCaseStudyDetails style={'right'}/>
                    <NewCaseStudyDetails style={'left'}/>

                    <CallToActionBanner/>

                    <NewCaseStudyDetails style={'left'}/>

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


