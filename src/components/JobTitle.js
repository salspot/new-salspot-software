import React from 'react';

const JobTitle = ({ jobTitleProps }) => {
  const {
    role,
    location,
  } = jobTitleProps;

  return (
    <div role="tab" id="accordiongroup-662-4169-tab" aria-selected="" className="panel-heading">
      <h4 className="panel-title">
        <a role="button" data-toggle="collapse" href="" aria-expanded=""
           aria-controls="accordiongroup-662-4169-panel" className="accordion-toggle">
          <span className="">
            <div className="heading">
              <div className="circle-plus closed">
                <div className="circle">
                  <div className="horizontal"></div>
                  <div className="vertical"></div>
                </div>
              </div>
              <h4 className="title shine">{role})</h4>
              <h6 className="location">{location}</h6>
            </div>
          </span>
        </a>
      </h4>
    </div>
  );
};

export default JobTitle;
