import React from 'react';
import './download.css';
import frame5 from '../Assets/ph2.png';

function Download() {
  return (
    <div className="download-container" id='download'>
      <div className='content1'>
        <h1>Download Hands App on iOS  <br />  and Android to start   <br />   connecting and  <br />  helping today.</h1><br />
        <div className="button-container">
          <a className="btn dbtn p-2" href="#">
            <i className="fa-brands fa-apple pe-2 fa-lg"></i>
            App Store
          </a>
          <a className="btn dbtn p-2" href="#">
            <i className="fa-brands fa-google-play pe-2"></i>
            Google Play
          </a>
        </div>
        <div className="image-container">
          <img src={frame5} alt="" />
        </div>

      </div>

    </div>
  );
}

export default Download;