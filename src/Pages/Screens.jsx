import React, { useEffect, useState } from 'react';
import './screens.css';
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p2.jpg';
import p3 from '../Assets/p3.png';
import p4 from '../Assets/p4.png';
import p5 from '../Assets/p5.png';

const ScrnData = [
  { phn: p1 },
  { phn: p2 },
  { phn: p3 },
  { phn: p4 },
  { phn: p5 },
];

function Screens() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first image

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % ScrnData.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const container = document.querySelector('.scrn-container');
    if (container) {
      const offset = (activeIndex / ScrnData.length) * 1 ;
      container.style.transform = `translateX(-${offset}%)`;
    }
  }, [activeIndex]);

  

  return (
    <div id='screens' className='mainscrn'>
      <h1 className="scrn-title fw-bold d-flex justify-content-center mt-5">App Interfaces</h1>
      <div className="scrn-container-wrapper">
        <div className="scrn-container">
          {ScrnData.map((item, index) => (
            <div
              className='cards'
              key={index}
              style={{ backgroundImage: `url(${item.phn})` }}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Screens;
