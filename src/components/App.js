import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

import Settings from '../pages/settings';
import Step1 from '../pages/settings/step-1';
import Step2 from '../pages/settings/step-2';

const App = () =>
  <Router>
    <div className="page">
      <Navigation/>
      <Route exact path={routes.LANDING} component={() => <LandingPage/>}/>
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage/>}/>
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage/>}/>
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage/>}/>
      <Route exact path={routes.HOME} component={() => <HomePage/>}/>
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage/>}/>
      <Route exact path={routes.SETTINGS} component={() => <Settings/>}/>
      <Route exact path={routes.STEP_1} component={() => <Step1/>}/>
      <Route exact path={routes.STEP_2} component={() => <Step2/>}/>
    </div>
  </Router>;

export default withAuthentication(App);