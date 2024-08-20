import React from 'react';
import './about.css';
import image from '../Assets/Frame 4.png';

function About() {
  return (
    <div className="container-ab " id='about'>
      
      <div className="right-section-ab">
        <h1 className="title-ab fw-bold mt-5">About</h1>
        <p className="description-ab">
          Hands App was born out of a simple idea: to create a platform that brings people
          together through acts of kindness and mutual support. <br /> Our journey began with  a shared vision
          of fostering stronger, more connected communities in the UAE, where everyone feels
          empowered to help and be helped.
        </p>
        
        {/* <div className="stats">
          <div className="stat">200,000+<br />Over 200,000 users in 1 day of release</div>
          <div className="stat">25,000+<br />Positive feedback in the first week of release</div>
        </div> */}
      </div>
      <div className="left-section-ab mt-3">
        <img className="image-ab" src={image} alt="App Screenshot" />
      </div>
    </div>
  );
}

export default About;