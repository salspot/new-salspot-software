import React from 'react';
import careers from "../pages/careers";
import Accordion from "react-bootstrap/Accordion";

const Job = ({jobDescription, index}) => {
  const createList = (items) => {
    return items.map((item, index) => <li key={index}>{item}</li>);
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
            <strong>About The Role</strong>
            <p>{aboutRole}</p>
            {space}
              <strong>Our ideal candidate has:</strong>
            <ul>{createList(idealCandidate)}</ul>
            {space}
              <strong>Nice to have:</strong>
            <ul>{createList(niceToHave)}</ul>
            {space}
              <strong>In a typical day, you will:</strong>
            <ul>{createList(typicalDay)}</ul>
            {space}
              <strong>Job Perks:</strong>
            <ul>{createList(jobPerks)}</ul>
            {space}
            <p>{applicationInfo}</p>
            <div className="button-group"></div>
            <p className=""></p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
};

export default Job;
