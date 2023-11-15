import React from 'react'
import {graphql} from "gatsby"
import {MDXProvider} from "@mdx-js/react"
import {Link} from "gatsby"
import Navbar from "../components/App/Navbar";
import Layout from "../components/App/Layout";
import {MDXRenderer} from "gatsby-plugin-mdx";
import HowCanWeHelpBanner from "../components/Index/HowCanWeHelpBanner";
import Footer from '../components/App/Footer'
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import '../assets/css/blog-homepage.css';
import BlogPostCard from "../components/BlogPostCard";

const shortcodes = {Link} // Provide common components that will be available in the MDX files

export default function BlogHomepage({data, children}) {
  // const headerImage = getImage(data.mdx.frontmatter.headerImage?.childImageSharp?.gatsbyImageData)

  console.log('data', data);
  console.log('children', children);

  return (
    <>
      <Layout>
        <Navbar className="navbar-fixed-top white-page"/>
        <SecondaryPageHeader smallTitle='Blog' title='Ideas are great. Results are better.' classNames='blog'
                             headlineClassNames='col-xl-8 col-md-8 col-sm-8 col-xs-12 row flex-column'
                             subtext="We're turning our experience into actionable insights on engineering, design, process and strategy."/>
        <section className="post-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 post-block">
                <BlogPostCard/>
              </div>
            </div>
          </div>
        </section>
        <HowCanWeHelpBanner/>
        <Footer/>
      </Layout>
    </>
  )
}
export const query = graphql`
    query BlogHomeQuery($id: String!) {
        allMdx(
            filter: { frontmatter: { key: { eq: "blog-post" } } }) {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        title
                        key
                    }
                }
            }
        }
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                objectives
                technologies
                headerImage {
                    childImageSharp {
                        gatsbyImageData(width: 800)
                    }
                }
            }
        }
    }
`;



