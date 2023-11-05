import React from 'react';

const NewCaseStudyContainer = ({children}) => {
  return (
    <div className="services">
      <section className="approach ">
        <div className="study-cases">
          <div className="title-block">
            <h6>Our work our pride</h6>
            <h5>Industry case studies</h5>
          </div>
          {children}
        </div>
      </section>
    </div>
  )
}

export default NewCaseStudyContainer;
