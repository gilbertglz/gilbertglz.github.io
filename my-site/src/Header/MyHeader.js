import React from 'react';
import './MyHeader.css';
import { Link } from 'react-scroll';

function MyHeader(props) {
  const { titles } = props;
  return (
    <nav class="navigation">
        {titles.map((title, index) => (
          <div class="navigationCell">
            <Link to={title} smooth={true}><a key={index}>{title}</a></Link>
          </div>
        ))}
    </nav>
  );
}

export default MyHeader;
