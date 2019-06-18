import React from "react"
import PropTypes from 'prop-types'
import SEO from "../components/SEO"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { LayoutContext } from "../components/Layout"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import styles from "./teams-page.module.scss"
import PaymentSection from "../components/PaymentSection/PaymentSection";
// import MemberSection from "../components/Members";
// import AssistanceSection from "../components/Assistance";

const TeamsPageTemplate = ({ data }) => {
  const page_data = data.markdownRemark.frontmatter;
  const { headerLeftTheme, headerRightTheme } = page_data;

  return (
    <ModalRoutingContext>
      {({ modal }) => (
        <div >
          <div className="d-flex justify-content-between">
            <span>Terms and Conditions</span>
            <Link to="/">X</Link>
          </div>
          <hr/>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}  ></div>
          <hr/>
          <div className="align-right">
            <Link to="/" >Close</Link>
          </div>
        </div>
      )}
    </ModalRoutingContext>
  )
}
TeamsPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default TeamsPageTemplate

