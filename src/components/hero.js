import React from "react"
import ICON from "../../static/icon_setting.png"
import "../styles/hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcom to my blog! <br />
        Enjoy lots of posts <br />
      </h1>
      <div className="hero-author">
        <img src={ICON} className="hero-author-image" alt="avatar" />
        <p className="hero-author-text">
          Written by XXXX.
          <br />
          Front Engineer at Hoge.Inc. Love JavaScript.
        </p>
      </div>
    </div>
  )
}

export default Hero
