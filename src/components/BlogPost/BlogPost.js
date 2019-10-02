import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./BlogPost.module.scss";
import arrowIcon from "../../assets/images/arrow-icon.svg"

const BlogPost = ({ title, excerpt, image, date, url, index }) => {
  return (
    <article className={styles.BlogPost}>
      <div className={styles.BlogImg}>
        {image ? 
          <Img fixed={image.childImageSharp.fixed} alt={title} /> 
          : null
        }
      </div>
      <div className={styles.Post}>
        <h3><Link to={url}> {title} </Link> </h3>
        <div className={styles.Date}>{date}</div>
        <p dangerouslySetInnerHTML={{__html: excerpt,}} />
        <footer className={styles.PostFooter}>
          <Link to={url} className={styles.ReadMore}>
            Read more <img src={arrowIcon} alt={title} />
          </Link>
        </footer>
      </div>
    </article>
  )
}

export default BlogPost
