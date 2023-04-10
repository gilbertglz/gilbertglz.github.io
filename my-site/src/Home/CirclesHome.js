import React from "react";
import Circles from "./Circle";
import './CirclesHome.css'


function CirclesHome () {
  return (
    <div className='CirclesWrapper' style={{margin:'0%', display:"flex",justifyContent:'center', alignItems:'center', width:'100%', position:'absolute'}}>
        <Circles   negative={true} style={{backgroundColor:'#EFEFEF',opacity:'.3',borderRadius:"50%",width:'35em', height:'35em'}}/>
        <Circles   negative={false} style={{backgroundColor:'#E8AA42',opacity:'.4', borderRadius:"50%",width:'35em', height:'35em'}}/>
    </div>
  );
}

export default CirclesHome;
