import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from "./CheckBox.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle as farFaCheckCircle, faCircle as farFaCircle} from '@fortawesome/free-regular-svg-icons'

export default class CheckBox extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.CheckBox} onClick={this.props.onClickCheckBox}>
        {this.props.value
          ? <FontAwesomeIcon icon={farFaCheckCircle}></FontAwesomeIcon>
          : <FontAwesomeIcon icon={farFaCircle}></FontAwesomeIcon>
        }
        {this.props.caption}
      </div>
    )
  }
}

CheckBox.propTypes = {
  value: PropTypes.bool,
  caption: PropTypes.string,
  onClickCheckBox: PropTypes.func
}
