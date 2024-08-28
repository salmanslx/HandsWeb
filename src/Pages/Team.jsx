import React, { useState } from 'react';
import './team.css';

const teamData = [
  {
    name: 'Hamid',
    subtitle: 'Chief Operating Officer (COO)',
    description: 'A must-have app for everyone looking to simplify their life.',
    avatar: 'https://img.freepik.com/premium-photo/hyperrealistische-3d-cartoon-personage-rendering-en-animatie_899449-104985.jpg'
  },
  {
    name: 'Abu Saif',
    subtitle: 'Founder & CEO',
    description: 'The app allows you to dull the pain of losing your wife and dog',
    avatar: 'https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg'
  },
  {
    name: 'Faisal',
    subtitle: 'Chief Technology Officer (CTO)',
    description: 'This app has changed the way I manage my daily tasks.',
    avatar: 'https://img.freepik.com/free-photo/view-3d-businessman_23-2150709814.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid'
  },
  {
    name: 'Thowsif',
    subtitle: 'Chief Operating Officer (COO)',
    description: 'A must-have app for everyone looking to simplify their life.',
    avatar: 'https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid'
  },
  {
    name: 'Rabeeh',
    subtitle: 'Chief Operating Officer (COO)',
    description: 'A must-have app for everyone looking to simplify their life.',
    avatar: 'https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136786.jpg'
  },
  {
    name: 'Salman',
    subtitle: 'Chief Operating Officer (COO)',
    description: 'A must-have app for everyone looking to simplify their life.',
    avatar: 'https://img.freepik.com/free-photo/3d-portrait-people_23-2150793852.jpg'
  }
];

function Team() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle card in the center

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < teamData.length - 1 ? prevIndex + 1 : 0));
  };

  const getCardClass = (index) => {
    if (index === activeIndex) return 'cardt-center';
    if (index === (activeIndex + 1) % teamData.length) return 'cardt-right';
    if (index === (activeIndex - 1 + teamData.length) % teamData.length) return 'cardt-left';
    return 'cardt-hidden';
  };

  return (
    <div id='team' className='maintm'>
      <h1 className="team-title fw-bold d-flex justify-content-center mt-5">TEAM</h1>
      <div className="team-container-wrapper">
        <div className="team-container">
          {teamData.map((member, index) => (
              <div
                className={`cardt ${getCardClass(index)}`}
                key={index}
                style={{ backgroundImage: `url(${member.avatar})` ,}}
                onClick={() => setActiveIndex(index)}
              >
                <div className="cardt-header">
                  <div>
                    <h4 className="name">{member.name}</h4>
                    <p className="subtitle">{member.subtitle}</p>
                  </div>
                </div>
                <div className="cardt-body">
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        <button className="control-btn right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Team;