import React from "react"
import { graphql } from "gatsby"
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import SEO from "../components/SEO"

import { LayoutContext } from "../components/Layout"
import ContactForm from "../components/ContactForm/ContactForm";

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    background: file(relativePath: { eq: "contact.jpg" }) {
      ...fluidImageBig
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
      
     
        <div className="row align-items-center">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
          <ContactForm/>
          </div>
        </div>
    </>
  )
}

export default ContactPage
