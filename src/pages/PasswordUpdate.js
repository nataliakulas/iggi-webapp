import React from 'react';
import {updateByPropertyName} from '../components/Helpers';
import Button from '../components/Button';
import {passwordUpdate} from '../firebase/auth'


const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { passwordOne } = this.state;

        passwordUpdate(passwordOne)
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
                    Update my password
                </Button>

                { error && <p>{error.message}</p> }

            </form>
        );
    }
}

export default PasswordUpdateForm;