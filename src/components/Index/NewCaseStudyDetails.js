import React from 'react'

const NewCaseStudyDetails = ({style = 'left'}) => {
    const styleClasses = {
        left: ''
    }

    return (
        <article class="row discovery">
            <div class="col-lg-4 top">
                <div class="block-text left">
                    <h2><small>01</small> Discover</h2>
                    <p>We find what works for your business through research, analysis, and prototyping. We'll immerse
                        ourselves in your brand and present relevant research before we identify the most suitable
                        solutions for your model. To mitigate risk, the discovery phase is crucial to lay the groundwork
                        for the design and development phases.</p>
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
