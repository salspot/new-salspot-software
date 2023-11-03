import React from 'react';

const WhatWeDoModule = () => {
    return (
        <section className="module light whatwedo">
            <article className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-11  col-12">
                        <div className="title " data-sr-id="17">What we do</div>
                        <h2
                            data-sr-id="18">Innovative products delivering engaging experiences at scale.</h2>
                        <div className="blurb "
                             data-sr-id="19">We've designed, architected and scaled hundreds of mobile and web
                            applications including numerous top-ten mobile applications, high-trafficked web systems,
                            and big-data architectures for venture-backed startups and Fortune 100 companies.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-wrapper">
                        <div className="row">
                            <ul className="card services">
                                <li className="col-lg-4 col-md-6  col-12"
                                    data-sr-id="23">
                                    <figure>
                                        <figcaption>
                                            <div className="fig-block"><i className="icon-service-web"></i><h4
                                                className="heading">Web Engineering</h4></div>
                                        </figcaption>
                                    </figure>
                                </li>

                                <li className="col-lg-4 col-md-6  col-12 "
                                    data-sr-id="20">
                                    <figure>
                                        <figcaption>
                                            <div className="fig-block"><i className="icon-service-mobile"></i><h4
                                              className="heading">Mobile Engineering</h4></div>
                                        </figcaption>
                                    </figure>
                                </li>

                                <li className="col-lg-4 col-md-6  col-12"
                                    data-sr-id="24">
                                    <figure>
                                        <figcaption>
                                            <div className="fig-block"><i className="icon-service-devops"></i><h4
                                                className="heading">DevOps &amp; Hosting</h4></div>
                                        </figcaption>
                                    </figure>
                                </li>

                                <li className="col-lg-4 col-md-6  col-12"
                                    data-sr-id="22">
                                    <figure>
                                        <figcaption>
                                            <div className="fig-block"><i className="icon-service-growth"></i><h4
                                              className="heading">Web3 &amp; Blockchain</h4></div>
                                        </figcaption>
                                    </figure>
                                </li>

                                <li className="col-lg-4 col-md-6  col-12"
                                    data-sr-id="21">
                                    <figure>
                                        <figcaption>
                                            <div className="fig-block"><i className="icon-service-design"></i><h4
                                                className="heading">Design &amp; User Experience</h4></div>
                                        </figcaption>
                                    </figure>
                                </li>



                                <li className="col-lg-4 col-md-6  col-12"
                                    data-sr-id="25">
                                    <figure>
                                        <figcaption>
                                            <div className="fig-block"><i className="icon-service-support"></i><h4
                                                className="heading">Support &amp; Maintenance</h4></div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default WhatWeDoModule
