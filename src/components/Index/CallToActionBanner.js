import React from 'react';

const CallToActionBanner = () => {
  return (
    <section className="block-cta-button">
      <div className="container">
        <div className="row">
          <div className="line-block left col-md-7">
            <h3>How can we help your company?</h3>
          </div>
          <div className="col-md-5">
            <div className="workwithus">
              <a href="#contact" className="btn action-btn row" aria-label="contact Us">let's talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionBanner
