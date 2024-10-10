import React from 'react';
import './about.css';
import image from '../Assets/pph.png';
import { useLanguage } from '../Components/LanguageContext'; // Import useLanguage hook

function About() {
  const { language } = useLanguage(); // Access the current language

  return (
    <div className={`container-ab ${language === 'ar' ? 'rtl' : 'ltr'}`} id='about'>
      <div className={`right-section-ab ${language === 'ar' ? 'text-end' : 'text-start'}`}>
        <h1 className="title-ab fw-bold mt-5">
          {language === 'en' ? 'ABOUT' : 'معلومات عنا'}
        </h1>
        <p className="description-ab">
          {language === 'en' ? 
            'Hands App was born out of a simple idea: to create a platform that brings people together through acts of kindness and mutual support. Our journey began with a shared vision of fostering stronger, more connected communities in the UAE, where everyone feels empowered to help and be helped.' : 
            'تطبيق Hands نشأ من فكرة بسيطة: إنشاء منصة تجمع الناس من خلال أفعال اللطف والدعم المتبادل. بدأت رحلتنا برؤية مشتركة لتعزيز المجتمعات الأقوى والأكثر اتصالًا في الإمارات العربية المتحدة، حيث يشعر الجميع بالتمكين لمساعدة الآخرين والحصول على المساعدة.'}
        </p>
        
        <div className="stats">
          <div className="stat">
            <h5>{language === 'en' ? 'MISSION' : 'المهمة'}</h5>
            <br />
            {language === 'en' ? 
              'To empower individuals within the UAE community by facilitating connections, fostering mutual support, and promoting a culture of kindness and collaboration through our innovative platform.' : 
              'تمكين الأفراد ضمن مجتمع الإمارات من خلال تسهيل الروابط وتعزيز الدعم المتبادل وتعزيز ثقافة اللطف والتعاون من خلال منصتنا المبتكرة.'}
          </div>
          <div className="stat">
            <h5>{language === 'en' ? 'VISION' : 'الرؤية'}</h5>
            <br />
            {language === 'en' ? 
              'To create thriving, interconnected communities across the UAE where every individual feels empowered to offer help, seek assistance, and contribute positively to the well-being and growth of their neighborhood.' : 
              'خلق مجتمعات مزدهرة ومترابطة عبر الإمارات حيث يشعر كل فرد بالتمكين لتقديم المساعدة، طلب الدعم، والمساهمة بشكل إيجابي في رفاهية ونمو حيهم.'}
          </div>
        </div>
      </div>
      <div className={`left-section-ab p-3  ${language === 'ar' ? 'text-start' : 'text-end'}`}>
        <img className="image-ab " src={image} alt="App Screenshot" />
      </div>
    </div>
  );
}

export default About;
