import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/SEO"

import { LayoutContext } from "../components/Layout"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    background: file(relativePath: { eq: "london.jpg" }) {
      ...fluidImageBig
    }
  }
`

const NotFoundPage = ({ data }) => { 

  return(
    <>
      <SEO title="404 - Page not found" />

      <LayoutContext.Consumer>
        {({setHeaderLeftTheme, setHeaderRightTheme}) => {
          setHeaderLeftTheme('dark');
          setHeaderRightTheme('light');
        }}
      </LayoutContext.Consumer>
      
      
        <div className="row">
          <div className="col-md-6 page-404">
            <h1 style={{margin: '0 0 10px'}}>
              <span>Error 404</span>
              <br/>
              <span><i className="c-accent">Page not found</i></span>
            </h1>
            <Link to="/">
              <button className="btn btn-unfilled scalein-anim">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      
    </>
  )
}

export default NotFoundPage
