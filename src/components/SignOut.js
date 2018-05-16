import React from 'react';
import {auth} from '../firebase';
import Button from './Button';

const SignOutButton = () =>
    <Button
        type="button"
        onClick={auth.signOut}
    >
        Sign Out
    </Button>

    // <Button disabled={isInvalid} type="submit">Log In</Button>
export default SignOutButton;