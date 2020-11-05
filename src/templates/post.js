import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery } from 'gatsby'

export const PostTemplate = (props) => {

    const { wpPost } = useStaticQuery(graphql`
      query postQuery($id: String) {
        wpPost(id: {eq: $id}) {
            title
            content
          }
      }
    `);

return (<Layout>
    <h1>{wpPost.title}</h1>
    <div dangerouslySetInnerHTML={{__html: wpPost.content}}>
    </div>
  </Layout>)

  };

export default PostTemplate;