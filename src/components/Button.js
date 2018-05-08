import React from 'react';

export default (props) => {
  return (
    <button className="button"
            type={props.type} onClick={props.onClick}>{props.children}</button>
  )
}