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

export default class Application1Page extends Component{ 
  constructor(props) {
    super(props);

    this.state = {

      additional_nationalties: {
        is_other_nationaltiy: null,
        country_name: null,
        passport_number: "",

        is_resident: null,
        country_resident: "",
      },

      past_travel_applications: {
        have_been_US: null,
        trip_histories: [],

        hold_US_driver_license: null,
        driver_status: [],

        have_issue_US_visa: null,
        date_last_visa: new Date(),
        expiration_date: new Date(),
        visa_number: "",

        applying_same_type: null,
        have_ten_prined: null,
        applying_same_country: null,

        has_US_visa_cancelled: null,
        cancelled_explain: "",

        has_US_visa_lost: null,
        year_visa_lost: "",
        explain_lost: "",

        has_US_visa_refused: null,
        refused_explain: "",

        has_immigration: null,
        immigration_explain: "",

        has_ESTA: null,
        ESTA_explain: "",

        has_refused_entry: null,
        refused_entry_explain: ""
      },

      upcoming_trip_US: {
        specify: "",       
        
        is_person_or_organization: true,
        person_name: new _Name(),
        organization_name: "",
        relationship: null,
        email: "",
        telephone: "",
        address: new _Address(),
        paying_type: null,

        traveling_as_part_group: null,
        traveling_group_name: "",

        traveling_with_anyone: null,
        anyone_relationship: null,
        anyone_name: new _Name(),
        anyone_s: [],

        hotel_name: "",
        hotel_relationship: null,
        hotel_email: "",
        hotel_phone: "",
        hotel_address: new _Address(),

        has_specific_travel_plans: false,
        arrival_date: new Date(),
        arrival_flight: "",
        arrival_city: "",
        departure_date: new Date(),
        departure_flight: "",
        departure_city: "",
        plan_location: [],

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
              <h1>ADDITIONAL NATIONALITIES</h1>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you hold any other nationality other than the one you listed previously in this form? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Are you a resident of a country other than the one you listed as your nationality? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
            </div>
            <div className={styles.AppBlock}>
              <h1>PAST TRAVEL & APPLICATIONS</h1>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you ever been to the United States before?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you ever been issued a U.S. Visa?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you ever been refused a U.S. Visa, or been refused admission to the United States, or withdrawn your application for admission at the port of entry?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Has anyone filed an immigration petition on your behalf?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you ever had an ESTA application rejected?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Have you ever been refused entry to the United States?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Male" }, { value: true, caption: "Female" }]}></GroupOptions>
                </div>
              </div>
            </div>
            <div className={styles.AppBlock}>
              <h1>UPCOMING TRIP TO THE U.S.</h1>
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Name <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  TEMP. BUSINESS PLEASURE VISITOR (B)
                </div>
              </div>

              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Specify<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <Select options={specifics} value={this.state.selectedCountry} onChange={this.handleCountryChange} isSearchable={true} />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>

              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Who is your contact organization or person in United States? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Contact Person" }, { value: false, caption: "Organization" }]}></GroupOptions>
                </div>

                <div className="col-md-12" >
                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Contact Person Surnames<span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Contact Person Given Names <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Organization Name <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Relationship<span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <Select options={relationShips} value={this.state.selectedCountry} onChange={this.handleCountryChange} isSearchable={true} />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
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

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Telephone <span>*</span>
                    </div>
                    <div className="col-md-3 input_fields inline-mobile_">
                      <IntlTelInput
                        preferredCountries={['us']}
                        onPhoneNumberChange={this.handlePhoneInputChange}
                        onPhoneNumberBlur={this.handlePhoneInputBlur}
                      />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Street Address <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Apartment/Suite/Unit Number <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      City <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      State <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <Select options={countries} value={this.state.selectedCountry} onChange={this.handleCountryChange} isSearchable={true} />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      ZIP or Postal Code <span>*</span>
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
              <div className="row sub-form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Person/Entity Paying for Your trip <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <Select options={person_entity_paying} value={this.state.selectedCountry} onChange={this.handleCountryChange} isSearchable={true} />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>

              <div className="row sub-form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Are you traveling as part of a group? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>

              <div className="row sub-form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Is anyone going to be traveling with you? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>

              <div className="row sub-form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Is anyone going to be traveling with you? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
                <div className="col-md-12">
                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Relationship to you <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <Select options={relationShips} value={this.state.selectedCountry} onChange={this.handleCountryChange} isSearchable={true} />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
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

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Phone <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >

                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Street Address <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      Apartment/Suite/Unit Number <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      City <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <input maxLength="40" id="firstname" name="firstname" placeholder="Given Name (First Name)"
                        className="form-control input-md required valid validValue" type="text" />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      State <span>*</span>
                    </div>
                    <div className="col-md-6 input_fields inline-mobile_">
                      <SelectUSState id="myId" className="myClassName" onChange={this.setNewValue} />
                      <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                      <span id="firstname-error" className="error" ></span>
                    </div>
                  </div>

                  <div className="row sub-form-group">
                    <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                      ZIP Code <span>*</span>
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
                  Have you made specific travel plans *<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>

            </div>
          </div>
          
          <div className={styles.NextStep}>
            <Link className="btn btn-primary" to="/application2">
              CONTINUE TO STEP <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
