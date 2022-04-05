const path = require("path")
exports.createPages = async ({graphql,actions,reporter}) =>{
    const{createPage} = actions
    const result = await graphql(
        `
        {
            allMicrocmsBlog {
                edges {
                  node {
                    blogId
                    title
                    body
                    image {
                      url
                      height
                      width
                    }
                    description
                    updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                  }
                }
              }
        }
        `
    )

    if(result.errors){
        reporter.panicOnBuild(`Erroe while running GraphQL query.`)
        return
    }

    const { edges } = result.data.allMicrocmsBlog

    edges.forEach( edge =>{
        createPage({
            path:`/post/${edge.node.blogId}/`,
            component: path.resolve("./src/templetes/post.js"),
            context:{post:edge.node}
        })
    });
}