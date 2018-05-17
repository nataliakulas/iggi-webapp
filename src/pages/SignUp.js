import React from 'react';
import {Link,
withRouter,
} from 'react-router-dom';
import {db} from '../firebase/index';
import Button from '../components/Button';
import * as routes from '../constants/routes';
import {updateByPropertyName} from '../components/Helpers';
import {registerUser} from '../firebase/auth';



const SignUpPage = ({ history }) =>
    <div>
        <h1>SignUp</h1>
        <SignUpForm history={history} />
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        registerUser(email, passwordOne)
            .then(authUser => {

                db.createUser(authUser.uid, username, email)
                    .then(() => {
                        this.setState(() => ({ ...INITIAL_STATE }));
                        history.push(routes.DASHBOARD);
                    })
                    .catch(error => {
                        this.setState(updateByPropertyName('error', error));
                    });

            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            username === '' ||
            email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={username}
                    onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
                <Button disabled={isInvalid} type="submit">
                    Sign up
                </Button>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
export default withRouter(SignUpPage);
export {
    SignUpForm,
    SignUpLink,
};