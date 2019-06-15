import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import BlogPost from "../components/BlogPost";

import { LayoutContext } from "../components/Layout"


export const fixedImageMedium = graphql`
  fragment fixedImageMedium on File {
    childImageSharp {
      fixed(width: 600) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featured_image {
              ...fixedImageMedium
            }
          }
        }
      }
    }
    background: file(relativePath: { eq: "building.jpg" }) {
      ...fluidImageBig
    }
    integrityImage: file(relativePath: { eq: "integrity-box.jpg" }) {
      ...fluidImageBig
    }
    innovationImage: file(relativePath: { eq: "innovation-box.jpg" }) {
      ...fluidImageBig
    }
    professionalismImage: file(relativePath: { eq: "professionalism-box.jpg" }) {
      ...fluidImageBig
    }
  }
`

const BlogPage = ({ data }) => { 
  const posts = data.allMarkdownRemark.edges;

  return(
    <>
      <SEO 
        title="Blog" 
        description="Seo Description"
      />

      <LayoutContext.Consumer>
        {({setHeaderLeftTheme, setHeaderRightTheme}) => {
          setHeaderLeftTheme('light');
          setHeaderRightTheme('light');
        }}
      </LayoutContext.Consumer>

      
      <div className="container-fluid">
        <div className="recent-posts-header">
          <span><i>Recent posts</i></span>
        </div>

        {posts.map(({node}, index) => {
          const title = node.frontmatter.title || node.fields.slug
          const featuredImg = node.frontmatter.featured_image;
          return (
            <BlogPost 
              key={index}
              image={featuredImg}
              title={title}
              url={node.fields.slug}
              excerpt={node.excerpt}
              date={node.frontmatter.date}
              index={index}
            />
          )
        })}
      </div>
    </>
  )  
}

export default BlogPage
