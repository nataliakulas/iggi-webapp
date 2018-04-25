import React from 'react';
import {auth} from '../firebase';

const SignOutButton = () =>
    <button
        type="button"
        onClick={auth.dosignOut}
    >
        Sign Out
    </button>
export default SignOutButton;