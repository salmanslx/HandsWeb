import React from 'react';
import './home.css';
import scrns from '../Assets/scrns.png';
import About from '../Pages/About';
import Feature from '../Pages/Feature';
import Team from '../Pages/Team';
import Built from '../Pages/Built';
import Download from '../Pages/Download';
import Footer from './Footer';
import Header from './Header';
import Screens from '../Pages/Screens';
import Testimonial from '../Pages/Testimonial';
import Contact from '../Pages/Contact';
import { useLanguage } from './LanguageContext'; // Import useLanguage hook

function Home() {
  const { language } = useLanguage(); // Access the current language

  return (
    <>
      <Header />
      <div className={`home-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <h1>{language === 'en' ? 'The Hands app for Helps' : 'تطبيق الأيدي للمساعدة'}</h1>
        <p>
          {language === 'en' ? 
            'To empower individuals within the UAE community by facilitating connections, fostering mutual support, and promoting a culture of kindness and collaboration through our innovative platform.' : 
            'تمكين الأفراد ضمن مجتمع الإمارات من خلال تسهيل الروابط وتعزيز الدعم المتبادل وتعزيز ثقافة اللطف والتعاون من خلال منصتنا المبتكرة.'}
        </p>
        <div className="button-container">
          <a className="btn dbtn p-2" href="#">
            <i className="fa-brands fa-apple pe-2 fa-lg"></i>
            {language === 'en' ? 'App Store' : 'متجر التطبيقات'}
          </a>
          <a className="btn dbtn p-2" href="#">
            <i className="fa-brands fa-google-play pe-2"></i>
            {language === 'en' ? 'Google Play' : 'جوجل بلاي'}
          </a>
        </div>
        <div className='imgcon'>
          <img src={scrns} alt="" />
        </div>
      </div>
      <About />
      <Feature />
      {/* <Team /> */}
      <Built />
      <Screens />
      {/* <Testimonial /> */}
      <Download />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
