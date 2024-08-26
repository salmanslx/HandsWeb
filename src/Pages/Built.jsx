import React from 'react';

import logo from '../Assets/logo (1).png';
import './built.css';

function Built() {
  return (
    <div id='built'>
      <h3 className="built-title fw-bold">BUILD CAREER WITH HANDS</h3>
      <div className='maindiv'>
        <div className='leftside'>
          <h2>Wanna Join Our Team ?</h2>
         
          <p>We’re looking for dedicated and innovative minds to join us on this journey. If you’re driven by purpose and want to make a difference, HANDS is the place for you.😉</p>
          <div className="d-flex ">
            <a className="btn  dbtn p-2" href="/career">
            Know More...
            </a>
            
          </div>
        </div>
        <div className='rightside'>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Built;
