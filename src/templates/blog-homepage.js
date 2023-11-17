import React from 'react'
import {graphql} from "gatsby"
import {Link} from "gatsby"
import Navbar from "../components/App/Navbar";
import Layout from "../components/App/Layout";
import HowCanWeHelpBanner from "../components/Index/HowCanWeHelpBanner";
import Footer from '../components/App/Footer'
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import '../assets/css/blog-homepage.css';
import BlogPostCard from "../components/BlogPostCard";

const shortcodes = {Link} // Provide common components that will be available in the MDX files

export default function BlogHomepage({data, children}) {
  return (
    <>
      <Layout>
        <Navbar className="navbar-fixed-top white-page"/>
        <SecondaryPageHeader smallTitle='Blog' title='Ideas are great. Results are better.' classNames='blog'
                             headlineClassNames='col-xl-8 col-md-8 col-sm-8 col-xs-12 row flex-column'
                             subtext="We're turning our experience into actionable insights on engineering, design, process and strategy."/>
        <section className="post-body blog">
          <div className="container">
            <div className="row">
              <BlogPostCard postDetails={data.allMdx.edges[0].node.frontmatter}/>
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
                        key
                        slug
                        title
                        category
                        headerImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        author
                        shortDescription
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



