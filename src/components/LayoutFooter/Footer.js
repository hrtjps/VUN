import React from 'react'
import { Link } from "gatsby"
// import { Link, graphql, useStaticQuery } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./Footer.module.scss"

import cards_logo from "../../assets/images/cards_logo.png";
import comodo_logo from "../../assets/images/comodo.png";
import satisfaction_logo from "../../assets/images/98-satisfaction.png";

function Footer() {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContact}>
        <div className="container align-center">
          <div className={styles.FooterContactContent}>
            <div><Link to="/contact/">Contact Us</Link></div>
            <div><FontAwesomeIcon icon="phone-alt"></FontAwesomeIcon> 1-888-588-8448 </div>
          </div>
        </div>
      </div>
      <div className={styles.FooterLink}>
        <div className="container align-center">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">ABOUT US</Link></li>
            <li><Link to="/">Faq</Link></li>
            <li><Link to="/contact/">Contact Us</Link></li>
            <li><Link to="/" data-toggle="modal" data-target="#terms_and_conditions">Terms And Conditions</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
          </ul>
          <p>Copyright © visausanow.com. All rights reserved.</p>
        </div>
      </div>
      <div className={styles.FooterSummary}>
        <div className="container align-center">
          <p>Please note: We are not associated with the Department of State in anyway nor, are we a law firm. We do not provide legal advice. We are a 3rd party service that assists with the application process and cannot guarantee that your application will be approved by the Department of State.</p>
          <img src="//banners.copyscape.com/img/copyscape-banner-white-200x25.png" alt="Protected by Copyscape" title="Protected by Copyscape Plagiarism Checker - Do not copy content from this page."></img>
        </div>
      </div>
    </footer>
  )
}

export default Footer
