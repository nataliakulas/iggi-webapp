import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {withRouter, Link} from 'react-router-dom';

import * as routes from '../shared/routes';

import {logIn} from '../firebase/auth';
import {updateByPropertyName} from '../shared/helpers';

import Button from '../components/Button';


const LogInPage = ({history}) =>
  <div className="background log-in">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Logowanie</h2>
            </div>
            <LogInForm history={history}/>
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

class LogInForm extends React.Component {
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
        this.setState(() => ({...INITIAL_STATE}));
        history.push(routes.DASHBOARD);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

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
          type="email"
          placeholder="Adres e-mail"
        />
        <input
          className="input"
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Hasło"
        />
        <ul>
          <li><Link to={routes.RESET}>Nie pamiętam hasła</Link></li>
        </ul>
        <div className="card-footer">
          <Button className="button" disabled={isInvalid} type="submit">Zaloguj</Button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(LogInPage);