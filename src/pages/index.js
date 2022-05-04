import React from 'react'
import Navbar from '../components/App/Navbar'
import Footer from '../components/App/Footer'
import Layout from '../components/App/Layout'
import OurSolutions from '../components/Index/OurSolutions'
import OurServices from '../components/Index/OurServices'
import OurFeatures from '../components/Index/OurFeatures'
import TeamMember from '../components/Index/TeamMember'
import RecentProjects from '../components/Index/RecentProjects'
import Pricing from '../components/Index/Pricing'
import Testimonials from '../components/Index/Testimonials'
import Partner from '../components/Index/Partner'
import ProjectStartArea from '../components/Index/ProjectStartArea'
import OurBlog from '../components/Index/OurBlog'
import VideoBanner from '../components/Index/VideoBanner';
import HeroBanner from '../components/Index/HeroBanner';

const Home = () => {
    return (
        <Layout>
            <Navbar/>
            <VideoBanner/>
            <HeroBanner/>


            <OurSolutions/>
            <OurServices/>
            <OurFeatures/>
            <TeamMember/>
            <RecentProjects/>
            <Pricing/>
            <Testimonials/>
            <Partner/>
            <OurBlog/>
            <ProjectStartArea/>
            <Footer/>
        </Layout>
    )
}

export default Home
