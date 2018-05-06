import React from 'react';

export default (props) => {
  return (
    <div key={props.index} className={`checkbox-wrapper${props.type ? " slider" : ""}`}>
      <label className="checkbox">
        <input type="checkbox" checked={props.checked} onClick={props.onClick} value={props.name}/><span>{props.name}</span>
      </label>
    </div>
  )
}