import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { firebase } from '../firebase/index';
import * as routes from '../constants/routes';



const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
});

const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push(routes.SIGN_IN);
                }
            });
        }

        render() {
            return this.props.authUser ? <Component /> : null;
        }
    }

    return compose(
        connect(mapStateToProps),
        withRouter,
    )(WithAuthorization);
};

export default withAuthorization;