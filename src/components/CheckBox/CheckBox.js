import React from 'react'

import styles from "./CheckBox.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CheckBox = ({ value, caption }) => {
  return (
    <>
      {value
        ? <FontAwesomeIcon icon='check-circle'></FontAwesomeIcon>
        : <FontAwesomeIcon icon='circle'></FontAwesomeIcon>
      }
      
      {caption}
    </>
  )
}

export default CheckBox
