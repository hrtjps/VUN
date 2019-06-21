import React, { Component } from "react"
import SEO from "../components/SEO"

import styles from './application.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-date-picker'
import GroupOptions from "../components/GroupOptions";
import { Link } from "gatsby";

// import ReactTelInput from 'react-telephone-input';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import SelectUSState from 'react-select-us-states';

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

import { _Name, _Place, _Address } from "./application";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const specifics = [
  { value: 'BUSINESS & TOURISM (TEMPORARY VISITOR) (B1/B2)', label: 'BUSINESS & TOURISM (TEMPORARY VISITOR) (B1/B2)' },
  { value: 'BUSINESS / CONFERENCE (B1)', label: 'BUSINESS / CONFERENCE (B1)' },
  { value: 'TOURISM / MEDICAL TREATMENT (B2)', label: 'TOURISM / MEDICAL TREATMENT (B2)' },
];
const relationShips = [
  { value: '-Please Select-', label: '-Please Select-' },
  { value: 'Friend', label: 'Friend' },
  { value: 'Child', label: 'Child' },
  { value: 'Spouse', label: 'Spouse' },
  { value: 'Other Relative', label: 'Other Relative' },
  { value: 'Business Associate', label: 'Business Associate' },
  { value: 'School Official', label: 'School Official' },
  { value: 'Other', label: 'Other' },
];

const person_entity_paying = [
  { value: '-Please Select-', label: '-Please Select-' },
  { value: 'Self', label: 'Self' },
  { value: 'Other Person', label: 'Other Person' },
  { value: 'Other Company / Organization', label: 'Other Company / Organization' },
];
const countries = countryList().getData();
// const USStates = SelectUSState().getData();
// console.log(USStates)
const martal_status = [
  { value: 'Please Select', label: 'Please Select' },
  { value: 'SINGLE', label: 'SINGLE' },
  { value: 'MARRIED', label: 'MARRIED' },
  { value: 'COMMON LAW MARRIAGE', label: 'COMMON LAW MARRIAGE' },
  { value: 'CIVIL UNION / DOMESTIC PARTNERSHIP', label: 'CIVIL UNION / DOMESTIC PARTNERSHIP' },
  { value: 'WIDOWED', label: 'WIDOWED' },
  { value: 'DIVORCED', label: 'DIVORCED' },
  { value: 'SEPARATED', label: 'SEPARATED' },
  { value: 'OTHER', label: 'OTHER' },
];

export default class Application2Page extends Component{ 
  constructor(props) {
    super(props);

    this.state = {

      additional_questions: {
        US_embassy: null,

        is_student: false,
        shcool_name: "",
        school_address: new _Address(),
        school_phone: "",
        school_start_date: new Date(),
        major: "",
        describe_duties: "",

        is_working: false,
        working_type: null,
        occupation: "",
        employer_name: "",
        employer_phone: "",
        employer_address: new _Address(),
        working_start_date: new Date(),
        working_duties: "",
        working_monthly: "",

        is_employed: false,
        old_employer_name: "",
        old_job_name: "",
        old_job_start_date: new Date(),
        old_job_leave_date: new Date(),
        old_job_duties: "",
        supervisor_name: new _Name(),
        supervisor_telephone: "",
        supervisor_address: new _Address(),
        old_employes: [],

        is_academic: false,
        academic_name: "",
        academic_address: new _Address(),
        academic_course: "",
        academic_start_date: new Date(),
        academic_end_date: new Date(),

        is_military: false,
        military_country: "",
        military_branch: "",
        military_rank: "",
        military_specialty: "",
        military_start_date: new Date(),
        military_end_date: new Date(),

        has_other_group: false,
        other_group_explain: "",

        has_other_organization: false,
        other_organization: "",

        is_tribe: false,
        trive_name: "",

        is_specialized_skills: false,
        specialized_skill_explain: "",
        
        languages: ["English"],

        has_traveled_outside: false,
        outside_country_name: ""
      },

      passport_info: {
        has_passport: false,
        passport_type: null,
        passport_number: "",
        passport_address: new _Place(),
        passport_start_date: new Date(),
        passport_expiration_date: new Date(),

        has_lost_passport: false,
        lost_passport_number: "",
        lost_passport_country: null,
        lost_passport_explain: ""
      },

      phoneNo: null,
      selectedCountry: null,
      selectedOption: null,
      dateOfBirthday: new Date()
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNationaltyChange = this.handleNationaltyChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handlePhoneInputBlur = this.handlePhoneInputBlur.bind(this);
    this.handlePhoneInputChange = this.handlePhoneInputChange.bind(this);
  }
  handlePhoneInputChange(telNumber, selectedCountry) {
    console.log('input changed. number: ', telNumber, 'selected country: ', selectedCountry)
  }

  handlePhoneInputBlur(telNumber, selectedCountry) {
    console.log(
      'Focus off the ReactTelephoneInput component. Tel number entered is: ',
      telNumber,
      ' selected country is: ',
      selectedCountry
    )
  }

  handleNationaltyChange(selectedOption) {
    this.setState({ selectedOption: selectedOption });
  }
  handleCountryChange(selectedOption) {
    this.setState({ selectedCountry: selectedOption });
  }
  handleDateChange(date) {
    this.setState({
      dateOfBirthday: date
    })
  }

  render() {
    return(
      <>
        <SEO 
          title="Application"
          description="Seo Description"
        />
        <div className="container">
          <div>B1/B2 Business/Tourist Visa Application</div>
          <div>
            <div className={styles.AppBlock}>
              <h1>ADDITIONAL QUESTIONS</h1>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Which US embassy will you be going to for the interview?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Are you a student?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Are you currently working?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
                <div className="col-md-12" >
                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Explain:<span>*</span>
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
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you been previously employed?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you attended an academic institution of high school and above?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you ever served in the military? *<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you ever served in, been a member of, or been involved with a paramilitary unit, vigilante unit, rebel group, guerrilla group, or insurgent organization?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you belonged to, contributed to, or worked for any professional, social, or charitable organization?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you belong to a clan or a tribe?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Specialized skills<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Language(s) Spoken<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="English"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>                  

                  <div className={styles.AddMoreBlock}>
                    <span ><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add</span>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you traveled outside your country (not including the United States) in the last 5 years?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
            </div>
            <div className={styles.AppBlock}>
              <h1>PASSPORT INFORMATION</h1>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you know your passport details?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div></div>
            </div>

          <div className={styles.NextStep}>
            <Link to="/process" className="btn btn-primary" >
              Apply My VISA <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
