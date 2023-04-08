import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-scroll';
import Photo from "../Assets/ic_launcher.png";
function MyHeader(props) {
  const { titles } = props;
  const NavLogo = 
  <div style ={{display:"flex", maxWidth:'5em'}}>
    <img src={Photo} alt = "LogoG" style={{maxWidth:'100%', maxHeight:'100%'}}/>
  </div>;
  const NavCells = 
  <div style= {{display:"flex", justifyContent:'flex-end'}}>
      {titles.map((title, index) => (
          <div className="navigationCell" style={{alignItems:"center"}}>
            <Link to={title} smooth={true}><a href={title+".js"} key={index}>{title}</a></Link>
          </div>
        ))}
  </div>;

  return (
    <div className='Bar'>
      {NavLogo}
      <nav className="navigation">
        {NavCells}
      </nav>
    </div>
  );
}

export default MyHeader;
