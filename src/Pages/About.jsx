import React from 'react';
import './about.css';
import image from '../Assets/p1.png';

function About() {
  return (
    <div className="container-ab " id='about'>
      
      <div className="right-section-ab">
        <h1 className="title-ab fw-bold mt-5">ABOUT</h1>
        <p className="description-ab">
          Hands App was born out of a simple idea: to create a platform that brings people
          together through acts of kindness and mutual support. <br /> Our journey began with  a shared vision
          of fostering stronger, more connected communities in the UAE, where everyone feels
          empowered to help and be helped.
        </p>
        
        <div className="stats">
          <div className="stat"><h5>MISSION</h5><br />To empower individuals within the UAE community by facilitating connections, fostering mutual support, and promoting a culture of kindness and collaboration through our innovative platform.</div>
          <div className="stat"><h5>VISION</h5><br />To create thriving, interconnected communities across the UAE where every individual feels empowered to offer help, seek assistance, and contribute positively to the well-being and growth of their neighborhood.</div>
        </div>
      </div>
      <div className="left-section-ab mt-3">
        <img className="image-ab" src={image} alt="App Screenshot" />
      </div>
    </div>
  );
}

export default About;