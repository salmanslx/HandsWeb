import React, { useState } from 'react';
import './career.css';
import { Button } from 'react-bootstrap';
import FormModal from '../Modals/Formmodal';
import inf from '../Assets/influvencer.jpg';
import { useLanguage } from '../Components/LanguageContext';
import Footer from '../Components/Footer';
import Preloader from '../Components/Preloader';

const jobListings = [
  {
    title: 'Software Engineer',
    location: 'Remote',
    description: 'Join our team to build cutting-edge software solutions...',
  },
  {
    title: 'Product Manager',
    location: 'New York, USA',
    description: 'Lead the product development process from ideation to launch...',
  },
  // Add more job listings as needed
];

const Career = () => {
  const [openJobIndex, setOpenJobIndex] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showInfluencerModal, setShowInfluencerModal] = useState(false);
  const { language } = useLanguage();

  const toggleAccordion = (index) => {
    setOpenJobIndex(openJobIndex === index ? null : index);
  };

  const handleShowJobModal = () => setShowJobModal(true);
  const handleCloseJobModal = () => setShowJobModal(false);

  const handleShowInfluencerModal = () => setShowInfluencerModal(true);
  const handleCloseInfluencerModal = () => setShowInfluencerModal(false);

  return (
    <div className='career'>
       <Preloader />
      {/* <Header /> */}
      <div className="careers-container">
      <h1 className='d-flex justify-content-center'>
  {language === 'en' ? (
    <>
      Join the  <span className="team-red"> HANDS </span>Family
    </>
  ) : (
    <>
      انضم إلى  <span className="team-red">الأيدي</span>عائلة </>
  )}
</h1>

        <p>
          {language === 'en' ? 
            'At HANDS, we believe in creating a work environment that fosters creativity, collaboration, and growth. Our team is our greatest asset, and we’re always on the lookout for passionate, innovative individuals who are eager to make a difference.' : 
            'في الأيدي، نؤمن بخلق بيئة عمل تعزز الإبداع والتعاون والنمو. فريقنا هو أعظم أصولنا، ونحن دائماً في بحث عن أفراد متحمسين ومبتكرين يتوقون لإحداث فرق.'
          }
        </p>

        <section className="open-positions mt-5">
          <h2>{language === 'en' ? 'Current Openings' : 'الوظائف الحالية'}</h2>
          {jobListings.map((job, index) => (
            <div key={index} className="job-listing bg-dark rounded">
              <div className="job-header" onClick={() => toggleAccordion(index)}>
                <span className="arrow">-</span>
                <h4 className="job-title">{language === 'en' ? job.title : translateJobTitle(job.title)}</h4>
              </div>
              {openJobIndex === index && (
                <div className="accordion-content">
                  <p className='text'><strong>{language === 'en' ? 'Location:' : 'الموقع:'}</strong> {language === 'en' ? job.location : translateJobLocation(job.location)}</p>
                  <p className='text'>{language === 'en' ? job.description : translateJobDescription(job.description)}</p>
                  <Button className="apply-btn" onClick={handleShowJobModal}>
                    {language === 'en' ? 'Apply Now' : 'قدم الآن'}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </section>
        <FormModal show={showJobModal} handleClose={handleCloseJobModal} isInfluencerForm={false} />

        {/* Influencer Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <h3 className='mt-5 text-dark'>
                {language === 'en' ? 'We’re always on the lookout for Creative Influencers!' : 'نحن دائماً في بحث عن مؤثرين مبدعين!'}
              </h3>
              <p>
                {language === 'en' ? 
                  'HANDS is more than just an app; it’s a movement. We’re looking for influencers who share our passion for helping people and want to be part of something bigger.' : 
                  'الأيدي هو أكثر من مجرد تطبيق؛ إنه حركة. نحن نبحث عن مؤثرين يشاركونا شغفنا بمساعدة الناس ويرغبون في أن يكونوا جزءاً من شيء أكبر.'
                }
              </p>
              <Button className="apply-btn" onClick={handleShowInfluencerModal}>
                {language === 'en' ? 'Apply Now' : 'قدم الآن'}
              </Button>
            </div>
            <div className="col-4">
              <img className='rounded' style={{ maxWidth: '350px' }} src={inf} alt="Influencer" />
            </div>
          </div>
        </div>
        <FormModal show={showInfluencerModal} handleClose={handleCloseInfluencerModal} isInfluencerForm={true} />
      </div>
      <Footer/>
    </div>
    
  );
};

const translateJobTitle = (title) => {
  const translations = {
    'Software Engineer': 'مهندس برمجيات',
    'Product Manager': 'مدير منتج',
    // Add more translations as needed
  };
  return translations[title] || title;
};

const translateJobLocation = (location) => {
  const translations = {
    'Remote': 'عن بُعد',
    'New York, USA': 'نيويورك، الولايات المتحدة',
    // Add more translations as needed
  };
  return translations[location] || location;
};

const translateJobDescription = (description) => {
  const translations = {
    'Join our team to build cutting-edge software solutions...': 'انضم إلى فريقنا لبناء حلول برمجية متطورة...',
    'Lead the product development process from ideation to launch...': 'قُد عملية تطوير المنتج من الفكرة إلى الإطلاق...',
    // Add more translations as needed
  };
  return translations[description] || description;
};

export default Career;
