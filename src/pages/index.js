import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery } from "gatsby"
import hello from "../images/hello.png"
import github from '../images/github.png'
import bird from '../images/bird.png'
import email from '../images/email.png'

const IndexPage = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            title
            uri
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi, I'm Ray.</h1>
      <div className="intro">
        <img src={hello} className="wave" />
        <div className="intro-text">
          <p>
            <em>I need to write something here</em>. <strong>Something compelling</strong>. Something
            about myself. <strong>Inspire them</strong>, Ray. Wow I really haven't had much sleep
            lately. This is turning into a rambling stream of consciousness.
          </p>
        </div>
      </div>
      <h2>Blog Posts</h2>
      {allWpPost.edges.map(({ node }) => (
        <li>
          <Link href={node.uri}>{node.title}</Link>
        </li>
      ))}
      <div>
        <ul className="social-icons">
          <li className="social-icon"><img src={email} /></li>
          <li className="social-icon"><img src={bird} /></li>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
