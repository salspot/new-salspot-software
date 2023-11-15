const path = require("path")
const caseStudyTemplate = path.resolve(`./src/templates/case-study-template.js`)
const blogHomepageTemplate = path.resolve(`./src/templates/blog-homepage.js`)

const ContentTypes = {
    BLOG_HOMEPAGE: 'blog-homepage',
    BLOG_POST: 'blog-post',
    CASE_STUDY: 'case-study',
}

const contentTemplateMap = {
    [ContentTypes.BLOG_HOMEPAGE]: blogHomepageTemplate,
    [ContentTypes.BLOG_POST]: blogHomepageTemplate,
    [ContentTypes.CASE_STUDY]: caseStudyTemplate,
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-modal-video/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}


exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    id
                    frontmatter {
                        slug
                        key
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
    }

    const posts = result.data.allMdx.nodes;

    posts.forEach(node => {
        createPage({
            path: node.frontmatter.slug,
            component: contentTemplateMap[node.frontmatter.key],
            context: { id: node.id },
        })
    })
}

//component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
