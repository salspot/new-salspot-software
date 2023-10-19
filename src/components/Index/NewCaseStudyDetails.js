import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
// import 'bootstrap/dist/css/bootstrap.min.css'
const NewCaseStudyDetails = ({style = 'left'}) => {
    const items = [
        {
            heading: 'Support and Maintenance',
            content: 'Our team studies your product positioning, target market, user base. We analyze the competitive landscape, existing analytics, and product state.'
        },
        {
            heading: 'Support and Maintenance',
            content: 'Our team studies your product positioning, target market, user base. We analyze the competitive landscape, existing analytics, and product state.'
        },
        {
            heading: 'Support and Maintenance',
            content: 'Our team studies your product positioning, target market, user base. We analyze the competitive landscape, existing analytics, and product state.'
        }
    ]

    return (
        <article class="row discovery">
            <div class="col-lg-4 top">
                <div class="block-text left">
                    <h2><small>01</small> Discover</h2>
                    <p>We find what works for your business through research, analysis, and prototyping. We'll immerse
                        ourselves in your brand and present relevant research before we identify the most suitable
                        solutions for your model. To mitigate risk, the discovery phase is crucial to lay the groundwork
                        for the design and development phases.</p>

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
            </div>
            <div class="col-lg-8">
                <div class="block-image row">
                    <div class="bg-overlay"></div>
                    <img className="" alt="Our Approach - Step 1: Discovery"
                         src="https://scal.io/assets/images/services/discover-8e11dfe8e7.jpg"></img>
                </div>
            </div>
        </article>
    )
}

export default NewCaseStudyDetails
