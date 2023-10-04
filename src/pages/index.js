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
import CaseStudies from '../components/Index/CaseStudies';
import HowCanWeHelpBanner from '../components/Index/HowCanWeHelpBanner';
import Intro from "../components/Salspot/Intro";

const Home = () => {
    return (
        <Layout>
            <Navbar/>
            <VideoBanner/>
            {/*<HeroBanner/>*/}
            <CaseStudies/>

            <Intro
                title="Building tomorrow's products & platforms"
                subtitle="We are a global technology and creative agency."
                cards={[
                    {
                        heading: '850+ Projects',
                        subheading: 'In 30+ Industries',
                        desc: 'Over 12 years, we\'ve completed 850+ projects across 30+ industries. 9 of our clients have been acquired. Intuitive solutions made for the most complex challenges.',
                        numberbg: '850+'
                    },
                    {
                        heading: '100+ Million',
                        subheading: 'Delighted Users',
                        desc: 'Our technologists have crafted products that have engaged over 100 million users across dozens of verticals. From finanical tech, to healthcare, to gaming - we know how to deliver world-class experiences.',
                        numberbg: '100+'
                    },
                    {
                        heading: '$1 Billion+',
                        subheading: 'In Revenue',
                        desc: 'With hundreds of products shipped, our cross-functional teams have delivered over $1 billion in revenue on products over the past 12 years.',
                        numberbg: '$1 Bil'
                    }
                ]}
            />

            <TeamMember/>
            <Testimonials/>
            <Partner/>
            <OurBlog/>
            <ProjectStartArea/>
          <HowCanWeHelpBanner/>
          <Footer/>
        </Layout>
    )
}

export default Home
