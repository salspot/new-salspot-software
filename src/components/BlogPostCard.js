import React from "react";

const BlogPostCard = ({objectives, technologies}) => {

  return (
    <div className="col-lg-8 col-md-12 post-block">
      <article className="post">
        <a className="post-card-image-link css-kufnxr" href="/blog/github-link/">
          <div className="post-card-image css-8kte6t e1qfhan10">
            <div className="gatsby-image-wrapper">
              <div></div>
              <img src="placeholder.jpg" alt="Github Source cover image"/>
            </div>
          </div>
        </a>
        <div className="post-card-content css-123mfn9 e1qfhan11">
          <a className="post-card-content-link css-t0tfly" href="/blog/github-link/">
            <header className="post-card-header">
              <span className="css-z4f0wj e1qfhan12">Source</span>
              <h2 className="css-8kn4zf e1qfhan13">Github Source</h2>
            </header>
            <section className="css-1pcdrot e1qfhan14">
              <p>You’ll find the source of this blog on GitHub.GitHub -
                https://github.com/scttcper/gatsby-casperGetting StartedClone this repo.Remove .git…</p>
            </section>
          </a>
          <footer className="post-card-meta css-1uyhyqd e1qfhan15">
            <ul className="css-rv6jj5 e1qfhan16">
              <li className="css-1e7f8nx e1qfhan17">
                <div className="author-name-tooltip css-194msbx e1qfhan18">Ghost</div>
                <a className="css-wd3r0v" href="/blog/author/ghost/">
                  <img src="/blog/static/5f2c129e42248a92c87b13b4293950cf/f6494/ghost.png" alt="Ghost"
                       className="css-4krixh e1qfhan19"/>
                </a>
              </li>
            </ul>
            <span class="css-zb10i8 e1qfhan110">1 min read</span>
          </footer>
        </div>
      </article>
    </div>
  )
}
export default BlogPostCard;
