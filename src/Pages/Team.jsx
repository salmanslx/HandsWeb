import React from 'react';
import './team.css';

const teamData = [
  {
    name: 'Abu Saif',
    subtitle: 'Founder & CEO',
    description: 'The app allows you to dull the pain of losing your wife and dog',
    avatar: 'https://via.placeholder.com/40'
  },
  {
    name: 'Faisal',
    subtitle: 'Chief Technology Officer (CTO)',
    description: 'This app has changed the way I manage my daily tasks.',
    avatar: 'https://via.placeholder.com/40'
  },
  {
    name: 'Hamid',
    subtitle: 'Chief Operating Officer (COO)',
    description: 'A must-have app for everyone looking to simplify their life.',
    avatar: 'https://via.placeholder.com/40'
  }
];

function Team() {
  return (
    <div id='team'>
      <h3 className="team-title fw-bold"> Team</h3>
      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="cardt" key={index}>
            <div className="cardt-header">
              <img
                src={member.avatar}
                alt="User Avatar"
                className="avatar"
              />
              <div>
                <h4 className="name">{member.name}</h4>
                <p className="subtitle">{member.subtitle}</p>
              </div>
            </div>
            <div className="cardt-body">
              <p>{member.description}</p>
            </div>
            <div className="cardt-footer">
              <p>{member.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
