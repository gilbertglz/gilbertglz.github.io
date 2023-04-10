import React from "react";
import './CircleDefault.css';

function CircleDefault (props) {
  return (
    <div style={props.parentStyle}>
        <div className='CircleDefault' style={props.style}/>
    </div>
  );
}

export default CircleDefault;
