import React from "react"
import {graphql} from "gatsby"
import {MDXProvider} from "@mdx-js/react"
import {Link} from "gatsby"
import Navbar from "../components/App/Navbar";
import Layout from "../components/App/Layout";
import {MDXRenderer} from "gatsby-plugin-mdx";
import CaseStudyAside from "../components/case-study-aside";
import HowCanWeHelpBanner from "../components/Index/HowCanWeHelpBanner";
import Footer from '../components/App/Footer'
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import '../assets/css/case-study-template.css';

const shortcodes = {Link} // Provide common components that will be available in the MDX files

export default function PageTemplate({data, children}) {
  const headerImage = getImage(data.mdx.frontmatter.headerImage?.childImageSharp?.gatsbyImageData)

  return (
    <>
      <Layout>
        <Navbar className="navbar-fixed-top"/>
        <SecondaryPageHeader classNames='case-studies-template-header' smallTitle='Case Study'
                             title={data.mdx.frontmatter.title}
                             backgroundImageFlag={data.mdx.frontmatter.headerImage} imageFromContent={headerImage}>

        </SecondaryPageHeader>


        <section className="case-studies-template post-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 post-block">
                <article className="post">
                  <MDXProvider components={shortcodes}>
                    <MDXRenderer
                      frontmatter={data.mdx.frontmatter}>
                      {data.mdx.body}
                    </MDXRenderer>
                  </MDXProvider>
                </article>
              </div>
              <CaseStudyAside objectives={data.mdx.frontmatter.objectives}
                              technologies={data.mdx.frontmatter.technologies}/>

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
    query($id: String!){
        mdx(id: { eq: $id } frontmatter: { key: { eq: "case-study" } } ) {
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
`
