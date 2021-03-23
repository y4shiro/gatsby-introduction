import React from "react"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360"

const PostLink = () => {
  return (
    <div className="post-link">
      <div>
        <img src={RANDOM_IMG} className="post-link-image" alt="post-cover" />
      </div>
      <div className="post-link-text">
        <h2>Gatsby でブログを作成してみた</h2>
        <p className="post-link-body">Gatsby 初めた</p>
        <p className="post-link-date">2020/05/30</p>
      </div>
    </div>
  )
}

export default PostLink
