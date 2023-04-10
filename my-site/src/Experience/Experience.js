import './Experience.css';
import ProjectsTable from './ProjectsTables/ProjectsTable.js';
import CircleDefault from '../Circle/CircleDefault';
function Experience() {
  const experienceHeader = <header>Experience</header>;
  const styleOne=
  {
    position:'absolute',
    width:'15em',
    height:'15em',
    backgroundColor: '#80b3a642',
    zIndex:'0',
    animation: 'color-change 3s infinite alternate'
  };
  const styleTwo=
  {
    margin:'25em 15em',
    position:'absolute',
    width:'15em',
    height:'15em',
    backgroundColor: '#b0daff60', 
    zIndex:'0',
    opacity:'.4',
    animation: 'color-changeTwo 3.5s infinite alternate'
  };
  const styleThree=
  {
    margin:'0 30em',
    position:'absolute',
    width:'15em',
    height:'15em',
    backgroundColor: '#ffd0b075',
    zIndex:'0',
    opacity:'.4',
    animation: 'color-changeThree 4s infinite alternate'
  };
  return (
    <div className='experiencePage'>
      
        <CircleDefault style={styleOne}/>
        <CircleDefault style={styleTwo}/>
        <CircleDefault style={styleThree}/>
      {experienceHeader}
      <div style={{display:'flex', alignItems:'center',zIndex:'1'}}>
        <ProjectsTable/>
      </div>
    </div>
  );
}
export default Experience;
