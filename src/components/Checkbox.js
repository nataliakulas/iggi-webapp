import React from 'react';
import {Field} from 'redux-form';

export default (props) => {
  return (
    <div className={`checkbox-wrapper${props.type ? " slider" : " tick"}`}>
      <label className="checkbox">
        <Field name={props.name} component="input" type="checkbox"/>
        <span>{props.name}</span>
      </label>
    </div>
  )
}