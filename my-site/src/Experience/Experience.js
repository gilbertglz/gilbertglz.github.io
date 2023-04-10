import './Experience.css';
import ProjectsTable from './ProjectsTables/ProjectsTable.js';
import CircleDefault from '../Circle/CircleDefault';
function Experience() {
  const experienceHeader = <header>Experience</header>;

  return (
    <div className='experiencePage'>
      
        <CircleDefault style={{position:'absolute',width:'15em',height:'15em',backgroundColor: '#80b3a642', zIndex:'0'}}/>
        <CircleDefault style={{margin:'25em 15em',position:'absolute',width:'15em',height:'15em',backgroundColor: '#b0daff60', zIndex:'0',opacity:'.4'}}/>
        <CircleDefault style={{margin:'0 30em',position:'absolute',width:'15em',height:'15em',backgroundColor: '#ffd0b075', zIndex:'0',opacity:'.4'}}/>
      {experienceHeader}
      <div style={{display:'flex', alignItems:'center'}}>
        <ProjectsTable/>
      </div>
    </div>
  );
}
export default Experience;
