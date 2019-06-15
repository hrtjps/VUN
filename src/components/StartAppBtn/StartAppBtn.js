import React from 'react'
import { Link } from "gatsby"
import styles from "./start-app-btn.module.scss"
const StartAppBtn = ({ caption, url }) => {
  return (
    <>
      <Link to={url}>
        <button className={styles.StartAppBtn}>{caption}</button>
      </Link>
    </>
  )
}

export default StartAppBtn
