import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { auth } from '../firebase/index';
import {updateByPropertyName} from '../components/Helpers';

const PasswordResetPage = () =>
    <div>
        <h1>Password Forget</h1>
        <PasswordForgetForm />
    </div>

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email } = this.state;

       auth.passwordReset(email)
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
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={this.state.email}
                    onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <Button disabled={isInvalid} type="submit">
                    Reset My Password
                </Button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

const PasswordForgetLink = () =>
    <p>
        <Link to="/pw-forget">Forgot Password?</Link>
    </p>

export default PasswordResetPage;

export {
    PasswordForgetForm,
    PasswordForgetLink,
};