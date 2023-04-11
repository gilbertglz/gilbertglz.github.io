import React from "react";
import Circles from "./Circle";
import './CirclesHome.css'


function CirclesHome () {
  return (
    <div className='CirclesWrapper' style={{margin:'0%', display:"flex",justifyContent:'center', alignItems:'center', width:'100%', position:'absolute'}}>
        <Circles   negative={true} style={{backgroundColor:'#EFEFEF',opacity:'.3',borderRadius:"50%"}}/>
        <Circles   negative={false} style={{backgroundColor:'#E8AA42',opacity:'.4', borderRadius:"50%"}}/>
    </div>
  );
}

export default CirclesHome;
