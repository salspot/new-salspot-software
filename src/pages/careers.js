import React, {useEffect} from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import SecondaryPageHeader from "../components/SecondaryPageHeader"
import '../assets/css/careers.css';

const Careers = () => {

  useEffect(() => {
    document.body.classList.add('inverse');
    return () => {
      document.body.classList.remove('inverse');
    }
  }, []);

  return (
    <Layout>
      <div className="jobs body-content">
        <Navbar className="navbar-fixed-top" inverse={true}/>
        <SecondaryPageHeader smallTitle='Careers' title="We're always looking for outstanding talent"
                             subtext="We create award winning products for the most recognized brands in the world, are you up for the challenge?"
                             backgroundImage={true}/>
        <Footer/>
      </div>

    </Layout>
  );
}

export default Careers
