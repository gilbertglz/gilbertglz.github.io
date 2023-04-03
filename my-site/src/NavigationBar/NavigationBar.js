import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-scroll';

function MyHeader(props) {
  const { titles } = props;
  return (
    <nav className="navigation">
        {titles.map((title, index) => (
          <div className="navigationCell">
            <Link to={title} smooth={true}><a href={title+".js"} key={index}>{title}</a></Link>
          </div>
        ))}
    </nav>
  );
}

export default MyHeader;
