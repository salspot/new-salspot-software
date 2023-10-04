import React from 'react';
import CaseStudyDetails from './CaseStudyDetails';
import CallToActionBanner from './CallToActionBanner';

const CaseStudies = () => {
  return (
    <section className="block-casestudies">
      <div className="container-fluid">
        <div className="title-block">
          <h6>Our work our pride</h6>
          <h5>Industry case studies</h5>
        </div>

        <CaseStudyDetails />
        <CaseStudyDetails style={'right'}/>

        <CallToActionBanner/>

        <CaseStudyDetails/>
        <CaseStudyDetails style={'right'}/>

        <div className="block-cta-button">
          <a className="btn action-btn row seemore"
             href="https://scal.io/work/category/real-estate-construction">
            See more of our work</a>
        </div>



      </div>
    </section>
  )
}

export default CaseStudies


