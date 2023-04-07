// AboutMe.js
import './AboutMe.css';
import Photo from '../Assets/DSC01230.JPG';
import { TbArrowLoopRight } from 'react-icons/tb';

function AboutMe() {
  const contactList = [
    { icon: <TbArrowLoopRight />, text: 'PHP' },
    { icon: <TbArrowLoopRight />, text: 'React/Native/TypeScript' },
    { icon: <TbArrowLoopRight />, text: 'C#/C++' },
    { icon: <TbArrowLoopRight />, text: 'Javascript' },
    { icon: <TbArrowLoopRight />, text: 'Perl' },
    { icon: <TbArrowLoopRight />, text: 'Python' },
  ];
  const firstParagraph = <p className="" style={{fontSize:'20px', wordWrap:'break-word'}}>
      Hi, I'm Gilbert, a software developer with a passion for automation,
      machine learning, and UI design. I'm committed to delivering
      high-quality software that meets user needs and exceeds
      expectations.With a background in customer service, 
      I bring a unique perspective to software development 
      that prioritizes user feedback and continuous improvement. </p>;
  const secondParagraph =
  <p style={{fontSize:'20px', wordWrap:'break-word'}}>
    My experience working at my university library helped me develop excellent communication and problem-solving skills, 
    which have proven valuable in my work as a software developer. As an after-school program teacher, 
    I honed my ability to explain complex ideas in a way that is accessible to all learners, 
    which has helped me in designing user-friendly interfaces for software applications.
  </p>;

  return (
    
    <div className="AboutMe">
      <div className='wrapp'></div>
      <header className="aboutMeHeader">About Me</header>
      <div class="gridWrap" style={{display:'grid'}}>
        <div className="aboutMeHeaderContainer" >
          {firstParagraph} 
          {secondParagraph}
        </div>  
        
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr', overflow:'visible'}}>
        <div style={{position:'relative'}}>
        <p className="parTwo">Here is some of the tech I've been using recently:</p>
          <div className="listContainer">
            {contactList.map(({ icon, text }, index) => (
              <div className="listLang" key={index}>
                <div className="listIcon">{icon}</div>
                <div className="listText">{text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="imageContainer" style={{maxWidth: '100%', maxHeight:'100%'}}>
                  <img className="myImage" src={Photo} alt="Profile" />
          </div>
      </div>
    </div>
  );
}

export default AboutMe;
