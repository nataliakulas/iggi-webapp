import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../components/Button';
import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordReset';
import { auth } from '../firebase/index';
import * as routes from '../constants/routes';
import {updateByPropertyName} from '../components/Helpers';


const SignInPage = ({ history }) =>
    <div>
        <h1>Sign in</h1>
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
    </div>


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.logIn(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.DASHBOARD);
            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={password}
                    onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <Button disabled={isInvalid} type="submit">
                    Sign In
                </Button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};