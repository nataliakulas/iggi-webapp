import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {updateByPropertyName} from '../shared/helpers';
import {passwordReset} from '../firebase/auth'
import Button from '../components/Button';

const PasswordResetPage = () =>
  <div className="background password-reset">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <h1>Zapomniałeś hasła</h1>
            <PasswordResetForm/>
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
        this.setState(() => ({...INITIAL_STATE}));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

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
        <Button disabled={isInvalid} type="submit">Resetuj hasło</Button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default PasswordResetPage;