import React from 'react';
import {Link} from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
    <div>
        <ul>
            <li><Link to={routes.SIGN_IN}>Sign in</Link></li>
            <li><Link to={routes.SIGN_UP}>Sign up</Link></li>
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ACCOUNT}>Account</Link></li>
        </ul>
        <p>Hello World, content is no changing</p>
    </div>


export default Navigation;
