import React from "react";

import './Circle.css';


function Circles (props) {
  // const animationName;
  return (
    <div style={{}}>
      {props.negative?<div className="Circle" style={props.style}/>:
        <div className='NegativeCircle' style={props.style}/>}
    </div>
  );
}

export default Circles;
