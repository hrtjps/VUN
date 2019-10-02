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

export class _Name {
  constructor(first_name, mid_name, last_name){
    this.first_name = first_name;
    this.mid_name = mid_name;
    this.last_name = last_name;
  }
}

export class _Place {
  constructor(country, state, city) {
    this.country = country;
    this.state = state;
    this.city = city;
  }
}



export class _Relative {
  constructor(name, relationShip, US_citizen, telephone){
    this.name = name;
    this.relationShip = relationShip;
    this.US_citizen = US_citizen;
    this.telephone = telephone;
  }
}

export class _Address {
  constructor(street, apartment_suite_unit, city, state, zip, country) {
    this.street = street;
    this.apartment_suite_unit = apartment_suite_unit;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
  }
}

export default class ApplicationPage extends Component{ 
  constructor(props) {
    super(props);

    this.state = {
      applicant_personal_info: {
        name: new _Name(),
        hasOtherName: null,
        other_name: new _Name(),
        full_name_native: "",
        birth: new Date(),
        email: "",
        email_confirm: "",
        place_of_birth: new _Place(),
        nationality: "",
        alias_name: new _Name(),
        telecode_name: new _Name(),
        marital_status: ""
      },
      parent_info: {
        father_name: new _Name(),
        know_father_birth: null,
        father_birth: new Date(),
        is_father_US: null,
        father_US_citizen: null,

        mother_name: new _Name(),
        know_mother_birth: null,
        mother_birth: new Date(),
        is_mother_US: null,
        mother_US_citizen: null,

        relatives: [],

        other_relatives: null
      },

      contact_info: {
        phoneNo: "",
        secondary_phoneNo: "",
        home_address: new _Address(),
        is_other_address: null,
        other_address: new _Address(),
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

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeMidName = this.onChan
  }
  onChangeFirstName(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name);
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
              <h1>APPLICANT PERSONAL INFORMATION</h1>

              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Name <span>*</span>
                </div>
                <div className="col-md-3 input_fields inline-mobile_">
                  <input maxLength="40" placeholder="Given Name (First Name)" onChange = {e => this.onChangeFirstName(e)} value = {this.state.applicant_personal_info.name.first_name}
                    className="form-control input-md required valid validValue" type="text" 
                    id="applicant_personal_info.name.first_name" name="applicant_personal_info.name.first_name"
                    />
                </div>
                <div className="col-md-3 input_fields inline-mobile-middle_">
                  {/* <input maxLength="40" placeholder="Middle Name" onChange={e => this.onChangeMidName(e)} value={this.state.applicant_personal_info.name.mid_name}
                    className="form-control input-md validValue valid" type="text" /> */}
                </div>
                <div className="col-md-3 input_fields inline-mobile_">
                  {/* <input maxLength="40" placeholder="Surname (Last Name)" onChange={e => this.onChangeLastName(e)} value={this.state.applicant_personal_info.name.last_name}
                    className="form-control input-md required validValue valid" type="text" /> */}
                </div>
                <div className={styles.AddMoreBlock}>
                  <span ><FontAwesomeIcon icon="plus-circle"></FontAwesomeIcon> Add</span>
                  If you have more than one first name or last name, then please add it here
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Full name in native alphabet
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Full name"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Date of Birth <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <DatePicker value={this.state.dateOfBirthday} onChange={this.handleDateChange}/>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Gender <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  {/* <CheckBox value={true} caption='Male' />
                  <CheckBox value={false} caption='Female' /> */}
                  <GroupOptions checkboxes={[{value: false, caption: "Male"}, {value: false, caption: "Female"}]}></GroupOptions>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Email <span>*</span>
                </div>
                <div className="col-md-4 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Email"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
                <div className="col-md-4 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Confirm email"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Place of Birth (country/state/city) <span>*</span>
                </div>
                <div className="col-md-3 input_fields inline-mobile_">
                  <Select options={countries} value={this.state.selectedCountry} onChange={this.handleCountryChange} isSearchable={true}/>
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>

                <div className="col-md-3 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="State Name"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>

                <div className="col-md-3 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="City"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Nationality <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <Select options={options} value={this.state.selectedOption} onChange={this.handleNationaltyChange}
                    isMulti={true} isSearchable={true}
                   />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you have an alias or maiden name? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>
              <div className="row form-group d-none">
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
              <div className="row form-group d-none">
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
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you have a telecode that represents your name? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Martal Status <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <Select options={options} value={this.state.selectedOption} onChange={this.handleNationaltyChange}
                    isMulti={true} isSearchable={true}
                  />
                </div>
              </div>
            </div>
            <div className={styles.AppBlock}>
              <h1>INFORMATION ABOUT YOUR PARENTS</h1>

              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Father's Name <span>*</span>
                </div>
                <div className="col-md-4 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Father's Given name (First Name)"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
                <div className="col-md-4 input_fields inline-mobile-middle_">
                  <input maxLength="40" id="middlename" name="middlename" placeholder="Father's Surname (Last Name)"
                    className="form-control input-md validValue valid" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true"></i>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you know your father's date of birth? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Is your father currently in the United States? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Mother's Name <span>*</span>
                </div>
                <div className="col-md-4 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Mother's Given Name (First Name)"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
                <div className="col-md-4 input_fields inline-mobile_">
                  <input maxLength="40" id="firstname" name="firstname" placeholder="Mother's Surname (Last Name)"
                    className="form-control input-md required valid validValue" type="text" />
                  <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                  <span id="firstname-error" className="error" ></span>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you know your mother's date of birth? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Is your mother currently in the United States? <span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you currently have any immediate relatives in the United States?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>
              
              <div className="row form-group">
                <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                  Do you have any other relatives in the United States?<span>*</span>
                </div>
                <div className="col-md-6 input_fields inline-mobile_">
                  <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
                </div>
              </div>
              
            </div>
            <div className={styles.AppBlock}>
            <h1>CONTACT INFORMATION <br/>Address of the Person Applying for the Visa</h1>

            <div className="row form-group">
              <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                Phone Number <span>*</span>
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

            <div className="row form-group">
              <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                Secondary/work phone Numbers
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
            
            <div className="row form-group">
              <div className={["col-md-12", styles.ControlLabel].join(' ')} >
                Home Address
              </div>
              <div className="col-md-12" >
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
                    ZIP or Postal Code <span>*</span>
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
                    Country <span>*</span>
                  </div>
                  <div className="col-md-6 input_fields inline-mobile_">
                    <Select options={countries} value={this.state.selectedCountry} onChange={this.handleCountryChange} isSearchable={true} />
                    <i className="fa fa-check validCheck" aria-hidden="true" ></i>
                    <span id="firstname-error" className="error" ></span>
                  </div>
                </div>

              </div>
            </div>
            
            
            <div className="row form-group">
              <div className={["col-md-3", styles.ControlLabel].join(' ')} >
                Is your mailing address different from your home address?<span>*</span>
              </div>
              <div className="col-md-6 input_fields inline-mobile_">
                <GroupOptions checkboxes={[{ value: false, caption: "Yes" }, { value: false, caption: "No" }]}></GroupOptions>
              </div>
            </div>
            
          </div>
          </div>
          
          <div className={styles.NextStep}>
            <Link className="btn btn-primary" to="/application1">
              CONTINUE TO STEP <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
