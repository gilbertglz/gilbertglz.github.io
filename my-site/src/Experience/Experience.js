import './Experience.css';
import ProjectsTable from './ProjectsTables/ProjectsTable.js';

function Experience() {
  const experienceHeader = <header>Experience</header>;

  return (
    <div className='experiencePage'>
      {experienceHeader}
      <ProjectsTable/>
    </div>
  );
}
export default Experience;
