import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import faqData from './faq.json';
import './allModals.css';

function Faqmodals({ show, handleClose }) {

  const [activeKey, setActiveKey] = useState(null);


  const handleAccordionClick = (key) => {

    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Modal show={show} onHide={handleClose} animation={false} className='mainclass'>
      <Modal.Header closeButton className="custom-modal-header">
        <h1>FAQ</h1>
      </Modal.Header>
      <Modal.Body>
        <Accordion activeKey={activeKey}>
          {faqData.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header onClick={() => handleAccordionClick(index.toString())}>
                <span className="faq-number">{item.number}: </span>{item.question}
              </Accordion.Header>
              <Accordion.Body>
                <p>{item.answer}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Modal.Body>
    </Modal>
  );
}

export default Faqmodals;
