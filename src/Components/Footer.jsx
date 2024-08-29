import React, { useState } from 'react';
import './footer.css';
import logo from '../Assets/logo (1).png';
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaTiktok, FaSnapchat, } from 'react-icons/fa';
import Modals from '../Pages/Modals';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [email, setEmail] = useState('');

  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the email to the server
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="left-section-ft">
          <div className='d-flex'>
            <img src={logo} alt="Logo" />
            <h2 className="title-ft">HANDS APP</h2>
          </div>
          <p className="description-ft">
            Hands App was born out of a simple idea: to create a platform that brings people
            together through acts of kindness and mutual support. <br /> Our journey began with a shared vision
            of fostering stronger, more connected communities in the UAE, where everyone feels
            empowered to help and be helped.
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/handsappuae?igsh=Y3lxaW1sYjV1cXc3" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559767691065" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://x.com/handsappuae?s=11" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="icon" />
            </a>
            <a href="https://www.tiktok.com/@handsappuae?lang=en" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="icon" />
            </a>
            <a href="https://www.snapchat.com/add/handsappuae" target="_blank" rel="noopener noreferrer">
              <FaSnapchat className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/hands-app-00ab8730a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
        <div className='line'></div>
        <div className="right-section">
          <div className="menu">
            <h4 className="menu-title">Menu</h4>
            <ul className="menu-list">
              <a href='#'><li className="menu-item" >Home</li></a>
              <a href='#about'><li className="menu-item">About</li></a>
              <a href='#features'><li className="menu-item">Features </li></a>
              <a href='#team'><li className="menu-item">Team</li></a>
              <a href='#screens'><li className="menu-item">Screens</li></a>
              <a href='#testimonial'><li className="menu-item">Testimonial</li></a>
              <a href='#built'><li className="menu-item">Career</li></a>
              <a href='#contact'><li className="menu-item">Contact</li></a>
            </ul>
          </div>
          <div className="utility-pages">
            <h4 className="menu-title">Utility pages</h4>
            <ul className="menu-list">
              <li className="menu-item" onClick={() => handleShowModal('terms')}>Terms & Condition</li>
              <li className="menu-item" onClick={() => handleShowModal('privacy')}>Privacy Policy</li>
              <li className="menu-item" onClick={() => handleShowModal('howToUse')}>Terms of Use</li>
              <li className="menu-item" onClick={() => handleShowModal('faq')}>FAQ</li>
            </ul>
          </div>
          <div className="address-section">
            <h4 className="menu-title">Address</h4>
            <p className="address">
            Gate Tower 2, 156,<br />
            Rabat street, Abu Dhabi
            </p>
            <p className="address">
              +3255 456 789<br />
              <a href="mailto:info@handsappuae.com" className="text-light">info@handsappuae.com</a>
              </p>
            {/* Email Subscription Form */}
            <form onSubmit={handleEmailSubmit} className="email-form">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="email-input"
                required
              />
              <button type="submit" className="email-submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © HANDSAPPUAE 2024
      </div>

      <Modals show={showModal} handleClose={handleCloseModal} modalType={modalType} />
    </footer>
  );
};

export default Footer;
