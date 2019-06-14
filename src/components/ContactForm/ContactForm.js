import React, { Component } from 'react'
import axios from 'axios';

import styles from './ContactForm.module.scss'

export default class ContactForm extends Component {

  constructor(props){
    super(props);

    this.validateInput = this.validateInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendMail = this.sendMail.bind(this);

    this.state = {
      loading: false,
      response: null,
      error: null,
      name: {
        value: '',
        valid: false,
        touched: false
      },
      email: {
        value: '',
        valid: false,
        touched: false
      },
      message: {
        value: '',
        valid: false,
        touched: false
      }
    }
  }

  validateInput(inputName, value){
    if(value.length <= 0){
      return false;
    }

    if(inputName === 'email'){
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(value).toLowerCase());
    }

    return true;
  }

  handleInputChange(inputName, event){
    const value = event.target.value; 
    const valid = this.validateInput(inputName, value);
    const inputState = {};
    inputState[inputName] = {
      value,
      valid,
      touched: true
    }
    this.setState(inputState);
  }

  sendMail(event) {
    event.preventDefault();
    const { name, email, message } = this.state;

    // Show loading spinner
    this.setState({
      loading: true
    });
    
    const data = JSON.stringify({ 
      name: name.value, 
      email: email.value,
      message: message.value
    });
    console.log('Submitting contact form', data);

    axios({
      method: 'post',
      url: 'https://v1c26ibs17.execute-api.eu-west-1.amazonaws.com/production/contact-form',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      crossDomain: true,
      data: data,
    }).then(res => {
      console.log(res.data);
      if(res.data.errorMessage){
        this.setState({
          loading: false,
          error: res.data.errorMessage
        });
      }else{
        this.setState({
          loading: false,
          response: res.data
        });
      }
    }).catch(err => {
      console.error(err);
      this.setState({
        loading: false,
        error: err
      });
    });

  }

  render() {
    const { name, email, message, error, response, loading } = this.state;
    
    // Check if form is valid
    let submitProps = { disabled: true };
    if(name.valid === true && email.valid === true && message.valid === true){
      submitProps = {};
    }

    // Parse error message
    let errorMessages = null;
    try {
      errorMessages = JSON.parse(error);
    } catch (e) {
      errorMessages = null;
    }

    return (
      <form 
        className={styles.ContactForm} 
        onSubmit={(e) => this.sendMail(e)}
      >
        {loading && (
          <div className="pa-loader-container">
            <div className="pa-loader"></div>
          </div>
        )}

        {response && (
          <em className="success-message">Thank you for reaching out to us. We will reply back to you shortly!</em>
        )}

        {!response && (
          <div className="form-inner">
            <input 
              type="text" 
              className="form-control fadein-anim" 
              placeholder="My name is"
              value={name.value} 
              onChange={(e) => this.handleInputChange('name', e)}
              aria-required="true"
              aria-invalid={!name.valid && name.touched}
              required
            />
            {!name.valid && name.touched && (
              <span className="error-message">Name is required</span>
            )}

            <input 
              type="email" 
              className="form-control fadein-anim" 
              placeholder="My personal email is"
              value={email.value} 
              onChange={(e) => this.handleInputChange('email', e)}
              aria-required="true"
              aria-invalid={!email.valid && email.touched}
              required
            />
            {!email.valid && email.touched && (
              <span className="error-message">Email is not valid</span>
            )}

            <textarea 
              className="form-control fadein-anim" 
              placeholder="I'd like to talk about"
              value={message.value} 
              onChange={(e) => this.handleInputChange('message', e)}
              rows="4"
              aria-required="true"
              aria-invalid={!message.valid && message.touched}
              required
            ></textarea>
            {!message.valid && message.touched && (
              <span className="error-message">Message is required</span>
            )}

            {error && (
              <>
                {errorMessages !== null ? (
                  <>
                    {errorMessages.map((msg, i) => (
                      <p key={i} className="error-message">{msg.message}</p>
                    ))}
                  </>
                ) : (
                  <p className="error-message">{error}</p>
                )}
              </>
            )}
            <div className="align-center">
              <button 
                {...submitProps}
                type="submit" 
                className="btn btn-unfilled scalein-anim"
                aria-label="Send message"
              >
                Send message
              </button>
            </div>
          </div>
        )}
      </form>
    )
  }
}
