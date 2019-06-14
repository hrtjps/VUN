import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/SEO"

import { LayoutContext } from "../components/Layout"

import arrowIcon from "../assets/images/arrow-icon.svg"

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
  query {
    site {
      siteMetadata {
        title
      }
    }
    background: file(relativePath: { eq: "homepage.jpg" }) {
      ...fluidImageBig
    }
  }
`

class IndexPage extends Component{ 

  state = {
    currentSlide: 0
  }

  setCurrentSlide(index){
    this.setState({
      currentSlide: index
    });
  }

  render() {
    const { data, location } = this.props; 
    const { currentSlide } = this.state;

    return(
      <>
        <SEO 
          title="Seo Title" 
          description="Seo Description"
        />

        <LayoutContext.Consumer>
          {({setHeaderLeftTheme, setHeaderRightTheme}) => {
            setHeaderLeftTheme('dark');
            setHeaderRightTheme('light');
          }}
        </LayoutContext.Consumer>


      </>
    )
  }

}

export default IndexPage
