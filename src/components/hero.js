import React from "react"
import "../styles/hero.css"

export default function Hero(){
    return(
        <div className="hero">
            <h1 className="hero-text">Welcome to my blog! <br/>Enjoy lots of posts.</h1>
            <div className="hero-author">
                <img src="https://i.pravatar.cc/150?img=58" className="hero-author-image" alt="avater"></img>
                <p className="hero-author-text">
                    Written by XXXX.<br/>
                    Front Engineer at Hoge.Inc.
                </p>
            </div>
        </div>
    )
}