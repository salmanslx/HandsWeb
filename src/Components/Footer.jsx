import React, { useState } from 'react';
import './footer.css';
import logo from '../Assets/logo (1).png';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>
        <div className='line'></div>
        <div className="right-section">
          <div className="menu">
            <h4 className="menu-title">Menu</h4>
            <ul className="menu-list">
              <li className="menu-item">Home</li>
              <li className="menu-item">About</li>
              <li className="menu-item">Features </li>
              <li className="menu-item">Team</li>
              <li className="menu-item">Career</li>
              <li className="menu-item">Contact</li>
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
              1700 W Blancke St, Kiev<br />
              Port South USA, America
            </p>
            <p className="address">
              +3255 456 789<br />
              info@handsappuae.com
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
        Copyright © HANDSAPPUAE
      </div>

      <Modals show={showModal} handleClose={handleCloseModal} modalType={modalType} />
    </footer>
  );
};

export default Footer;
