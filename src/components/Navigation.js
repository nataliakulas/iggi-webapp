import React from 'react';
import {Link} from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationUserNonRegister/>
      : <NavigationUserRegister/>
    }
  </AuthUserContext.Consumer>;


const NavigationUserNonRegister = () =>
  <ul className="navigation-bar">
    <li><Link to={routes.SIGN_UP}>Sign up</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton/></li>
  </ul>;


const NavigationUserRegister = () =>
  <ul className="navigation-bar">
    <li><Link to={routes.LANDING}><span>Landing</span></Link></li>
    <li><Link to={routes.SIGN_IN}><span>Sign in</span></Link></li>
  </ul>;


export default Navigation;
