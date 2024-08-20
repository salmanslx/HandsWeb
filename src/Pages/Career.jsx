import React, { useState } from 'react';
import './career.css';
import { Button } from 'react-bootstrap';
import FormModal from '../Modals/Formmodal';
import inf from '../Assets/influvencer.jpg';
import Header from '../Components/Header'

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

  const toggleAccordion = (index) => {
    setOpenJobIndex(openJobIndex === index ? null : index);
  };

  const handleShowJobModal = () => setShowJobModal(true);
  const handleCloseJobModal = () => setShowJobModal(false);

  const handleShowInfluencerModal = () => setShowInfluencerModal(true);
  const handleCloseInfluencerModal = () => setShowInfluencerModal(false);

  return (
 
    
      <div className='career'>
      <Header/>
        <div className="careers-container">
          <h1 className='d-flex justify-content-center '>Join the HANDS Team</h1>
          <p>
            At HANDS, we believe in creating a work environment that fosters creativity,
            collaboration, and growth. Our team is our greatest asset, and we’re always on
            the lookout for passionate, innovative individuals who are eager to make a difference.
          </p>
    
          <section className="open-positions mt-5">
            <h2>Current Openings</h2>
            {jobListings.map((job, index) => (
              <div key={index} className="job-listing bg-secondary rounded">
                <div className="job-header" onClick={() => toggleAccordion(index)}>
                  <span className="arrow">-</span>
                  <h4 className="job-title">{job.title}</h4>
                </div>
                {openJobIndex === index && (
                  <div className="accordion-content">
                    <p className='text-dark'><strong>Location:</strong> {job.location}</p>
                    <p className='text-dark'>{job.description}</p>
                    <Button className="apply-btn" onClick={handleShowJobModal}>Apply Now</Button>
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
                <h4 className='mt-5 text-dark'>We’re always on the lookout for Creative Influencers!</h4>
                <p className='text-secondary'>
                  HANDS is more than just an app; it’s a movement. We’re looking for influencers
                  who share our passion for helping people and want to be part of something bigger.
                </p>
                <Button className="apply-btn" onClick={handleShowInfluencerModal}>Apply Now</Button>
              </div>
              <div className="col-4">
                <img className='rounded' style={{  maxWidth: '350px' }} src={inf} alt="Influencer" />
              </div>
            </div>
          </div>
          <FormModal show={showInfluencerModal} handleClose={handleCloseInfluencerModal} isInfluencerForm={true} />
        </div>
      </div>
  
  );
};

export default Career;
