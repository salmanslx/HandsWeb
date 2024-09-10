import React, { useState } from 'react';
import './footer.css';
import logo from '../Assets/logo (1).png';
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaTiktok, FaSnapchat } from 'react-icons/fa';
import Modals from '../Pages/Modals';
import { useLanguage } from '../Components/LanguageContext';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [email, setEmail] = useState('');
  const { language } = useLanguage();

  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className={`footer ${language === 'ar' ? 'rtl' : ''}`} id='footer'>
      <div className="footer-content">
        <div className="left-section-ft">
          <div className='d-flex'>
            <img src={logo} alt="Logo" />
            <h2 className="title-ft">{language == 'ar' ? (
              <>
              تطبيق الأيدي
              </>
             
            ):(<>HANDS APP</>)}</h2>
          </div>
          <p className="description-ft">
            {language === 'ar' ? (
              <>
                تم إنشاء تطبيق الأيدي من فكرة بسيطة: إنشاء منصة تجمع الناس من خلال أعمال الخير والدعم المتبادل. <br />
                بدأت رحلتنا برؤية مشتركة لتعزيز مجتمعات أقوى وأكثر ترابطًا في الإمارات العربية المتحدة، حيث يشعر الجميع
                بالتمكين لمساعدة الآخرين وتلقي المساعدة.
              </>
            ) : (
              <>
                Hands App was born out of a simple idea: to create a platform that brings people together through acts of kindness and mutual support. <br />
                Our journey began with a shared vision of fostering stronger, more connected communities in the UAE, where everyone feels empowered to help and be helped.
              </>
            )}
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
            <h4 className="menu-title">{language === 'ar' ? 'القائمة' : 'Menu'}</h4>
            <ul className="menu-list">
              <a href='#'><li className="menu-item">{language === 'ar' ? 'الرئيسية' : 'Home'}</li></a>
              <a href='#about'><li className="menu-item">{language === 'ar' ? 'حول' : 'About'}</li></a>
              <a href='#features'><li className="menu-item">{language === 'ar' ? 'الميزات' : 'Features'}</li></a>
              {/* <a href='#team'><li className="menu-item">{language === 'ar' ? 'الفريق' : 'Team'}</li></a> */}
              <a href='#screens'><li className="menu-item">{language === 'ar' ? 'الشاشات' : 'Screens'}</li></a>
              <a href='#testimonial'><li className="menu-item">{language === 'ar' ? 'التوصيات' : 'Testimonial'}</li></a>
              <a href='#built'><li className="menu-item">{language === 'ar' ? 'المهنة' : 'Career'}</li></a>
              <a href='#contact'><li className="menu-item">{language === 'ar' ? 'اتصل بنا' : 'Contact'}</li></a>
            </ul>
          </div>
          <div className="utility-pages">
            <h4 className="menu-title">{language === 'ar' ? 'الصفحات الفرعية' : 'Utility pages'}</h4>
            <ul className="menu-list">
              <li className="menu-item" onClick={() => handleShowModal('terms')}>{language === 'ar' ? 'الشروط والأحكام' : 'Terms & Condition'}</li>
              <li className="menu-item" onClick={() => handleShowModal('privacy')}>{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</li>
              <li className="menu-item" onClick={() => handleShowModal('howToUse')}>{language === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}</li>
              <li className="menu-item" onClick={() => handleShowModal('faq')}>{language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}</li>
            </ul>
          </div>
          <div className="address-section">
            <h4 className="menu-title">{language === 'ar' ? 'العنوان' : 'Address'}</h4>
            <p className="address">
              {language === 'ar' ? 'بوابة برج 2، 156،' : 'Gate Tower 2, 156,'}<br />
              {language === 'ar' ? 'شارع الرباط، أبو ظبي' : 'Rabat street, Abu Dhabi'}
            </p>
            <p className="address">
              {language === 'ar' ? '+3255 456 789' : '+3255 456 789'}<br />
              <a href="mailto:info@handsappuae.com" className="text-light">info@handsappuae.com</a>
            </p>
            {/* Email Subscription Form */}
            <form onSubmit={handleEmailSubmit} className="email-form">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                className="email-input"
                required
              />
              <button type="submit" className="email-submit">{language === 'ar' ? 'اشتراك' : 'Subscribe'}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        {language === 'ar' ? 'حقوق النشر © HANDSAPPUAE 2024' : 'Copyright © HANDSAPPUAE 2024'}
      </div>

      <Modals show={showModal} handleClose={handleCloseModal} modalType={modalType} />
    </footer>
  );
};

export default Footer;
