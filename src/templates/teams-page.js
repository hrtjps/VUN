import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const TeamsPageTemplate = ({ data }) => {
  const page_data = data.markdownRemark.frontmatter;

  return (
    <ModalRoutingContext>
      {({ modal }) => (
        <div >
          <div className="d-flex justify-content-between">
            <span>Terms and Conditions</span>
            <Link onClick={() => window.history.back()}>X</Link>
          </div>
          <hr/>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}  ></div>
          <hr/>
          <div className="align-right">
            <Link onClick={()=>window.history.back()} >Close</Link>
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

