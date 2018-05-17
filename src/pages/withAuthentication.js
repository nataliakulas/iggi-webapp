import React from 'react';
import {connect} from 'react-redux';

import {firebase} from '../firebase/index';

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        componentDidMount() {

            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.props.onSetAuthUser(authUser)
                    : this.props.onSetAuthUser(null);
            });
        }

        render() {
            return (
                <Component/>
            );
        }
    }

    const mapDispatchToProps = (dispatch) => ({
        onSetAuthUser: (authUser) => dispatch({type: 'AUTH_USER_SET', authUser}),
    });

    return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;