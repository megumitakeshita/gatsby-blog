import * as React from "react"
import "../styles/post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Post({pageContext}) {
    const { title,updatedAt,image} = pageContext.post;
    const body = pageContext.post.body;
    const description = pageContext.post.description;

    return(
        <Layout>
            <SEO title={title} description={description} />
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-date">{updatedAt}</p>
            </div>
            <img src={image.url} className="post-image" alt="post-cover"></img>
            <div dangerouslySetInnerHTML={{__html:body}} className="post-body" />
        </Layout>
    )
}