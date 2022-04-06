import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql} from "gatsby"
import SEO from "../components/seo"



export default function Home({ data }) {
  return(
    <Layout>
    <SEO title="cbl testsite" description="Gatsbyを使って作ったブログです" />
    <Hero />
    {data.allMicrocmsBlog.edges.map(edge => 
    <PostLink key={edge.node.blogId} post={edge.node} />
    )}
    </Layout>
)
}


export const query = graphql`
    query allMicrocmsBlog{
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