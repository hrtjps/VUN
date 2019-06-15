import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"

// import { LayoutContext } from "../components/Layout"
import HomePageTemplate from "../templates/home-page";

export const fluidImageBig = graphql`
  fragment fluidImageBig on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query HomePageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title

        summary {
          title
          desciption
        }
        intro {
          title
          characters
        }
        featured_image {
          childImageSharp {
            fixed(width: 708) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        how_works {
          title
          subtitle
          items {
            url
            content
            img {
              childImageSharp {
                fixed(width: 65) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {

  return (
    <>
      <SEO 
        title="Seo Title" 
        description="Seo Description"
      />
      <HomePageTemplate data={data} />
    </>
  )
}

export default IndexPage
