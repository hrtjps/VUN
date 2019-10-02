import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchForm.module.scss'
import { StaticQuery, graphql } from "gatsby"

const SearchForm = () => (
  <StaticQuery
    query={
      graphql`
        query SearchFormQuery {
          markdownRemark(frontmatter: { templateKey: { eq: "search" } }) {
            frontmatter {
              info {
                title
                reasons
              }
            }
          }
        }
      `
    }
    render={data => (
      <div className={styles.SearchForm}>
        <div className={styles.SearchTitle}>{data.markdownRemark.frontmatter.info.title}</div>
        <div className={styles.TextWidget}>
          <ul>
            {
              data.markdownRemark.frontmatter.info.reasons.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon='check-circle' className={styles.HomeIcon}></FontAwesomeIcon>
                  <span>{item}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.SearchTitle}>Categories</div>
        <div className={styles.SearchTag}>
          Categories 
          <select name="cat" id="cat" className={styles.Category}>
            <option value="-1">Select Category</option>
            <option value="2">English (44)</option>
            <option value="1">Uncategorized (13)</option>
          </select>
        </div>
        <div className={styles.SearchTitle}>Search</div>
        <div className={styles.SearchTag}>
          <input type="search" className={styles.SearchField} placeholder="Search …"/> 
          <button type="submit" className={styles.SearchSubmit}>Search</button>
        </div>
      </div>
    )}
  />
)

export default SearchForm
