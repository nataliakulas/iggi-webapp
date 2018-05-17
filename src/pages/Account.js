import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {authCondition} from '../components/Helpers';
import PasswordUpdateForm from './PasswordUpdate';
import withAuthorization from './withAuthorization';


const AccountPage = ({ authUser }) =>
    <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordUpdateForm />
    </div>

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps)
)(AccountPage);