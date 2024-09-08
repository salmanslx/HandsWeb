import React from 'react';
import { useLanguage } from '../Components/LanguageContext';
import './download.css';
import frame5 from '../Assets/ph2.png';

function Download() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="download-container" id='download'>
      <div className='content1'>
        <h1>
          {language === 'en' ? (
            <>
              Download Hands App on iOS <br /> and Android to start <br /> connecting and <br /> helping today.
            </>
          ) : (
            <>
              قم بتنزيل تطبيق الأيدي على نظامي<br /> دائرة الرقابة الداخلية و أندرويد  للبدء<br /> في التواصل  والمساعدة اليوم
            </>
          )}
        </h1><br />
        <div className="button-container">
          <a className="btn dbtn p-2" href="#">
            <i className="fa-brands fa-apple pe-2 fa-lg"></i>
            {language === 'en' ? 'App Store' : 'متجر التطبيقات'}
          </a>
          <a className="btn dbtn p-2" href="#">
            <i className="fa-brands fa-google-play pe-2"></i>
            {language === 'en' ? 'Google Play' : 'متجر جوجل بلاي'}
          </a>
        </div>
        <div className="image-container">
          <img src={frame5} alt={language === 'en' ? "Image" : "صورة"} />
        </div>
      </div>
    </div>
  );
}

export default Download;
