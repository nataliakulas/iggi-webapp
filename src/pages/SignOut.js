import React from 'react';
import {auth} from '../firebase/index';
import Button from '../components/Button';

const SignOutButton = () =>
    <Button
        type="button"
        onClick={auth.signOut}
    >
        Sign Out
    </Button>

export default SignOutButton;