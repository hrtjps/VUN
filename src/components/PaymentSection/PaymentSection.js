import React from 'react'
import { Link } from "gatsby"

import styles from "./PaymentSection.module.scss";

import cards_logo from "../../assets/images/cards_logo.png";
import comodo_logo from "../../assets/images/comodo.png";
import satisfaction_logo from "../../assets/images/98-satisfaction.png";

const PaymentSection = () => {
  return (
    <div className={styles.FooterPayment}>
      <div className="container align-center">
        <ul>
          <li><img src={satisfaction_logo} alt="Success Rate" /></li>
          <li><img src={comodo_logo} alt="Comodo" /></li>
          <li><img src={cards_logo} alt="Visa/Master Card" /></li>
        </ul>
      </div>
    </div>
  )
}

export default PaymentSection
