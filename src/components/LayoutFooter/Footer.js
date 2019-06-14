import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./Footer.module.scss"

import logo from "../../assets/logo/perfectedapp-logo-white.svg";

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <footer className={styles.Footer}>
      <div className="container">
        <div className="align-center">
          <img src={logo} alt="Perfected App Logo" />
          <p>Perfected App offers risk free service under the terms and conditions of the project. All projects require a minimal down-payment and must have clear specifications for fixed-price and fixed-delivery date.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
