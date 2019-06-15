import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/SEO"
import { LayoutContext } from "../components/Layout"

import styles from "./blog-post.module.scss"
import arrowIcon from "../assets/images/arrow-icon.svg"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous } = pageContext
  const { headerLeftTheme, headerRightTheme, categories } = post.frontmatter;

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

      <LayoutContext.Consumer>
        {({setHeaderLeftTheme, setHeaderRightTheme}) => {
          setHeaderLeftTheme(headerLeftTheme || 'light');
          setHeaderRightTheme(headerRightTheme || 'dark');
        }}
      </LayoutContext.Consumer>


     

        {previous && (
          <Link className={styles.Next} to={previous.fields.slug} rel="next">
            <i>Next Post</i>
            <img src={arrowIcon} alt={previous.frontmatter.title} />
          </Link>
        )}

        <div className="row justify-content-end">
          <div className="col-md-6">
            <article className={styles.Post}>
              <div className={[
                styles.Header,
                'align-center'
              ].join(' ')}>
                {categories && (
                  <i className={styles.Category}>{categories[0]}</i>
                )}
                <h1 className={styles.Title}>{post.frontmatter.title}</h1>
                <span className={styles.Date}>{post.frontmatter.date}</span>
              </div>
              
              <div className={styles.Content} dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </article>
          </div>
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
        headerLeftTheme
        headerRightTheme
        categories
        tags
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
