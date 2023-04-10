import  './ProjectsTable.css';
import { useState } from 'react';
import { TbArrowLoopRight } from 'react-icons/tb';
import myJson from './ProjectTable.json';

function ProjectsTable() {
  const jobs = ['Securus Monitoring Solutions','Texas A&M University Libraries','G.U.M.'];
  const position = ['Software Developer I','Student Asst.','After-School Prog. Asst.'];
  const time = ['Aug. 2021 - Present','Sept. 2017 - May 2021','Sept. 2017 - Dec. 2018'];
  const desc = [myJson.securus,[],[]];
  const links =['https://securusmonitoring.com/','https://library.tamu.edu/','https://www.galvestonurbanministries.org/'];
  
  const [indexNum, setIndex] = useState(0);

  const handleClick = (buttonIndex) => {
    setIndex(buttonIndex);
  };

  const jobNav = 
  <nav className='jobNavWrapper'>
    {jobs.map((job, index) => (
      <button key={index} style= {{backgroundColor:'transparent'}}onClick={() => handleClick(index)}>
        <div className={`jobsText${indexNum === index ? 'selected' : ''}`}>
          {job}
        </div>
      </button>
      ))}
  </nav>;
  
  const jobName = jobs.map((job, index) => {
    return (
      <div key={index}>
        <div className='jobTitle'>
          {position[index]} @ <a href={links[index]}>{job}</a>
        </div>
        <div className='jobTime'>
          {time[index]}
        </div>
          {desc[index].map((bullet, bulletIndex) => (
            <div className="bulletList" key ={bulletIndex} style={{flexDirection:'row', display:'flex'}}>
                <div><TbArrowLoopRight/></div>
                {bullet}
            </div>
          ))}
      </div>
    );
  });

const paragraph = <div className="jobPara">{jobName[indexNum]}</div>;
  return (
    <div className='ProjectsTable' >
      {jobNav}
      {paragraph}
    </div>
  );
}

export default ProjectsTable;
