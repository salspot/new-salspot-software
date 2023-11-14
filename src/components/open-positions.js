import React from "react"
import Job from "./Job";
import careers from "../content/careers";


export default function OpenPositions() {
  return (
    <section className="scalapse " id="positions">
      <div className="container">
        <div className="row">
          <h5>CAREERS AT SALSPOT</h5>

          <article>
            {Object.keys(careers).map(categoryName => (
              <div className="role-group row col-md-12">
                <div className="col-lg-3 category">
                  <h5 className="dept">{categoryName}</h5>
                </div>

                <div className="col-lg-9 role">
                  {/*// maybe accordion starts here*/}
                  <div role="tablist" className="panel-group">
                    <ul className="">
                      {/*// loop here*/}

                      {Object.keys(careers[categoryName]).map((careerName, index) => {
                        console.log('careerDetails', careerName)
                        const category = careers[categoryName];
                        const careerDetails = category[careerName]
                        return (
                          <li id="product-designer-fintech" className="panel-default panel">
                            <Job jobDescription={careerDetails} index={index}/>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </article>

        </div>
      </div>
    </section>
  )
}
