import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderNav extends Component {

  constructor(props){
    super(props);
    this.state = {
      navOpened: false,
      forceDarkTheme: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.detectNavTheme = this.detectNavTheme.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.detectNavTheme);
    window.addEventListener('resize', this.detectNavTheme);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.detectNavTheme);
    window.removeEventListener('resize', this.detectNavTheme);
  }

  detectNavTheme(){
    // const { forceDarkTheme } = this.state;

    // Force nav dark theme when user scrolls below 300px
    // if (window.scrollY > 300 && forceDarkTheme === false) {
    //   this.setState({
    //     forceDarkTheme: true
    //   });
    // } else if(window.scrollY <= 300 && forceDarkTheme === true){
    //   this.setState({
    //     forceDarkTheme: false
    //   });
    // }
  }

  toggleNav(){
    const { navOpened } = this.state;
    this.setState({
      navOpened: !navOpened
    })
  }

  render() {
    // const { theme } = this.props;
    const { navOpened, forceDarkTheme } = this.state;

    return (
      <>
        <nav 
          className={[
            styles.Nav,
            styles.Light,
          ].join(' ')}
          aria-label="Main"
        >
          <button
            className={styles.NavButton}
            onClick={this.toggleNav} 
            aria-label="Toggle navigation"
            aria-haspopup="true"
            aria-expanded={navOpened}
          >
            <span className={styles.Line1}></span>
            <span className={styles.Line2}></span>
            <span className={styles.Line3}></span>
          </button>
          <ul onClick={this.toggleNav} className={navOpened?styles.Opened:null}>
            <li>
              <Link to="/" activeClassName={styles.Active}><FontAwesomeIcon icon="home" className={styles.HomeIcon}></FontAwesomeIcon></Link>
            </li>
            <li>
              <Link to="/ds160" activeClassName={styles.Active}>TOURIST / BUSINESS VISA(B1/B2)</Link>
            </li>
            <li>
              <Link to="/c1-transit-visa" activeClassName={styles.Active}>C1 Transit Visa</Link>
            </li>
            <li>
              <Link to="/about-us" activeClassName={styles.Active}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName={styles.Active}>Contact Us</Link>
            </li>
            <li>
              <Link to="/embassy" activeClassName={styles.Active}>Embassy Info</Link>
            </li>
            <li>
              <Link to="/application" activeClassName={styles.Active}>Apply for Visa</Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }

}

HeaderNav.propTypes = {
  theme: PropTypes.string
}

export default HeaderNav
