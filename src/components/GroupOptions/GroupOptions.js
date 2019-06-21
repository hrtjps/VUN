import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from "./GroupOptions.module.scss";
import CheckBox from '../CheckBox/CheckBox';

export default class GroupOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: -1,
      checkboxes: this.props.checkboxes
    }
    this.clickCheckBox = this.clickCheckBox.bind(this);
  }

  clickCheckBox(no) {
    const old = this.state.checkboxes;
    this.setState({
      value: old[no].caption,
      checkboxes: old.map((item, index)=>{
        return {
          ...item,
          value: index === no ? true : false
        }
      })
    })
  }

  render() {
    return (
      <div className={styles.GroupOptions}>
        {
          this.state.checkboxes.map((item, index) => (
            <CheckBox key={index} caption={item.caption} value={item.value} onClickCheckBox = {() => this.clickCheckBox(index)}></CheckBox>
          ))
        }
      </div>
    );
  }
}

GroupOptions.propTypes = {
  checkboxes: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.bool,
      caption: PropTypes.string
    })
  ),
  value: PropTypes.string

}