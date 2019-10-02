import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"

// import { LayoutContext } from "../components/Layout"
import C1TransitVisaPageTemplate from "../templates/c1-transit-visa-page";

export const query = graphql`
  query DS160VisasTouristWorkPageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "ds160-visas-tourist-work-page" } }) {
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

const Ds160VisasTouristWorkPage = ({ data }) => {

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

export default Ds160VisasTouristWorkPage
