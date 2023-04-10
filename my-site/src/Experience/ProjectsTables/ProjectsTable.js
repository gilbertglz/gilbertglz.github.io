import  './ProjectsTable.css';
import { useState } from 'react';

function ProjectsTable() {
  const jobs = ['Securus Monitoring Solutions','Texas A&M University Libraries','G.U.M.'];
  
  const [indexNum, setIndex] = useState(0);

  const handleClick = (buttonIndex) => {
    setIndex(buttonIndex);
  };

  const jobNav = 
  <nav className='jobNavWrapper'>
    {jobs.map((job, index) => (
      <button key={index} onClick={() => handleClick(index)}>
        <div className={`jobsText${indexNum === index ? 'selected' : ''}`}>
          {job}
        </div>
      </button>
      ))}
  </nav>;

   const einsPar = 
      <div >
        <div className='jobTitle'>
          Software Developer I @ <a href="https://securusmonitoring.com/">Securus Monitoring Solutions</a>
        </div>
        <div className='jobTime'>
          August 2021 - Present
        </div>
        <div className='jobDescription'>
          bullets & paragraph
        </div>
      </div>
   ;

  const paragraphs = [
  einsPar,
  "Zwei",
  "Drei",
];

const paragraph = <div className="jobPara">{paragraphs[indexNum]}</div>;
  return (
    <div className='ProjectsTable' >
      {jobNav}
      {paragraph}
    </div>
  );
}

export default ProjectsTable;
