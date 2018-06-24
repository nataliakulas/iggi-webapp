import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as routes from '../shared/routes';

import withAuthentication from '../shared/withAuthentication';

import LandingPage from '../pages/landing';
import SignUpPage from '../pages/signup';
import LogInPage from '../pages/login';
import ResetPage from '../pages/reset';
import Dashboard from '../pages/dashboard';
import Settings from '../pages/settings';
import Step1 from '../pages/settings/step-1';
import Step2 from '../pages/settings/step-2';
import Info from '../pages/info';
import Page404 from '../pages/page404';

import Navigation from './Navigation';

const App = () =>
    <Router>
        <div className="page">
            <Navigation/>
            <Switch>
                <Route exact path={routes.LANDING} component={() => <LandingPage/>}/>
                <Route exact path={routes.SIGN_UP} component={() => <SignUpPage/>}/>
                <Route exact path={routes.LOG_IN} component={() => <LogInPage/>}/>
                <Route exact path={routes.RESET} component={() => <ResetPage/>}/>
                <Route exact path={routes.DASHBOARD} component={() => <Dashboard/>}/>
                <Route exact path={routes.SETTINGS} component={() => <Settings/>}/>
                <Route exact path={routes.STEP_1} component={() => <Step1/>}/>
                <Route exact path={routes.STEP_2} component={() => <Step2/>}/>
                <Route exact path={routes.INFO} component={() => <Info/>}/>
                <Route exact path={routes.PAGE404} component={() => <Page404/>}/>
            </Switch>
        </div>
    </Router>;

export default withAuthentication(App);