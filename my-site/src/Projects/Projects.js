import './Projects.css';
import { BsFolderFill } from 'react-icons/bs';
import { useState } from 'react';

function Projects() {
  const Projects = ['Car Shop Invoice', 'Project2', 'Project 3'];
  const Links = ['https://github.com/gilbertglz/CarShopInvoice', '', ''];
  const [firstIndex, setFirstIndex] = useState(0);

  const currentProjects = Projects.slice(firstIndex, firstIndex + 3);
  const ProjectFolders = currentProjects.map((project, index) => (
    <div className="Folder" key={index}>
      <div className='BackArrow'></div>
      <a href={Links[index]}><BsFolderFill className="FolderIcon" /></a>
      <span className="FolderText" ><a href={Links[index]}>{project}</a></span>
      <div className='ForwardArrow'></div>
    </div>
  ));

  const handlePrevClick = () => {
    if (firstIndex > 0) {
      setFirstIndex(firstIndex - 3);
    }
  };

  const handleNextClick = () => {
    if (firstIndex + 3 < Projects.length) {
      setFirstIndex(firstIndex + 3);
    }
  };

  return (
    <div className='ProjectsWrap' >
      
      <div className='titleHeader'>Projects</div>
      <div className="ProjectsBack">
        <div className="ButtonWrapper">
          <button className="PrevButton" onClick={handlePrevClick} disabled={firstIndex === 0}>&lt;</button>
          <div className="IconWrapper">{ProjectFolders}</div>
          <button className="NextButton" onClick={handleNextClick} disabled={firstIndex + 3 >= Projects.length}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
