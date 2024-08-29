import React from 'react';
import './screens.css';
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p2.png';
import p3 from '../Assets/p3.png';
import p4 from '../Assets/p4.png';
import p5 from '../Assets/p5.png';

function Screens() {
  return (
    <div className='mainscrn' id='screens'>
        <h2 className="fw-bold  d-flex justify-content-center mt-5">BEAUTIFUL INTERFACES</h2>
      <div className="slider-container">
        <div className="slider-track">
          <div className="slide">
            <img src={p1} alt="p1" />
          </div>
          <div className="slide">
            <img src={p2} alt="p2" />
          </div>
          <div className="slide">
            <img src={p3} alt="p3" />
          </div>
          <div className="slide">
            <img src={p4} alt="p4" />
          </div>
          <div className="slide">
            <img src={p5} alt="p5" />
          </div>
          {/* Duplicate slides to create infinite looping */}
          <div className="slide">
            <img src={p1} alt="p1" />
          </div>
          <div className="slide">
            <img src={p2} alt="p2" />
          </div>
          <div className="slide">
            <img src={p3} alt="p3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screens;
