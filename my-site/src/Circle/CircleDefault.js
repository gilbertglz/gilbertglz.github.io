import React from "react";
import './CircleDefault.css';

function CircleDefault (props) {
  return (
    <div style={props.parentStyle}>
        <div className={props.className} style={props.style}/>
    </div>
  );
}

export default CircleDefault;
