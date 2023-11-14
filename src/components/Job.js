import React from 'react';
import Accordion from "react-bootstrap/Accordion";

const Job = ({jobDescription, index}) => {
  const createList = (items) => {
    return items && items.map((item, index) => <li key={index}>{item}</li>);
  };

  const {
    role,
    location,
    aboutRole,
    idealCandidate,
    niceToHave,
    typicalDay,
    jobPerks,
    applicationInfo,
  } = jobDescription;

  const space = <span>&nbsp;</span>;

  return (
    <Accordion>
      <Accordion.Item eventKey={index.toString()}>
        <Accordion.Header>
          {/*<div className="heading">*/}
          {/*<div className="circle-plus closed">*/}
          {/*  <div className="circle">*/}
          {/*    <div className="horizontal"></div>*/}
          {/*    <div className="vertical"></div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <h4 className="title shine">{role}</h4>
          <h6 className="location">{location}</h6>
          {/*</div>*/}
        </Accordion.Header>
        <Accordion.Body>
          <div className="panel-body">
            <p><strong>About The Role</strong></p>
            <p>{aboutRole}</p>
            {space}
            <p><strong>Our ideal candidate has:</strong></p>
            <ul>{createList(idealCandidate)}</ul>
            {space}
            <p><strong>Nice to have:</strong></p>
            <ul>{createList(niceToHave)}</ul>
            {space}
            {typicalDay && <>
              <p><strong>In a typical day, you will:</strong></p>
              <ul>{createList(typicalDay)}</ul>
              {space}
            </>}
            <p><strong>Job Perks:</strong></p>
            <ul>{createList(jobPerks)}</ul>
            {space}
            <p>{applicationInfo}</p>
            <p>Apply at <a
              href={`mailto:jobs@salspotsoftware.com?subject=${role + ' Application'}`}>jobs@salspotsoftware.com</a></p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
};

export default Job;
