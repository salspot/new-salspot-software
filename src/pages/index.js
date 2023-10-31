import React from 'react'
import Navbar from '../components/App/Navbar'
import Footer from '../components/App/Footer'
import Layout from '../components/App/Layout'
import VideoBanner from '../components/Index/VideoBanner';
// import NewCaseStudies from '../components/Index/NewCaseStudies';
import HowCanWeHelpBanner from '../components/Index/HowCanWeHelpBanner';
import InfoBanner from "../components/Index/InfoBanner";
import HeroBanner from "../components/Index/HeroBanner";
import WhatWeDoModule from "../components/Index/WhatWeDoModule";
import NewCaseStudyDetails from "../components/Index/NewCaseStudyDetails";

const Home = () => {
  return (
    <Layout>
      <Navbar className="navbar-fixed-top"/>
      <VideoBanner/>
      {/*<HeroBanner/>*/}

      <div className="services">
        <section className="approach ">
          <div className="study-cases">
            <div className="title-block">
              <h6>Our work our pride</h6>
              <h5>Industry case studies</h5>
            </div>
            <NewCaseStudyDetails style={'right'}/>
            <NewCaseStudyDetails style={'left'}/>
            <NewCaseStudyDetails style={'right'}/>
            <NewCaseStudyDetails style={'left'}/>
          </div>
        </section>
      </div>
      <InfoBanner/>
      <WhatWeDoModule/>
      <HowCanWeHelpBanner/>
      <Footer/>
    </Layout>
  )
}

export default Home
