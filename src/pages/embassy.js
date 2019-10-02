import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"

// import { LayoutContext } from "../components/Layout"
import EmbassyPageTemplate from "../templates/embassy-page";

export const query = graphql`
  query EmbassyPageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "embassy-page"}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        templateKey
        footercontent
        headercontent
        countries {
          country_name
          cities {
            address
            city_name
            phone
            url
          }
        }
      }
    }
  }
`

const EmbassyPage = ({ data }) => {

  return (
    <>
      <SEO
        title="Seo Title"
        description="Seo Description"
      />
      <EmbassyPageTemplate data={data} />
    </>
  )
}

export default EmbassyPage
