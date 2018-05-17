import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as routes from '../shared/routes';
import {signOut} from '../firebase/auth';

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const Navigation = ({authUser}) =>
  <div className="navigation-wrapper">
    {authUser
      ? <NavigationAuth/>
      : <NavigationNonAuth/>
    }
  </div>;


const NavigationNonAuth = () =>
  <ul className="navigation-bar">
    <li className="landing"><Link to={routes.LANDING}><span>Strona główna</span></Link></li>
    <li className="log-in"><Link to={routes.LOG_IN}><span>Logowanie</span></Link></li>
    <li className="sign-up"><Link to={routes.SIGN_UP}><span>Rejestracja</span></Link></li>
    <li className="info"><Link to={routes.INFO}><span>Informacje</span></Link></li>
  </ul>;


const NavigationAuth = () =>
  <ul className="navigation-bar">
    <li className="landing"><Link to={routes.LANDING}><span>Strona główna</span></Link></li>
    <li className="dashboard"><Link to={routes.DASHBOARD}><span>Pulpit</span></Link></li>
    <li className="settings"><Link to={routes.SETTINGS}>Ustawienia</Link></li>
    <li className="info"><Link to={routes.INFO}><span>Informacje</span></Link></li>
    <li className="log-out"><span onClick={() => signOut()}>Wyjdź</span></li>
  </ul>;

export default connect(mapStateToProps)(Navigation);