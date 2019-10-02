import React from "react"
import PropTypes from 'prop-types'
import SEO from "../components/SEO"
import { Link } from "gatsby"

import { LayoutContext } from "../components/Layout"

// import styles from "./c1-transit-visa-page.module.scss"
import PaymentSection from "../components/PaymentSection/PaymentSection";
import MemberSection from "../components/Members";
import AssistanceSection from "../components/Assistance";

const C1TransitVisaPageTemplate = ({ data }) => {
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

      <AssistanceSection page_data = {page_data}/>
      
      <PaymentSection />

      <MemberSection />

    </>
  )
}
C1TransitVisaPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default C1TransitVisaPageTemplate

