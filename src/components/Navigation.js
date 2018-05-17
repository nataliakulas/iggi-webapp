import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';
import {auth} from '../firebase';

const Navigation = ({ authUser }) =>
    <div>
        { authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>


const NavigationUserNonRegister = () =>
  <ul className="navigation-bar">
    <li className="landing"><Link to={routes.LANDING}><span>Strona główna</span></Link></li>
    <li className="log-in"><Link to={routes.SIGN_IN}><span>Logowanie</span></Link></li>
    <li className="sign-up"><Link to={routes.SIGN_UP}><span>Rejestracja</span></Link></li>
    <li className="info"><Link to={routes.INFO}><span>Informacje</span></Link></li>
  </ul>;


const NavigationUserRegister = () =>
  <ul className="navigation-bar">
    <li className="landing"><Link to={routes.LANDING}><span>Strona główna</span></Link></li>
    <li className="dashboard"><Link to={routes.DASHBOARD}><span>Panel główny</span></Link></li>
    <li className="settings"><Link to={routes.SETTINGS}>Ustawienia</Link></li>
    <li className="info"><Link to={routes.INFO}><span>Informacje</span></Link></li>
    <li className="log-out"><span onClick={() => auth.doSignOut()}>Wyjdź</span></li>
  </ul>;

export default connect(mapStateToProps)(Navigation);