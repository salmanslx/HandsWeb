import React from 'react';
import './feature.css';
import f1 from '../Assets/f1.png';
import f2 from '../Assets/f2.png';
import f3 from '../Assets/f3.png';
import f4 from '../Assets/f4.png';
import f5 from '../Assets/f5.png';
import f6 from '../Assets/f6.png';
import f7 from '../Assets/f7.png';
import f8 from '../Assets/f8.png';
import f9 from '../Assets/f9.png';


const featuresData = [
  {
    title: 'Mission',
    description: 'To empower individuals within the UAE community by facilitating connections, fostering mutual support, and promoting a culture of kindness and collaboration through our innovative platform.',
    imgSrc: f1
  },
  {
    title: 'Vision ',
    description: 'To create thriving, interconnected communities across the UAE where every individual feels empowered to offer help, seek assistance, and contribute positively to the well-being and growth of their neighborhood.',
    imgSrc: f2
  },
  {
    title: 'Request Assistance',
    description: 'Users can post requests for various types of help, such as running errands,household tasks, transportation, and more.Requests are visible to nearby users who can respond and offer their support.',
    imgSrc: f3
  },
  {
    title: 'Offer Help',
    description: 'Users can offer their skills, time, and resources to assist others in their community.Browse through open requests and choose opportunities that match your abilities and availability.',
    imgSrc: f4
  },
  {
    title: 'Volunteer Opportunities',
    description: 'Discover local volunteer events and initiatives organized by community groups and organizations.Connect with causes that matter to you and contribute to making a positive impact',
    imgSrc: f5
  },
  {
    title: 'Secure Messaging',
    description: "Communicate directly with other users through the app's secure messaging features. Coordinate details and arrangements for assistance and volunteering.",
    imgSrc: f6
  },
  {
    title: 'Resource Sharing',
    description: "Share and borrow items like tools, books, and other household goods with your neighbors. Reduce waste and promote sustainability through community sharing.",
    imgSrc: f7
  },
  {
    title: 'Community Events',
    description: "Stay informed about local events, gatherings, and activities happening in your area. Participate in community-building events to meet new people and strengthen local ties.",
    imgSrc: f8
  },
  {
    title: 'User Profiles and Reviews',
    description: "Create a personalized profile to showcase your skills and interests. Leave and receive reviews based on interactions, building trust within the community.",
    imgSrc: f9
  }
];

function Feature() {
  return (
    <div id='features'>
      <h1 className="features-title fw-bold text-white">Features</h1>
      <div className="card1">
        {featuresData.map((feature, index) => (
          <div className="card" key={index}>
            <div className="circle1">
              <img  src={feature.imgSrc} alt="Icon" />
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
