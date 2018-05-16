import React, { Component } from 'react';
import { auth } from '../firebase';
import {updateByPropertyName} from './Helpers';
import Button from './Button';


const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { passwordOne } = this.state;

        auth.passwordUpdate(passwordOne)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={passwordOne}
                    onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <Button disabled={isInvalid} type="submit">
                    Reset My Password
                </Button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

export default PasswordChangeForm;