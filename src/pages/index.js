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
import NewCaseStudyDetails, {CaseStudyStyle} from "../components/Index/NewCaseStudyDetails";
import caseStudy from "../content/case-study";
import NewCaseStudyContainer from "../components/NewCaseStudyContainer";

const Home = () => {
  return (
    <Layout>
      <Navbar className="navbar-fixed-top"/>
      <VideoBanner/>
      {/*<HeroBanner/>*/}

      <NewCaseStudyContainer>
        <NewCaseStudyDetails style={CaseStudyStyle.RIGHT} content={caseStudy.solarBlocks}/>
        <NewCaseStudyDetails style={CaseStudyStyle.LEFT} content={caseStudy.ehx}/>
        <NewCaseStudyDetails style={CaseStudyStyle.RIGHT} content={caseStudy.esap}/>
        <NewCaseStudyDetails style={CaseStudyStyle.LEFT} content={caseStudy.emila}/>
      </NewCaseStudyContainer>
      <InfoBanner/>
      <WhatWeDoModule/>
      <HowCanWeHelpBanner/>
      <Footer/>
    </Layout>
  )
}

export default Home
