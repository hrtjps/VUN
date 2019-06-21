import React, { Component } from "react"
import SEO from "../components/SEO"

import styles from './application.module.scss'
import visa_icon from '../assets/images/visa-icon.png'
import master_card_icon from '../assets/images/master-card-icon.png'
import discover_icon from '../assets/images/discover-icon.png'
import cvv_icon from '../assets/images/cvv.png'
import protect_icon from '../assets/images/protect.png'
import comodo_icon from '../assets/images/comodo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default class ProcessPage extends Component{ 
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <>
        <SEO 
          title="Application"
          description="Seo Description"
        />
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className={styles.Card}>
                <div className={styles.CardHeader}>
                  PAYMENT STEP TWO
                </div>
                <div className={styles.CardBody}>
                  <div className="row form-group">
                    <div className="col-12">Card Number</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English"
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className={["col-12 d-flex", styles.InputContent].join(' ')}>
                      <img src={visa_icon} /><img src={master_card_icon} /><img src={discover_icon} />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">Expiration Date</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English"
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English"
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">Security Code</div>
                    <div className={["col-12 d-flex", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="Security Code"
                        className="form-control input-md required valid validValue" type="password" />
                      <img src={cvv_icon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button name="" id="" className="btn" href="#" role="button">Apply for My Visa</button>
              </div>
              <div className={styles.Card}>
                <div className={styles.CardHeader}>
                  PAYMENT STEP TWO
                </div>
                <div className={styles.CardBody}>
                  <div className="row form-group">
                    <div className="col-12">Card holder Full Name</div>
                    <div className={["col-12 d-flex", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English"
                        className="form-control input-md required valid validValue" type="text" />
                      <input maxLength="40" name="firstname" placeholder="English"
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">If you are not paying for this service with your own credit card, please be sure to enter the billing address of the card Holder or transaction may be declined</div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">Address</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English" readOnly
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">City</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English" readOnly
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">State</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English" readOnly
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">Country</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English" readOnly
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">ZIP or Postal Code</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English" readOnly
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">Mobile/home number</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English" readOnly
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-12">Email Address</div>
                    <div className={["col-12", styles.InputContent].join(' ')}>
                      <input maxLength="40" name="firstname" placeholder="English" readOnly
                        className="form-control input-md required valid validValue" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className={styles.Card}>
                <div className={styles.CardHeader}>
                  Order Summary
                </div>
                <table className="table table-hover table-borderless">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">QTY</th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Visa Application</td>
                      <td>$159</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p>
                  Please note that this charge does not include the $160 
                  that needs to be paid directly to the Department of State.
                </p>
                <p>
                  <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon> I received my US visa today. I am so grateful to everyone at 
                  visausanow.com who guided me through the entire process 
                  and was so efficient and supportive. I strongly recommend this service. 
                  <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                </p>
                <p>–Miguel P., Mexico</p>
                <div className={styles.Privacy}>
                  <img src={protect_icon}/>
                  <div>
                    <h5>We Protect Your Privacy </h5>
                    <span>All information you submit is kept confidential and secure.</span>
                  </div>
                </div>
                <div className={styles.Privacy}>
                  <img src={comodo_icon}/>
                  <div>
                    <h5>Your Order is Secure </h5>
                    <span>We use the highest level of encryption from Comodo to ensure your order is secure.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
