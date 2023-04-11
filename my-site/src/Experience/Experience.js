import './Experience.css';
import ProjectsTable from './ProjectsTables/ProjectsTable.js';
import CircleDefault from '../Circle/CircleDefault';
function Experience() {
  const experienceHeader = <header>Experience</header>;

  return (
    <div className='experiencePage'>
      
        <CircleDefault className ="styleOne"/>
        <CircleDefault className ="styleTwo"/>
        <CircleDefault className ="styleThree"/>
      {experienceHeader}
      <div style={{display:'flex', alignItems:'center',zIndex:'1'}}>
        <ProjectsTable/>
      </div>
    </div>
  );
}
export default Experience;
