import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
const Contact2 = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="contact"
                homePageText="Home"
                homePageUrl="/"
                activePageText="contact"
            />
            <ContactInfo />
            <ContactForm />
            <Footer />
        </Layout>
    );
}

export default Contact2
