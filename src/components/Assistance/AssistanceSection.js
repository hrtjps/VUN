import React from 'react'
import Img from "gatsby-image"

import styles from "./AssistanceSection.module.scss";

const AssistanceSection = (data) => {
  const page_data = data.page_data;
  // console.log(page_data);
  if(!page_data.intro) return (<></>);

  return (
    <div className="container ">
      <div className={styles.HeaderSection}>
        <div className={styles.HeaderContent}>
          <div className={styles.HeaderTitle}>
            {page_data.intro.title}
          </div>
          {
            page_data.intro.subtitle ? 
              <div className={styles.HeaderSubtitle}>
                {page_data.intro.subtitle}
              </div>
              : null
          }
          <div className={styles.HeaderContents}>
            {
              page_data.intro.characters.map((item, index) => (
                <div className={styles.HeaderItem} key={index}>{item}</div>
              ))
            }
          </div>
          <div className={styles.HeaderStartBtn}>
            {page_data.intro.img ?
              <Img fixed={page_data.intro.img.childImageSharp.fixed} alt="" />
              : null
            }
          </div>
          <div className={styles.HeaderNote}>
            {page_data.intro.note}
          </div>
        </div>

        <div className={styles.HeaderImg}>
          {page_data.featured_image ?
            <Img fixed={page_data.featured_image.childImageSharp.fixed} alt="" />
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default AssistanceSection
