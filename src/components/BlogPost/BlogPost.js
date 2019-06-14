import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./BlogPost.module.scss";
import arrowIcon from "../../assets/images/arrow-icon.svg"

const BlogPost = ({ title, excerpt, image, date, url, index }) => {
  return (
    <article 
      className={[
        styles.BlogPost,
        index % 2 === 0 ? styles.Even : styles.Odd
      ].join(' ')}
    >
      <div className="row justify-content-end">
        <div className="col-md-6">
          <span className={styles.Date}>{date}</span>
        </div>
      </div>
      <div className="row align-items-center">
        <div className={[
          styles.PostImg,
          'col-md-6'
        ].join(' ')}>
          <div className={styles.Image}>
            {image ? 
              <Img fixed={image.childImageSharp.fixed} alt={title} /> 
              : null
            }
          </div>
        </div>
        <div className={[
          styles.PostBody,
          'col-md-6'
        ].join(' ')}>
          <div className={styles.Post}>
            <h3>
              <Link to={url}>
                {title}
              </Link>
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
            />
            <footer className={styles.PostFooter}>
              <Link to={url} className={styles.ReadMore}>
                Read more <img src={arrowIcon} alt={title} />
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
