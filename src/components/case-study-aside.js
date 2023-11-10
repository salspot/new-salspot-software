import React from 'react';

const CaseStudyAside = ({objectives, technologies}) => {

  return (
    <div className="col-lg-4 stats-block post-body stats-block">

      <aside>
        <div>
          <div className="stats-section">
            <div className="icon">
              <i className="icon-bullseye-arrow"></i>
            </div>
            <h4>Objectives</h4>
            <ul>
              {objectives && objectives.map((objective, index) => <li key={index}>{objective}</li>)}
            </ul>
          </div>

          <div className="stats-section">
            <div className="icon"><i className="icon-gear"></i></div>
            <h4>Technologies</h4>
            <ul>
              {technologies && technologies.map((technology, index) => <li key={index}>{technology}</li>)}
            </ul>
          </div>


          {/*<div className="stats-section">*/}
          {/*  <div className="icon"><i className="icon-link"></i></div>*/}
          {/*  <h4>Links</h4>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <a href="https://apps.apple.com/us/app/cmnwlth/id1484029029?ls=1" target="_blank" rel="noopener">iOS Add</a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="https://www.joincommonwealth.com/" target="_blank" rel="noopener">Marketing Site</a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
      </aside>
    </div>

  );
}
export default CaseStudyAside;
