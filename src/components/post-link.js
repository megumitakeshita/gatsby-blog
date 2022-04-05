import React from "react"
import "../styles/post-link.css"
import { Link } from "gatsby"

export default function PostLink({post}){
    const{title,updatedAt,image} = post;
    const description = post.description;
    const pageLink = `/post/${post.blogId}/`

    return(
        <Link to ={pageLink} className="post-link-anchor">
        <div className="post-link">
            <div>
                <img src={image.url} className="post-link-image" alt="posot-cover"></img>
            </div>
            <div className="post-link-text">
                <h2>{title}</h2>
                <p className="post-link-body">{description}</p>
                <p className="post-link-date">{updatedAt}</p>
            </div>
        </div>
        </Link>
    )
}