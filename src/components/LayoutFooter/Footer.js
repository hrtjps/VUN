import React, { Component } from 'react'

import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./Footer.module.scss"


class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
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
              <li><Link to="/about-us">ABOUT US</Link></li>
              <li><Link to="/faq">Faq</Link></li>
              <li><Link to="/contact/">Contact Us</Link></li>
              <li><Link to="/teams/" state={{modal: true}}>Terms And Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/blog/page/1">Blog</Link></li>
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
}

export default Footer
