import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {authCondition} from '../components/Helpers';
import withAuthorization from './withAuthorization';

class Dashboard extends React.Component{

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>The dashboard is accessible by every signed in user.</p>
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
)(Dashboard);
