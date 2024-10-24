import React, { useEffect } from 'react';
import logo from '../Assets/logo (2).png'; // Adjust the path as necessary
import './preloader.css'

const Preloader = () => {
    useEffect(() => {
      const handleLoad = () => {
        // Set a delay before removing the preloader
        setTimeout(() => {
          document.body.classList.add('loaded');
        }, 100); // Change 5000 to your desired time in milliseconds (5 seconds)
      };
  
      window.addEventListener('load', handleLoad);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);

  return (
    <div id="preloader">
      <img src={logo} alt="Loading..." />
    </div>
  );
};

export default Preloader;
