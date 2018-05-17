import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import * as routes from './routes';
import {auth} from '../firebase/config';

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.LOG_IN);
        }
      });
    }

    render() {
      return this.props.authUser ? <Component/> : null;
    }
  }

  return compose(
    connect(mapStateToProps),
    withRouter,
  )(WithAuthorization);
};

export default withAuthorization;