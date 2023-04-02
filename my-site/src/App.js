import './App.css';
import MyHeader from './Header/MyHeader';
import { Element } from 'react-scroll';
import Home from './Home/Home.js';


function App() {
  return (
    <div className="App">
      <MyHeader titles={['contact','links','projects','about me', 'home']}/>
      <header className="App-header">
      <Element name="home">
        <Home />
      </Element>
      <Element name="about me">
        <Home />
      </Element>
      <Element name="projects">
        <Home />
      </Element>
      <Element name="links">
        <Home />
      </Element>
      <Element name="contact">
        <Home />
      </Element>
      </header>
    </div>
  );
}

export default App;
