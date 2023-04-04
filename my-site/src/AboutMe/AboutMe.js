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

  return (
    <div className="AboutMe">
      <div className="aboutMeHeaderContainer">
        <div className="aboutMeWords">
          <header className="aboutMeHeader">About Me</header>
          <p className="parOne">
            Hi, I'm Gilbert, a software developer with a passion for automation,
            machine learning, and UI design. I'm committed to delivering
            high-quality software that meets user needs and exceeds
            expectations.
          </p>
          <p className="parOne">
            With a background in customer service, I bring a unique perspective
            to software development that prioritizes user feedback and
            continuous improvement. Check out my portfolio to see some of my
            recent projects and accomplishments.
          </p>
        </div>
        <div className="aboutMeImage">
          <div className="imageContainer">
            <img className="myImage" src={Photo} alt="Profile" />
          </div>
        </div>
      </div>

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
  );
}

export default AboutMe;
