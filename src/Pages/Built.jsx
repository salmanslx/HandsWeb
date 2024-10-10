import React from 'react';
import logo from '../Assets/logo (1).png';
import './built.css';
import { useLanguage } from '../Components/LanguageContext'; // Import useLanguage hook

function Built() {
  const { language } = useLanguage(); // Access the current language

  return (
    <div id='built' className={language === 'ar' ? 'rtl' : 'ltr'}>
      <h3 className="built-title fw-bold">
        {language === 'en' ? 'BUILD CAREER WITH HANDS' : 'بناء مسيرة مهنية مع الأيدي'}
      </h3>
      <div className='maindiv'>
        <div className='leftside'>
          <h2>
            {language === 'en' ? 'Wanna Join Our Team ?' : 'هل ترغب في الانضمام إلى فريقنا؟'}
          </h2>
          <p>
            {language === 'en'
              ? 'We’re looking for dedicated and innovative minds to join us on this journey. If you’re driven by purpose and want to make a difference, HANDS is the place for you.'
              : 'نحن نبحث عن عقول مكرسة ومبتكرة للانضمام إلينا في هذه الرحلة. إذا كنت مدفوعاً بالهدف وترغب في إحداث فرق، فإن الأيدي هو المكان المناسب لك.'}
          </p>
          <div className="d-flex">
            <a className="btn dbtn p-2" href="/career">
              {language === 'en' ? 'Know More...' : 'تعرف على المزيد...'}
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
