import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import {updateByPropertyName} from '../components/Helpers';
import {passwordReset} from '../firebase/auth'

import {auth} from '../firebase';

const PasswordForgetPage = () =>
  <div className="background password-forget">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <h1>PasswordForget</h1>
            <PasswordForgetForm/>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>;

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordResetForm extends React.Component {
    constructor(props) {
        super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {email} = this.state;

       passwordReset(email)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordResetLink = () =>
    <p>
        <Link to="/pw-reset">Forgot Password?</Link>
    </p>

export default PasswordResetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
    PasswordResetForm,
    PasswordResetLink,
};