import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const BlogPostCard = ({postDetails}) => {

  console.log('postDetails', postDetails);
  const {slug, headerImage, category, title, author, shortDescription} = postDetails;
  const imageObject = getImage(headerImage.childImageSharp.gatsbyImageData)

  return (
    <article className="post-card">
      <a className="post-card-image-link" href={slug}>
        <div className="post-card-image">
          <div className="gatsby-image-wrapper">
            <GatsbyImage alt="Blog post featured image" image={imageObject}/>
          </div>
        </div>
      </a>
      <div className="post-card-content">
        <a className="post-card-content-link post-card-details" href={slug}>
          <header className="post-card-header">
            <span className="category">{category}</span>
            <h2 className="post-card-title">{title}</h2>
          </header>
          <section className="post-card-body">
            <p>{shortDescription}</p>
          </section>
        </a>
        <footer className="post-card-meta">
          <ul className="post-card-meta-list">
            <li>
              <div className="author-name">@{author}</div>
            </li>
          </ul>
          <span className="read-time">1 min read</span>
        </footer>
      </div>
    </article>
  )
}
export default BlogPostCard;
