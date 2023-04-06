import React, { useState } from "react";
import { View } from "react-native-web";
import './Circle.css';


function Circles (props) {
  return (
    <div style={{}}>
        {props.negative?<div className="Circle" style={props.style}/>:
        <div className='NegativeCircle' style={props.style}/>}
    </div>
  );
}

export default Circles;
