import React from 'react';
import {connect} from 'react-redux';

import {auth} from '../firebase/config';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {

      auth.onAuthStateChanged(authUser => {
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