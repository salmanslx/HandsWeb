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
      <div className={`home-container mt-3 ${language === 'ar' ? 'rtl' : 'ltr'}`} id="home"> {/* Fixed ID */}
        <div className="grid-container">
          <div className="text-section">
            <h1>{language === 'en' ? 'HANDS Ways To Earn Money By Helping Others!' : 'طرق الأيدي لكسب المال عن طريق مساعدة الآخرين!'}</h1>
            <p>
              {language === 'en' ? 
                'To empower individuals within the UAE community by facilitating connections, fostering mutual support, and promoting a culture of kindness and collaboration through our innovative platform.' : 
                'تمكين الأفراد ضمن مجتمع الإمارات من خلال تسهيل الروابط وتعزيز الدعم المتبادل وتعزيز ثقافة اللطف والتعاون من خلال منصتنا المبتكرة.'}
            </p>
            <div className="button-container">
          <a className="btn dbtn p-2 me-3" href="#">
            <i className="fa-brands fa-apple pe-2 fa-lg"></i>
            {language === 'en' ? 'App Store' : 'متجر التطبيقات'}
          </a>
          <a className="btn dbtn p-2" href="#">
            <i className="fa-brands fa-google-play pe-2"></i>
            {language === 'en' ? 'Google Play' : 'جوجل بلاي'}
          </a>
        </div>
          </div>
          <div className='imgcon mt-5 justify-content-center'>
            <img src={scrns} alt="Screenshots of the Hands app showing its features." /> {/* Improved alt text */}
          </div>
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
