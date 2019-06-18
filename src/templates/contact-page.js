import React from "react"
import PropTypes from 'prop-types'
import SEO from "../components/SEO"

import { LayoutContext } from "../components/Layout"

import styles from "./contact-page.module.scss"
import PaymentSection from "../components/PaymentSection/PaymentSection";
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPageTemplate = ({ data }) => {
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
        <div class={styles.ContactSection}>
          <h1>Contact us</h1>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.ContactAddress}>
                <div>{page_data.info.address}</div>
                <div>{page_data.info.city}</div>
              </div>
              <div className={styles.ContactEmail}>
                Email: <a>{page_data.info.email}</a>
              </div>
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <PaymentSection />
    </>
  )
}
ContactPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default ContactPageTemplate

