import React from "react"
import { graphql } from "gatsby"
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import SEO from "../components/SEO"

import { LayoutContext } from "../components/Layout"
import ContactPageTemplate from "../templates/contact-page";

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
    markdownRemark(frontmatter: { templateKey: { eq: "contact-us-page" } }) {
      id
      html
      frontmatter {
        title
        info {
          address
          city
          email
        }
      }
    }
  }
`

const ContactPage = ({ data, location }) => { 
  return(
    <>
      <SEO 
        title="Contact us"
        description="Seo Description"
      />

      <LayoutContext.Consumer>
        {({setHeaderLeftTheme, setHeaderRightTheme}) => {
          setHeaderLeftTheme('light');
          setHeaderRightTheme('dark');
        }}
      </LayoutContext.Consumer>
      
      <ContactPageTemplate data={data}/>
     
        
    </>
  )
}

export default ContactPage
