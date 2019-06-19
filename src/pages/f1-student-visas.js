import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"

// import { LayoutContext } from "../components/Layout"
import C1TransitVisaPageTemplate from "../templates/c1-transit-visa-page";

export const query = graphql`
  query F1StudentVisasPageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "f1-student-visas-page" } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        featured_image {
          childImageSharp {
            fixed(width: 554) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        intro {
          title
          subtitle
          characters
          note
          img {
            childImageSharp {
              fixed(width: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        special {
          title1
          content1
          title2
          content2
        }
      }
    }
  }
`

const F1StudentVisasPage = ({ data }) => {

  return (
    <>
      <SEO
        title="Seo Title"
        description="Seo Description"
      />
      <C1TransitVisaPageTemplate data={data} />
    </>
  )
}

export default F1StudentVisasPage
