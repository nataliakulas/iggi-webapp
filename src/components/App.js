import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from '../pages/Landing';
import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import PasswordForgetPage from '../pages/PasswordForget';
import HomePage from '../pages/Dashboard';
import AccountPage from '../pages/Account';
import * as routes from '../constants/routes';
import withAuthentication from '../pages/withAuthentication';
import ProfilePage from '../pages/profile/create';

const App = () =>
  <Router>
    <div>
      <Navigation/>
      <hr/>
      <Route exact path={routes.LANDING} component={() => <LandingPage/>}/>
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage/>}/>
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage/>}/>
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage/>}/>
      <Route exact path={routes.HOME} component={() => <HomePage/>}/>
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage/>}/>
      <Route exact path={routes.CREATE} component={() => <ProfilePage/>}/>
    </div>
  </Router>;

export default withAuthentication(App);