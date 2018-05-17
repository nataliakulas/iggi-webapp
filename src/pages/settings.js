import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import * as routes from '../shared/routes';

import {authCondition, updateByPropertyName} from '../shared/helpers';
import withAuthorization from '../shared/withAuthorization';
import {passwordUpdate} from '../firebase/auth'

import Button from '../components/Button';


const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {passwordOne} = this.state;

    passwordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          className="input"
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Nowe hasło"
        />
        <input
          className="input"
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Powtórz nowe hasło"
        />
        <ul>
          <li><Link to={routes.STEP_1}>Personalizuj dane produktów</Link></li>
        </ul>
        <div className="card-footer">
          <Button disabled={isInvalid} type="submit">Aktualizuj</Button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const Settings = ({authUser}) =>
  <div className="background settings">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Ustawienia</h2>
              <h3 className="card-subtitle">Dla konta:&nbsp;<span>{authUser.email}</span></h3>
            </div>
            <PasswordUpdateForm/>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>;


const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(Settings);


