import React, {useEffect} from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import SecondaryPageHeader from "../components/SecondaryPageHeader"
import "../assets/css/contact-page.css"

const Contact = () => {

  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add('inverse');

    return () => {
      // 👇️ removing classes from body element
      // when the component unmounts
      document.body.classList.remove('inverse');
    }
  }, []);

  return (
    <Layout>
      <Navbar className="navbar-fixed-top" inverse={true}/>
      <SecondaryPageHeader/>
      <Footer/>
    </Layout>
  );
}

export default Contact
