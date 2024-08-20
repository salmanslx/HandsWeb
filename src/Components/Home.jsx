import React from 'react';
import './home.css';


import scrns from '../Assets/scrns.png'
import About from '../Pages/About';
import Feature from '../Pages/Feature';
import Team from '../Pages/Team';
import Built from '../Pages/Built';
import Download from '../Pages/Download';
import Footer from './Footer';
import Header from './Header';
import Screens from '../Pages/Screens';


function Home() {
  return (
    <>
      <Header/>
      <div className='home-container'>
      
        <h1 >The Hands app for Helps</h1>
        <p>
          To empower individuals within the UAE community by facilitating
          connections, fostering mutual support, and promoting a culture of kindness and collaboration
          through our innovative platform.
        </p>
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
        <div className='imgcon'>
         <img  src={scrns} alt="" />
        </div>
       
      </div>
       <About/>
       <Feature/>
       <Team/>
       <Built/>
       <Screens/>
       <Download/>
       <Footer/>
       
    </>
  );
}

export default Home;
