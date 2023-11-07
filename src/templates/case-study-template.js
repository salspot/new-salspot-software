import React from "react"
import {graphql} from "gatsby"
import {MDXProvider} from "@mdx-js/react"
import {Link} from "gatsby"
import Navbar from "../components/App/Navbar";
import Layout from "../components/App/Layout";
import '../assets/css/case-study-template.css';
import {MDXRenderer} from "gatsby-plugin-mdx";
import CaseStudyAside from "../components/case-study-aside";
import HowCanWeHelpBanner from "../components/Index/HowCanWeHelpBanner";
import Footer from '../components/App/Footer'

const shortcodes = {Link} // Provide common components here

export default function PageTemplate({data, children}) {
  console.log('data', data);
  console.log('children', children);
  return (
    <>
      <Layout>
        <Navbar className="navbar-fixed-top white-page"/>
        <header className="case-studies-template-header header">
          <div className="container">
            <div className="row headline">
              <div className="col-lg-9 col-md-10 col-sm-12">
                <div className="row">
                  <div className="title">Case Study</div>
                  <h1 className="page-type">{data.mdx.frontmatter.title}</h1>
                  <div className="skayline"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="case-studies-template post-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 post-block">
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
    query($id: String!) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                objectives
                technologies
            }
        }
    }
`
