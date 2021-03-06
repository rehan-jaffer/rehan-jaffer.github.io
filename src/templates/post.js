import React from "react"
import Layout from "../components/layout"
import { useStaticQuery } from "gatsby"

export const PostTemplate = ({ data }) => {

  const { wpPost } = data

  return (
    <Layout>
      <h1>{wpPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: wpPost.content }}></div>
    </Layout>
  )
}

export const query = graphql`
    query post($id: String) {
      wpPost(id: { eq: $id }) {
        title
        content
      }
}`;

export default PostTemplate
