import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/SEO"

import styles from "./blog-post.module.scss"
import arrowIcon from "../assets/images/arrow-icon.svg"
import SearchForm from "../components/SearchForm/SearchForm";

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous } = pageContext

  let background = post.frontmatter['featured_image']
  if(background){
    background = background.childImageSharp.sizes
  }
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className="container">
        {previous && (
          <Link to={previous.fields.slug} rel="next">
            <i>Next Post</i>
          </Link>
        )}
        <div className="row">
          <div className="col-md-8">
            <article className={styles.Post}>
              <div className={[
                styles.Header,
                'align-center'
              ].join(' ')}>
                <h1 className={styles.Title}>{post.frontmatter.title}</h1>
                <span className={styles.Date}>{post.frontmatter.date}</span>
              </div>
              
              <div className={styles.Content} dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </article>
          </div>
          <div className="col-md-4">
            <SearchForm/>
          </div>
        </div>

        {previous && (
          <Link  to={previous.fields.slug} rel="next">
            <i>Next Post</i>
          </Link>
        )}
      </div>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        templateKey
        date(formatString: "MMMM DD, YYYY")
        featured_image {
          childImageSharp{
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
