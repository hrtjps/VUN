import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"

// import { LayoutContext } from "../components/Layout"
import AboutUsPageTemplate from "../templates/about-us-page";

export const query = graphql`
  query PrivacyPageTemplate {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "privacy-page" } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
      }
    }
  }
`

const AboutUsPage = ({ data }) => {

  return (
    <>
      <SEO
        title="Seo Title"
        description="Seo Description"
      />
      <AboutUsPageTemplate data={data} />
    </>
  )
}

export default AboutUsPage
