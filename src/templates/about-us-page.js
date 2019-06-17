import React from "react"
import PropTypes from 'prop-types'
import SEO from "../components/SEO"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { LayoutContext } from "../components/Layout"

import styles from "./about-us-page.module.scss"
import PaymentSection from "../components/PaymentSection/PaymentSection";
// import MemberSection from "../components/Members";
// import AssistanceSection from "../components/Assistance";

const AbuotUsPageTemplate = ({ data }) => {
  const page_data = data.markdownRemark.frontmatter;
  const { headerLeftTheme, headerRightTheme } = page_data;

  return (
    <>
      <SEO
        title={page_data.title}
        description= "" // {page_data.description || page_data.excerpt}
      />

      <LayoutContext.Consumer>
        {({setHeaderLeftTheme, setHeaderRightTheme}) => {
          setHeaderLeftTheme(headerLeftTheme || 'light');
          setHeaderRightTheme(headerRightTheme || 'dark');
        }}
      </LayoutContext.Consumer>

      <div class="container">
        <div class={styles.AboutUsSection}>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}  ></div>
        </div>
      </div>

      <PaymentSection />
    </>
  )
}
AbuotUsPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default AbuotUsPageTemplate

