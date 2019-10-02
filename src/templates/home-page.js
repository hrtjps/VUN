import React from "react"
import PropTypes from 'prop-types'
import SEO from "../components/SEO"
import Img from "gatsby-image"

import { LayoutContext } from "../components/Layout"

import styles from "./home-page.module.scss"
import StartAppBtn from "../components/StartAppBtn";
import PaymentSection from "../components/PaymentSection/PaymentSection";
import MemberSection from "../components/Members";

const HomePageTemplate = ({ data }) => {
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

      <div className="container ">
        <div className={styles.HeaderSection}>
          <div className={styles.HeaderImg}>
            {page_data.featured_image ?
              <Img fixed={page_data.featured_image.childImageSharp.fixed} alt="" />
              : null
            }
          </div>
          <div className={styles.HeaderReason}>
            <div className={styles.TopReason}>
              <div className={styles.TopReasonTitle}>
                {page_data.intro.title}
              </div>
              <div className={styles.TopReasonContent}>
                {
                  page_data.intro.characters.map((item, index) => (
                    <div className={styles.TopReasonItem} key={index}>{item}</div>
                  ))
                }
              </div>
            </div>
            <div className={styles.StartBtn}>
              <StartAppBtn url="/" caption="START APPLICATION" />
            </div>
          </div>
        </div>

        <div className={styles.VisaSection}>
          <h1 className={styles.VisaTitle}>
            {page_data.summary.title}
          </h1>
          <p className={styles.VisaDescription}>
            {page_data.summary.desciption}
          </p>
          <div className={styles.StartBtn}>
            <StartAppBtn url="/" caption="START APPLICATION" />
          </div>
        </div>
      </div>

      <div className={styles.HowWorkSection}>
        <h1 className={styles.HowWorkTitle}>
          {page_data.how_works.title}
        </h1>
        <h2 className={styles.HowWorkSubtitle}>
          {page_data.how_works.subtitle}
        </h2>
        <div className={styles.HowWorkItems}>
          {
            page_data.how_works.items.map((item, index) => (
              <div className={styles.HowWorkItem} key={index} >
                {item.img ?
                  <Img fixed={item.img.childImageSharp.fixed} alt="" className={styles.HowWorkItemImg} />
                  : null
                }
                <div className={styles.HowWorkItemContent}>
                  {item.content}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <MemberSection />

      <PaymentSection />
    </>
  )
}
HomePageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default HomePageTemplate

