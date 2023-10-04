import React from 'react'

const CaseStudyDetails = ({style = 'left'}) => {
  const styleClasses = {
    left: ''
  }
  if (style === 'left') {

  }

  if (style === 'right') {

  }

  return (
    <div className="row discovery">
      <div className={`col-md-4 top ${style === 'right' ? 'order-md-8' : ''}`}>
        <div className={`block-text ${style === 'right' ? 'right' : 'left'}`}>
          <h3>SimpleShowing</h3>
          <div className="category-title">
            <span>Residential & Commercial Real Estate</span>
          </div>
          <p>
            <div>Empowers savvy consumers to be their own agent, book showings and save up to half of the traditional realtor commission.
              <br/><br/>
              Scalio developed the initial Simple Showing iOS
              Prototype. The app included property listings, consumed MLS data and allowed user browsing and viewing of properties.
            </div>
          </p>
          <div className="learnmore placeholder-class">
            <a className="logolink" href="https://scal.io/work/simpleshowing">
              <img className="industry-detail-logo" alt="Industry Client Logo"
                   src="https://cdn-scalioadmin.s3.amazonaws.com/work/logo/logo-simpleshowing-png-1567552291710.png"/>
            </a>
            <a className="morelink" href="/work/simpleshowing">Learn more</a>
            <div className="clearfix"/>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className={`block-image row ${style === 'right' ? 'right' : 'left'}`}>
          <div className="bg-overlay"/>
          <img className="img-responsive item" alt="Simpleshowing Association Card"
               src="https://cdn-scalioadmin.s3.amazonaws.com/work/lg/simpleshowing-lg-jpg-1567552102979.jpg">
          </img>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyDetails
