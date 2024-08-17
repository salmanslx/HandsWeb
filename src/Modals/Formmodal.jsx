import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './formmodal.css';

const FormModal = ({ show, handleClose, isInfluencerForm }) => {
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
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.cv) errors.cv = 'Please upload your CV';

    // Only validate these fields if it's the influencer form
    if (isInfluencerForm) {
      if (!formData.gender) errors.gender = 'Gender is required';
      if (!formData.category) errors.category = 'Category is required';
      if (!formData.socialMedia) errors.socialMedia = 'Social Media link is required';
    } else {
      if (!formData.contact) errors.contact = 'Contact number is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSuccess('Your application has been submitted successfully!');
      console.log(formData);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isInfluencerForm ? 'Influencer Application' : 'Apply Now'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="application-form">
        {formSuccess && <p className="success-message">{formSuccess}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group">
            <Form.Label htmlFor="name">Full Name:</Form.Label>
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
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </Form.Group>

          {/* Conditional fields based on the form type */}
          {isInfluencerForm ? (
            <>
              <Form.Group className="form-group">
                <Form.Label htmlFor="gender">Gender:</Form.Label>
                <Form.Control
                  as="select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Control>
                {formErrors.gender && <p className="error-message">{formErrors.gender}</p>}
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="category">Category:</Form.Label>
                <Form.Control
                  as="select"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Technology">Technology</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Travel">Travel</option>
                  {/* Add more categories as needed */}
                </Form.Control>
                {formErrors.category && <p className="error-message">{formErrors.category}</p>}
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="socialMedia">Social Media Link:</Form.Label>
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
              <Form.Label htmlFor="contact">Contact Number:</Form.Label>
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
            <Form.Label htmlFor="cv">Upload CV:</Form.Label>
            <Form.Control
              type="file"
              id="cv"
              name="cv"
              onChange={handleChange}
            />
            {formErrors.cv && <p className="error-message">{formErrors.cv}</p>}
          </Form.Group>
          <Button type="submit" className="submit-btn">
            Submit Application
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
