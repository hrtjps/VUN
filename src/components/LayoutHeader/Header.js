import React from "react"
// import { graphql, useStaticQuery } from "gatsby"

import HeaderNav from './HeaderNav'
import styles from "./Header.module.scss";
import logoSvg from "../../assets/logo.svg"

// import logoIconDark from "../../assets/logo/perfectedapp-icon.svg"
// import logoIconLight from "../../assets/logo/perfectedapp-icon-white.svg"
// import logoTextDark from "../../assets/logo/perfectedapp-text-gray.svg"
// import logoTextLight from "../../assets/logo/perfectedapp-text-white.svg"

const Header = ({ themeLeft, themeRight }) => {
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

  // let iconLogo, textLogo, classes = [];
  let classes = [];
  if(themeLeft === 'dark'){
    classes.push(styles.Dark);
    // iconLogo = <img src={logoIconLight} alt={site.siteMetadata.title} />
    // textLogo = <img src={logoTextDark} alt={site.siteMetadata.title} />
  }else{
    classes.push(styles.Light);
    // iconLogo = <img src={logoIconDark} alt={site.siteMetadata.title} />
    // textLogo = <img src={logoTextLight} alt={site.siteMetadata.title} />
  }
  

  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.HeaderTitle}>
          <div className={styles.HeaderLogo}>
            <a href="/"><img className={styles.HeaderLogoImg} src={logoSvg} alt="" /></a>
          </div>
          <div className={styles.HeaderDescription}>
            <span className={styles.HeaderDescriptionText}>
              Specializing in U.S. Visas for visitors, Businessman and students from all over the world.
            </span>
          </div>
          <div className={styles.HeaderContact}>
            <span className={styles.HeaderContactDescription}>Call us 24 Hrs a day 7 days a week</span>
            <span className={styles.HeaderContactPhone}>1-888-588-8448 </span>
          </div>
          <div className={styles.HeaderMenu}>
            Live Chat
          </div>
        </div>
      </div>
      <div className={styles.NavBar}>
        <div className="container">
          <HeaderNav theme={themeRight}/>
        </div>
      </div>
    </div>
  )
}
export default Header
