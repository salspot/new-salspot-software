import React, {useEffect} from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import SecondaryPageHeader from "../components/SecondaryPageHeader"
import "../assets/css/contact-page.css"
import ContactForm from "../components/ContactForm";

const Contact = () => {

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
      <div className="contact body-content">
        <Navbar className="navbar-fixed-top" inverse={true}/>
        <SecondaryPageHeader smallTitle='Contact Us' title='Ready to take things to the next level?'
                             subtext='Tell us a little more about your project or how we can help.'/>
        <ContactForm/>
        <Footer/>
      </div>

    </Layout>
  );
}

export default Contact
