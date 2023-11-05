import React from 'react';

const HowCanWeHelpBanner = () => {
  return (
    <section className="splashstrip color">
      <div className="bg-pattern"/>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="message">Need a development partner?</div>
          </div>
          <div className="col-md-4">
            <div className="button-group"><a href="/contact">
              <button type="button" className="btn action-btn" aria-label="Lets get started">
                <span className="btn-title ng-binding">lets get started</span>
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowCanWeHelpBanner
