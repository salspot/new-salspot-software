import React, {useEffect} from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import SecondaryPageHeader from "../components/SecondaryPageHeader"
import '../assets/css/careers.css';
import OpenPositions from "../components/open-positions";

const Careers = () => {

  useEffect(() => {
    if (document) {
      document.body.classList.add('inverse');
    }
    return () => {
      if (document) {
        document.body.classList.remove('inverse');
      }
    }
  }, []);

  return (
    <Layout>
      <div className="jobs body-content">
        <Navbar className="navbar-fixed-top" inverse={true}/>
        <SecondaryPageHeader smallTitle='Careers' title="We're always looking for outstanding talent"
                             subtext="We create award winning products for the most recognized brands in the world, are you up for the challenge?"
                             backgroundImageFlag={true}/>
        <OpenPositions/>
        <Footer/>
      </div>
    </Layout>
  );
}

export default Careers
