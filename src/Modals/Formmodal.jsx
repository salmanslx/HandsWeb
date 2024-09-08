import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './formmodal.css';
import { useLanguage } from '../Components/LanguageContext';

const FormModal = ({ show, handleClose, isInfluencerForm }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    gender: '',
    category: '',
    socialMedia: '',
    cv: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = language === 'en' ? 'Name is required' : 'الاسم مطلوب';
    if (!formData.email) errors.email = language === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب';
    if (!formData.cv) errors.cv = language === 'en' ? 'Please upload your CV' : 'يرجى رفع سيرتك الذاتية';

    if (isInfluencerForm) {
      if (!formData.gender) errors.gender = language === 'en' ? 'Gender is required' : 'الجنس مطلوب';
      if (!formData.category) errors.category = language === 'en' ? 'Category is required' : 'الفئة مطلوبة';
      if (!formData.socialMedia) errors.socialMedia = language === 'en' ? 'Social Media link is required' : 'رابط الوسائط الاجتماعية مطلوب';
    } else {
      if (!formData.contact) errors.contact = language === 'en' ? 'Contact number is required' : 'رقم الاتصال مطلوب';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSuccess(language === 'en' ? 'Your application has been submitted successfully!' : 'تم تقديم طلبك بنجاح!');
      console.log(formData);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isInfluencerForm ? (language === 'en' ? 'Influencer Application' : 'طلب مؤثر') : (language === 'en' ? 'Apply Now' : 'قدم الآن')}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="application-form">
        {formSuccess && <p className="success-message">{formSuccess}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group">
            <Form.Label htmlFor="name">{language === 'en' ? 'Full Name:' : 'الاسم الكامل:'}</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label htmlFor="email">{language === 'en' ? 'Email:' : 'البريد الإلكتروني:'}</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </Form.Group>

          {isInfluencerForm ? (
            <>
              <Form.Group className="form-group">
                <Form.Label htmlFor="gender">{language === 'en' ? 'Gender:' : 'الجنس:'}</Form.Label>
                <Form.Control
                  as="select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">{language === 'en' ? 'Select Gender' : 'اختر الجنس'}</option>
                  <option value="Male">{language === 'en' ? 'Male' : 'ذكر'}</option>
                  <option value="Female">{language === 'en' ? 'Female' : 'أنثى'}</option>
                  <option value="Other">{language === 'en' ? 'Other' : 'آخر'}</option>
                </Form.Control>
                {formErrors.gender && <p className="error-message">{formErrors.gender}</p>}
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="category">{language === 'en' ? 'Category:' : 'الفئة:'}</Form.Label>
                <Form.Control
                  as="select"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">{language === 'en' ? 'Select Category' : 'اختر الفئة'}</option>
                  <option value="Fashion">{language === 'en' ? 'Fashion' : 'موضة'}</option>
                  <option value="Technology">{language === 'en' ? 'Technology' : 'تكنولوجيا'}</option>
                  <option value="Fitness">{language === 'en' ? 'Fitness' : 'لياقة بدنية'}</option>
                  <option value="Travel">{language === 'en' ? 'Travel' : 'سفر'}</option>
                </Form.Control>
                {formErrors.category && <p className="error-message">{formErrors.category}</p>}
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="socialMedia">{language === 'en' ? 'Social Media Link:' : 'رابط الوسائط الاجتماعية:'}</Form.Label>
                <Form.Control
                  type="url"
                  id="socialMedia"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleChange}
                />
                {formErrors.socialMedia && <p className="error-message">{formErrors.socialMedia}</p>}
              </Form.Group>
            </>
          ) : (
            <Form.Group className="form-group">
              <Form.Label htmlFor="contact">{language === 'en' ? 'Contact Number:' : 'رقم الاتصال:'}</Form.Label>
              <Form.Control
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
              {formErrors.contact && <p className="error-message">{formErrors.contact}</p>}
            </Form.Group>
          )}
          <Form.Group className="form-group">
            <Form.Label htmlFor="cv">{language === 'en' ? 'Upload CV:' : 'تحميل السيرة الذاتية:'}</Form.Label>
            <Form.Control
              type="file"
              id="cv"
              name="cv"
              onChange={handleChange}
            />
            {formErrors.cv && <p className="error-message">{formErrors.cv}</p>}
          </Form.Group>
          <Button type="submit" className="submit-btn">
            {language === 'en' ? 'Submit Application' : 'تقديم الطلب'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
