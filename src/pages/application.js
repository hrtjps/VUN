import React from "react"
import SEO from "../components/SEO"

import styles from './application.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckBox from "../components/CheckBox";

const ApplicationPage = () => { 
  return(
    <>
      <SEO 
        title="Application"
        description="Seo Description"
      />
      <div className="container">
        <div>B1/B2 Business/Tourist Visa Application</div>
        <div className={styles.AppBlock}>
          <h1>APPLICANT PERSONAL INFORMATION</h1>

          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Name <span>*</span>
            </div>
            <div className="col-md-3 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
            <div className="col-md-3 input_fields inline-mobile-middle_">
              <input maxLength="40" id="middlename" name="middlename" placeholder="Middle Name"
                className="form-control input-md validValue valid" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true"></i>
            </div>
            <div className="col-md-3 input_fields inline-mobile_">
              <input maxLength="40" id="lastname" name="lastname" placeholder="Surname (Last Name)"
                className="form-control input-md required validValue valid" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true"></i>
              <i className="fa fa-question-circle _show_big" aria-hidden="true" data-toggle="tooltip" data-placement="right"
                title="(Please enter all given names. If you don't have a given name, please enter 'FNU'.)"></i>
            </div>
          </div>
          <div className={styles.AddMoreBlock}>
            <span ><FontAwesomeIcon icon="plus-circle"></FontAwesomeIcon> Add</span>
            If you have more than one first name or last name, then please add it here
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Full name in native alphabet
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Date of Birth <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Gender <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <CheckBox value={true} caption='Male' />
              <CheckBox value={false} caption='Female' />
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Email <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Place of Birth (country/state/city) <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Nationality <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Do you have an alias or maiden name? <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Other Surnames Used (maiden, religious, professional, aliases, etc.)<span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Other Given Names Used <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Do you have a telecode that represents your name? <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Martal Status <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
        </div>
        <div className={styles.AppBlock}>
          <h1>INFORMATION ABOUT YOUR PARENTS</h1>

          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Name <span>*</span>
            </div>
            <div className="col-md-3 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
            <div className="col-md-3 input_fields inline-mobile-middle_">
              <input maxLength="40" id="middlename" name="middlename" placeholder="Middle Name"
                className="form-control input-md validValue valid" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true"></i>
            </div>
            <div className="col-md-3 input_fields inline-mobile_">
              <input maxLength="40" id="lastname" name="lastname" placeholder="Surname (Last Name)"
                className="form-control input-md required validValue valid" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true"></i>
              <i className="fa fa-question-circle _show_big" aria-hidden="true" data-toggle="tooltip" data-placement="right"
                title="(Please enter all given names. If you don't have a given name, please enter 'FNU'.)"></i>
            </div>
          </div>
          <div className={styles.AddMoreBlock}>
            <span ><FontAwesomeIcon icon="plus-circle"></FontAwesomeIcon> Add</span>
            If you have more than one first name or last name, then please add it here
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Full name in native alphabet
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Date of Birth <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Email <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Place of Birth (country/state/city) <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Nationality <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Do you have an alias or maiden name? <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Other Surnames Used (maiden, religious, professional, aliases, etc.)<span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Other Given Names Used <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Do you have a telecode that represents your name? <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Martal Status <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
        </div>
        <div className={styles.AppBlock}>
          <h1>CONTACT INFORMATION <br/>Address of the Person Applying for the Visa</h1>

          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Name <span>*</span>
            </div>
            <div className="col-md-3 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
            <div className="col-md-3 input_fields inline-mobile-middle_">
              <input maxLength="40" id="middlename" name="middlename" placeholder="Middle Name"
                className="form-control input-md validValue valid" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true"></i>
            </div>
            <div className="col-md-3 input_fields inline-mobile_">
              <input maxLength="40" id="lastname" name="lastname" placeholder="Surname (Last Name)"
                className="form-control input-md required validValue valid" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true"></i>
              <i className="fa fa-question-circle _show_big" aria-hidden="true" data-toggle="tooltip" data-placement="right"
                title="(Please enter all given names. If you don't have a given name, please enter 'FNU'.)"></i>
            </div>
          </div>
          <div className={styles.AddMoreBlock}>
            <span ><FontAwesomeIcon icon="plus-circle"></FontAwesomeIcon> Add</span>
            If you have more than one first name or last name, then please add it here
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Full name in native alphabet
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Date of Birth <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Email <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Place of Birth (country/state/city) <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Nationality <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Do you have an alias or maiden name? <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Other Surnames Used (maiden, religious, professional, aliases, etc.)<span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Other Given Names Used <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Do you have a telecode that represents your name? <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
          <hr />
          <div className="row form-group">
            <div className={["col-md-3", styles.ControlLabel].join(' ')} >
              Martal Status <span>*</span>
            </div>
            <div className="col-md-6 input_fields inline-mobile_">
              <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                className="form-control input-md required valid validValue" type="text" />
              <i className="fa fa-check validCheck" aria-hidden="true" ></i>
              <span id="firstname-error" className="error" ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplicationPage
