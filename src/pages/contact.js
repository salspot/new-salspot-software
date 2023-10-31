import React, {useEffect} from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import SecondaryPageHeader from "../components/SecondaryPageHeader"
import "../assets/css/contact-page.css"
import ContactForm from "../components/ContactForm";

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
        <SecondaryPageHeader/>
        <ContactForm/>
        <Footer/>
      </div>

    </Layout>
  );
}

export default Contact
