import React, {useEffect} from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import SecondaryPageHeader from "../components/SecondaryPageHeader"
import NewCaseStudyContainer from "../components/NewCaseStudyContainer";
import NewCaseStudyDetails, {CaseStudyStyle} from "../components/Index/NewCaseStudyDetails";
import caseStudy from "../content/case-study";
import '../assets/css/work.css';
import HowCanWeHelpBanner from "../components/Index/HowCanWeHelpBanner";

const Contact = () => {

  useEffect(() => {
    document.body.classList.add('inverse');
    return () => {
      document.body.classList.remove('inverse');
    }
  }, []);

  return (
    <Layout>
      <div className="contact body-content">
        <Navbar className="navbar-fixed-top" inverse={true}/>
        <SecondaryPageHeader smallTitle='Our Work' title='Our portfolio of digital products and services'
                             subtext="We've completed over 20 projects accross multiple industries in client work.
                             Successfully collaborated with more than 10 partners from countries in the EU and USA.
                             Below are some of the projects we're able to share with you."/>

        <NewCaseStudyContainer>
          <NewCaseStudyDetails style={CaseStudyStyle.RIGHT} content={caseStudy.solarBlocks}/>
          <NewCaseStudyDetails style={CaseStudyStyle.LEFT} content={caseStudy.ehx}/>
          <NewCaseStudyDetails style={CaseStudyStyle.RIGHT} content={caseStudy.esap}/>
          <NewCaseStudyDetails style={CaseStudyStyle.LEFT} content={caseStudy.emila}/>
        </NewCaseStudyContainer>
        <HowCanWeHelpBanner/>
        <Footer/>
      </div>

    </Layout>
  );
}

export default Contact
