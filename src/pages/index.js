import React from 'react'
import Navbar from '../components/App/Navbar'
import Footer from '../components/App/Footer'
import Layout from '../components/App/Layout'
import VideoBanner from '../components/Index/VideoBanner';
import NewCaseStudies from '../components/Index/NewCaseStudies';
import HowCanWeHelpBanner from '../components/Index/HowCanWeHelpBanner';
import InfoBanner from "../components/Index/InfoBanner";
import HeroBanner from "../components/Index/HeroBanner";
import WhatWeDoModule from "../components/Index/WhatWeDoModule";

const Home = () => {
    return (
        <Layout>
            <Navbar className="navbar-fixed-top"/>
            <VideoBanner/>
            {/*<HeroBanner/>*/}
            <NewCaseStudies/>
            <InfoBanner/>
            <WhatWeDoModule/>
          <HowCanWeHelpBanner/>
          <Footer/>
        </Layout>
    )
}

export default Home
