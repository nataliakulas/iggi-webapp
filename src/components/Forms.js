import React from 'react';
import {reduxForm} from 'redux-form';


let GroupsForm = props => {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>{props.children}</form>
  )
};

GroupsForm = reduxForm({
  form: 'userGroups'
})(GroupsForm);


let ProductsForm = props => {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>{props.children}</form>
  )
};

ProductsForm = reduxForm({
  form: 'userProducts'
})(ProductsForm);

export {GroupsForm, ProductsForm}

