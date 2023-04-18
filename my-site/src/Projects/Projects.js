import './Projects.css';
import { BsFolderFill } from 'react-icons/bs';
import { useState } from 'react';

function Projects() {
  const Projects = ['Invoice Generator', 'Laredo Land API', 'This Site'];
  const Links = ['https://github.com/gilbertglz/CarShopInvoice', '', ''];
  const [firstIndex, setFirstIndex] = useState(0);
  const [clickIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
    console.log(index);
  };
  const Content = [
    'This is the content for Invoice Generator project.',
    'This is the content for Laredo Land API project.',
    'This is the content for This Site project.',
  ];

  const currentProjects = Projects.slice(firstIndex, firstIndex + 3);
  const ProjectFolders = currentProjects.map((project, index) => (
    <div className="Folder" key={index}>
      <div className='BackArrow'></div>
      <BsFolderFill className="FolderIcon" />
      <span className="FolderText" onClick={()=>handleClick(index)}>{project}</span>
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
      <div className="Content">{Content[clickIndex]}</div>
    </div>
  );
}

export default Projects;
