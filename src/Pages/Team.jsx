import React, { useState } from 'react';
import './team.css';
import { useLanguage } from '../Components/LanguageContext'; // Import useLanguage hook

const teamData = [
  {
    name: { en: 'Hamid', ar: 'حامد' },
    subtitle: { en: 'Chief Operating Officer (COO)', ar: 'رئيس العمليات' },
    description: { en: 'A must-have app for everyone looking to simplify their life.', ar: 'تطبيق لا غنى عنه لكل من يبحث عن تبسيط حياته.' },
    avatar: 'https://img.freepik.com/premium-photo/hyperrealistische-3d-cartoon-personage-rendering-en-animatie_899449-104985.jpg'
  },
  {
    name: { en: 'Abu Saif', ar: 'أبو سيف' },
    subtitle: { en: 'Founder & CEO', ar: 'المؤسس والرئيس التنفيذي' },
    description: { en: 'The app allows you to dull the pain of losing your wife and dog.', ar: 'التطبيق يساعدك على تخفيف ألم فقدان زوجتك وكلبك.' },
    avatar: 'https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg'
  },
  {
    name: { en: 'Faisal', ar: 'فيسال' },
    subtitle: { en: 'Chief Technology Officer (CTO)', ar: 'رئيس التقنية' },
    description: { en: 'This app has changed the way I manage my daily tasks.', ar: 'هذا التطبيق غيّر الطريقة التي أدير بها مهامي اليومية.' },
    avatar: 'https://img.freepik.com/free-photo/view-3d-businessman_23-2150709814.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid'
  },
  // Add other team members here with translated fields
];

function Team() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle card in the center
  const { language } = useLanguage(); // Access the current language

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < teamData.length - 1 ? prevIndex + 1 : 0));
  };

  const getCardClass = (index) => {
    if (index === activeIndex) return 'cardt-center';
    if (index === (activeIndex + 1) % teamData.length) return 'cardt-right';
    if (index === (activeIndex - 1 + teamData.length) % teamData.length) return 'cardt-left';
    return 'cardt-hidden';
  };

  return (
    <div id='team' className={`maintm ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <h1 className="team-title fw-bold d-flex justify-content-center mt-5">
        {language === 'en' ? 'TEAM' : 'الفريق'}
      </h1>
      <div className="team-container-wrapper">
        <div className="team-container">
          {teamData.map((member, index) => (
            <div
              className={`cardt ${getCardClass(index)}`}
              key={index}
              style={{ backgroundImage: `url(${member.avatar})` }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="cardt-header">
                <div>
                  <h4 className="name">{language === 'en' ? member.name.en : member.name.ar}</h4>
                  <p className="subtitle">{language === 'en' ? member.subtitle.en : member.subtitle.ar}</p>
                </div>
              </div>
              <div className="cardt-body">
                <p>{language === 'en' ? member.description.en : member.description.ar}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="control-btn right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Team;
