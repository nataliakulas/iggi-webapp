import React from 'react';

export default (props) => {
  return (
    <div key={props.index} className="checkbox-wrapper">
      <label className="checkbox" htmlFor={props.name}>
        <input type="checkbox" name={props.name} checked={props.checked} onClick={props.onClick} value={props.name}/>{props.name}
      </label>
    </div>
  )
}