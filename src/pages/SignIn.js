import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import {SignUpLink} from './SignUp';
import {PasswordForgetLink} from './PasswordForget';
import {auth} from '../firebase';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../components/Button';
import { SignUpLink } from './SignUp';
import { PasswordResetLink } from './PasswordReset';
import {logIn} from '../firebase/auth';
import * as routes from '../constants/routes';
import {updateByPropertyName} from '../components/Helpers';


const SignInPage = ({history}) =>
  <div className="background log-in">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Sign In</h2>
            </div>
            <SignInForm history={history}/>
            {/*<PasswordForgetLink/>*/}
            {/*<SignUpLink/>*/}
          </div>
        </Col>
      </Row>
    </Grid>
  </div>;


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

        logIn(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.DASHBOARD);
            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          className="input"
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="input"
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <div className="card-footer">
          <button className="button" disabled={isInvalid} type="submit">
            Sign In
          </button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};