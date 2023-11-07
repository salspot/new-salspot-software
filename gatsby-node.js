const path = require("path")
const postTemplate = path.resolve(`./src/templates/case-study-template.js`)


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
            component: postTemplate,
            context: { id: node.id },
        })
    })
}

//component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
