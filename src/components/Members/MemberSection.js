import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./MemberSection.module.scss";

const MemberSection = () => (
  <StaticQuery
    query={
      graphql`
        query MembersQuery {
          markdownRemark(frontmatter: { templateKey: { eq: "members" } }) {
            frontmatter {
              members {
                name
                content
                photo {
                  childImageSharp {
                    fixed(width: 130, height: 130) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      `
    }
    render={data => (
      <div className={styles.MembersSection}>
        {
          data.markdownRemark.frontmatter.members.map((item, index) => (
            <div className={index % 2 === 1 ? styles.GrayBackground : null} key={index} >
              <div className="container " >
                <div className={styles.MemberItem} key={index} >
                  <div>
                    {item.photo ?
                      <Img fixed={item.photo.childImageSharp.fixed} alt="" className={styles.MemberImg} />
                      : null
                    }
                  </div>
                  <div className={styles.MemberItemContent}>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )}
  />
)

export default MemberSection
