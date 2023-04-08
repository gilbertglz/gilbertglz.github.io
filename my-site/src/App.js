import './App.css';
import { Element } from 'react-scroll';
import Home from './Home/Home.js';
import AboutMe from './AboutMe/AboutMe';
import Experience from './Experience/Experience.js';
import Links from './Links/Links.js';
import Contact from './Contact/Contact.js';
import React, { useEffect } from 'react';
import BackToUp from '@uiw/react-back-to-top';
import { BsArrowUpCircleFill } from 'react-icons/bs';

function App () {
  useEffect(() => {
    const delay = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(delay);
  }, []);

  
  return (
    <div className="App">
      { <BackToUp size={60}>
          <BsArrowUpCircleFill size={35}/>
        </BackToUp>
      }
      
      {
        <Element name="home">
          <Home />
        </Element>
      }

      <Element name="about me">
        <AboutMe />
      </Element>

      <Element name="experience">
        <Experience/>
      </Element>

      <Element name="links">
        <Links />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
