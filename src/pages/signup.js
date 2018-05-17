import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import {registerUser} from '../firebase/auth';
import {createUser} from '../firebase/db';

import * as routes from '../shared/routes';
import {updateByPropertyName} from '../shared/helpers';

import Button from '../components/Button';


const SignUpPage = ({history}) =>
  <div className="background sign-up">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Rejestracja</h2>
            </div>
            <SignUpForm history={history}/>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>;

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    registerUser(email, passwordOne)
      .then(authUser => {
        createUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({...INITIAL_STATE}));
            history.push(routes.DASHBOARD);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          className="input"
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="Imię i nazwisko"
        />
        <input
          className="input"
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="email"
          placeholder="Adres e-mail"
        />
        <input
          className="input"
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Hasło"
        />
        <input
          className="input"
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Powtórz hasło"
        />
        <div className="card-footer">
          <Button className="button" disabled={isInvalid} type="submit">Zarejestruj</Button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignUpPage);
