import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {authCondition} from '../components/Helpers';
import withAuthorization from './withAuthorization';

class HomePage extends Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>The Home Page is accessible by every signed in user.</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.userState.users,
});

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps)
)(HomePage);
