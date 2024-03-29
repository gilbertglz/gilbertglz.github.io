import CirclesHome from './CirclesHome';
import './Home.css';
import React from "react";


function Home () {

  return (
    <div className="">
      <CirclesHome />
      <div className='Home'>
      <div className='headerContainer'>
          <div className="headers">
            <header className="myName">
              I'm Gilbert
            </header>
            <p className="myTitle">Software Developer</p>
          </div>
      </div>
      <div className="myDetail">
          <p >I am passionate about building software solutions that automate tasks and make people's lives and jobs easier. 
          I believe in the power of technology to simplify complex processes and enable individuals and organizations to be more efficient - power to the people!</p>
      </div>
      </div>
    </div>
  );
}

export default Home;
